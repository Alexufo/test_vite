/* eslint-disable no-plusplus */
/* eslint-disable no-console */
postMessage({ requestType: 'wasmEvent', data: { type: 'started' } });

importScripts('./../bindings/idengine_wasm.js');

const IdEngineConfig = {
  activationUrl: 'https://127.0.0.1:8000',
  docTypes: 'mrz.*',
  secretKey: '2a883092fffd13a45a2bc8cb4ba781b325abfcd6b7b8efc76c4cc008610327e79f485a456a13e24318163019ef3fb8da5a059b89f2486b989bfaada8f0521ffb6119001fa8b0dbe2923aaf61910e4ea661c9344e38d27103cbd7d2bf08723fb88f20c2ee66bee1cda53e81c8f1b9c4320f72e560bd5972531ff839c49a80bf09',
};

SmartIDEngine().then((SmartIDEngine) => {
  const engine = new SmartIDEngine.seIdEngine();

  // emit wasm ready
  postMessage({ requestType: 'wasmEvent', data: { type: 'ready' } });

  const sessionSettings = engine.CreateSessionSettings();
  sessionSettings.AddEnabledDocumentTypes(IdEngineConfig.docTypes);
  const spawnedSession = engine.SpawnSession(sessionSettings, IdEngineConfig.secretKey);

  function checkSession() {
    // Is settion allready activated?
    if (spawnedSession?.IsActivated()) {
      return;
    }

    try {
      // get dynamic key
      const dynKey = spawnedSession.GetActivationRequest();
      const request = new XMLHttpRequest();
      request.open('POST', IdEngineConfig.activationUrl, false); // false for sync request
      request.send(dynKey);

      if (request.status === 200 && request.responseText.length > 0) {
        spawnedSession.Activate(request.responseText); // sesson activation
      } else {
        postMessage({ requestType: 'wasmEvent', data: { type: 'error', desc: 'something wrong with activation server' } });
        throw Error('something wrong with activation server');
      }

    } catch (error) {
      postMessage({ requestType: 'wasmEvent', data: { type: 'error', desc: error } });
    }
  }

  /**
  *  GetTemplateDetectionResultsCount - Returns the number of detected document pages (templates).
  *  GetTemplateDetectionResult: Returns the document page (template) detection result by index.
  *  (Rectangles of document, photo and etc).
  */

  function getTemplateDetection(result) {
    const tempData = [];
    for (let i = 0; i < result.GetTemplateDetectionResultsCount(); i++) {
      //
      const templateResult = result.GetTemplateDetectionResult(i);
      const tmpl = [];
      const q = templateResult.GetQuadrangle();
      tmpl.push(q.GetPoint(0));
      tmpl.push(q.GetPoint(1));
      tmpl.push(q.GetPoint(2));
      tmpl.push(q.GetPoint(3));
      tempData.push(tmpl);
    }
    return tempData;
  }

  /**
  *  GetTemplateSegmentationResultsCount - Returns the number of document page
  *  (templates) segmentation results.
  *  GetTemplateSegmentationResult: Returns the document page (template)
  *  segmentation result by index.
  *  Rectangles of mrz zones and other text fields.
  */

  function getTemplateSegmentation(result) {
    const tempData = [];
    for (let i = 0; i < result.GetTemplateSegmentationResultsCount(); i++) {
      const IdTemplateSegmentationResult = result.GetTemplateSegmentationResult(i);

      for (let QuadranglesMapIterator = IdTemplateSegmentationResult.RawFieldQuadranglesBegin();
        !QuadranglesMapIterator.Equals(IdTemplateSegmentationResult.RawFieldQuadranglesEnd());
        QuadranglesMapIterator.Advance()) {
        const sgm = [];
        const q = QuadranglesMapIterator.GetValue();
        sgm.push(q.GetPoint(0));
        sgm.push(q.GetPoint(1));
        sgm.push(q.GetPoint(2));
        sgm.push(q.GetPoint(3));
        tempData.push(sgm);
      }
    }
    return tempData;
  }

  function recognizerFrame(imageData, width, height) {
    // Frame processing method
    const rawData = imageData.data.buffer;
    const channels = rawData.byteLength / (height * width); // Number of channels
    const stride = channels >= 3 ? (rawData.byteLength / height) : width; // Stride calculation
    const imgSrc = new SmartIDEngine.seImageFromBuffer(rawData, width, height, stride, channels);

    const result = spawnedSession.Process(imgSrc);

    const resultMessage = {
      requestType: 'result',
      data: {},
      images: {},
      templateDetection: getTemplateDetection(result),
      templateSegmentation: getTemplateSegmentation(result),
    };
    imgSrc.delete();

    /** we must feed the system if it still feels image hungry */

    if (!result.GetIsTerminal()) {
      resultMessage.requestType = 'FeedMeMore';
      return resultMessage;
    }

    const iterTextFields = result.TextFieldsBegin();

    for (iterTextFields; !iterTextFields.Equals(result.TextFieldsEnd()); iterTextFields.Advance()) {
      const key = iterTextFields.GetKey();
      const field = iterTextFields.GetValue();
      resultMessage.data[key] = field.GetValue().GetFirstString();
    }

    if (result.HasImageField('photo')) {
      resultMessage.images.photo = result.GetImageField('photo').GetValue().GetBase64String();
    }

    result.delete();
    return resultMessage;
  }

  function recognizeFile(imageData) {
    const imgSrc = new SmartIDEngine.seImage(imageData);

    const result = spawnedSession.Process(imgSrc);
    const resultMessage = {
      requestType: 'result',
      data: {},
      images: {},
      templateDetection: getTemplateDetection(result),
      templateSegmentation: getTemplateSegmentation(result),
    };

    const iterTextFields = result.TextFieldsBegin();
    for (iterTextFields; !iterTextFields.Equals(result.TextFieldsEnd()); iterTextFields.Advance()) {
      const key = iterTextFields.GetKey();
      const field = iterTextFields.GetValue();
      resultMessage.data[key] = field.GetValue().GetFirstString();
    }

    if (result.HasImageField('photo')) {
      resultMessage.images = result.GetImageField('photo').GetValue().GetBase64String();
    }

    imgSrc.delete();
    result.delete();

    return resultMessage;
  }

  onmessage = function (msg) {
    switch (msg.data.requestType) {
      case 'frame':
        checkSession();
        result = recognizerFrame(
          msg.data.imageData,
          msg.data.width,
          msg.data.height
        );
        postMessage(result);
        break;

      case 'file':
        checkSession();
        result = recognizeFile(msg.data.imageData);
        postMessage(result);
        break;

      case 'reset':
        spawnedSession.Reset();
        postMessage({ requestType: 'wasmEvent', data: { type: 'reset' } });

      // no default
    }
  };
});
