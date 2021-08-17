importScripts("./idengine_wasm.js");

/* 
*  Here was 
*  import SmartIDEngine from './idengine_wasm.js';` 
*  import { checkSession, getTemplateDetection, getTemplateSegmentation, getTextFields, getImageFields } from './helper.js';
*  but es-modules do not work in FF workers. importScripts more universal but less effective
*/

/*import { threads } from "./../js/wasm-feature-detect.js"; */


// threads().then(e => {
//   console.log(e);
// });


// We must check this flags together with Ilya
// var DECLARE_ASM_MODULE_EXPORTS = 1;
// BUILD_AS_WORKER = 0;
// EXPORT_ES6 = 1;
// STRICT = 0;
// var BENCHMARK = 0;
// var EXPORT_NAME = 'Module';
// var ALLOW_BLOCKING_ON_MAIN_THREAD = 1;
// PTHREADS_DEBUG = 0;
// var MINIMAL_RUNTIME = 0;
// var MINIMAL_RUNTIME_STREAMING_WASM_COMPILATION = 0;
// var MINIMAL_RUNTIME_STREAMING_WASM_INSTANTIATION = 0;

class benchmark {

  constructor(name) {
    this.name = name;
    this.p1 = '';
    this.p2 = '';
  }
  start() {
    this.p1 = performance.now();
  }

  stop() {
    this.p2 = performance.now();
    let total = ((this.p2 - this.p1) / 1000).toFixed(3) + " sec";

    postMessage({
      requestType: 'wasmEvent',
      data: { type: 'benchmark', name: this.name, desc: "🕔 " + this.name + ": " + total }
    });

  }
}

let _bench_engine = new benchmark("Create Engine");
let _bench_process = new benchmark("Session Process");


postMessage({ requestType: 'wasmEvent', data: { type: 'started' } });

console.log(SmartIDEngine);


const IdEngineConfig = {
  activationUrl: 'https://localhost:8000/act/',
  docTypes: 'rus.passport.n*',
  secretKey: '2a883092fffd13a45a2bc8cb4ba781b325abfcd6b7b8efc76c4cc008610327e79f485a456a13e24318163019ef3fb8da5a059b89f2486b989bfaada8f0521ffb6119001fa8b0dbe2923aaf61910e4ea661c9344e38d27103cbd7d2bf08723fb88f20c2ee66bee1cda53e81c8f1b9c4320f72e560bd5972531ff839c49a80bf09',
};

// console.log(SmartIDEngine);
// console.log(IdEngineConfig);

SmartIDEngine().then((SmartIDEngine) => {
  _bench_engine.start();
  const engine = new SmartIDEngine.seIdEngine();
  _bench_engine.stop();
  // emit wasm version 
  postMessage({
    requestType: 'wasmEvent',
    data: { type: 'version', desc: SmartIDEngine.seIdEngineGetVersion() }
  });

  // emit wasm ready
  postMessage({ requestType: 'wasmEvent', data: { type: 'ready' } });

  const sessionSettings = engine.CreateSessionSettings();
  sessionSettings.AddEnabledDocumentTypes(IdEngineConfig.docTypes);

  sessionSettings.SetOption("common.extractImageFieldsInSourceResolution", "true");
  sessionSettings.SetOption("common.extractTemplateImages", "true");

  const spawnedSession = engine.SpawnSession(sessionSettings, IdEngineConfig.secretKey);

  /* show all session options */
  /*
    const ss = sessionSettings.OptionsBegin();
    for (; !ss.Equals(sessionSettings.OptionsEnd()); ss.Advance()) {
      const key = ss.GetKey();
      const field = ss.GetValue();
      console.log(`${key} - ${field}`);
    }
  */


  /*
  *  Inside result object in __proto__ you will see all methods 
  */

  function recognizerFrame(imageData, width, height) {
    // Frame processing method
    const rawData = imageData.data.buffer;
    const channels = rawData.byteLength / (height * width); // Number of channels
    const stride = channels >= 3 ? (rawData.byteLength / height) : width; // Stride calculation
    const imgSrc = new SmartIDEngine.seImageFromBuffer(rawData, width, height, stride, channels);
    _bench_process.start();
    const result = spawnedSession.Process(imgSrc);
    _bench_process.stop();
    /** we must feed the system if it still feels image hungry */

    if (!result.GetIsTerminal()) {
      return {
        requestType: 'FeedMeMore',
        templateDetection: getTemplateDetection(result),
        templateSegmentation: getTemplateSegmentation(result)
      };
    }

    const resultMessage = {
      requestType: 'result',
      data: getTextFields(result),
      images: getImageFields(result),
      templateDetection: getTemplateDetection(result),
      templateSegmentation: getTemplateSegmentation(result),
    };

    imgSrc.delete();
    result.delete();
    return resultMessage;
  }


  function recognizeFile(imageData) {
    const imgSrc = new SmartIDEngine.seImage(imageData);
    _bench_process.start();
    const result = spawnedSession.Process(imgSrc);
    console.log(result);
    _bench_process.stop();

    const resultMessage = {
      requestType: 'result',
      docType: result.GetDocumentType(),
      data: getTextFields(result),
      images: getImageFields(result),
      templateDetection: getTemplateDetection(result),
      templateSegmentation: getTemplateSegmentation(result),
    };

    imgSrc.delete();
    result.delete();
    console.log(resultMessage);
    return resultMessage;
  }

  onmessage = function (msg) {
    switch (msg.data.requestType) {
      case 'frame':
        console.log("spawnedSession");
        console.log(spawnedSession);
        checkSession(spawnedSession, IdEngineConfig);
        const resultFrame = recognizerFrame(
          msg.data.imageData,
          msg.data.width,
          msg.data.height
        );
        postMessage(resultFrame);
        break;

      case 'file':
        checkSession(spawnedSession, IdEngineConfig);
        const resultFile = recognizeFile(msg.data.imageData);
        postMessage(resultFile);
        break;

      case 'reset':
        spawnedSession.Reset();
        postMessage({ requestType: 'wasmEvent', data: { type: 'reset' } });
        break;
      // no default
    }
  };
});


/* =========================================================== */


function checkSession(spawnedSession, IdEngineConfig) {

  // Is settion allready activated?
  if (spawnedSession?.IsActivated()) {
    return;
  }

  try {
    // get dynamic key
    const dynKey = spawnedSession.GetActivationRequest();

    const req = new XMLHttpRequest();
    req.open('POST', IdEngineConfig.activationUrl, false); // false for sync request!
    req.setRequestHeader('Content-type', 'text/plain'); // json content type will be preflighted!
    req.send(`{"dynKey":"${dynKey}"}`);

    console.log(`{"dynKey":"${dynKey}"}`);

    if (req.status === 200 & req.responseText.length > 0) {
      spawnedSession.Activate(req.responseText); // sesson activation
    } else {
      postMessage({
        requestType: 'wasmEvent',
        data: {
          type: 'error',
          desc: 'something wrong with activation server'
        }
      });
      // throw Error('something wrong with activation server');
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

/* Get text fields */

function getTextFields(result) {

  const data = {};
  const tf = result.TextFieldsBegin();
  for (; !tf.Equals(result.TextFieldsEnd()); tf.Advance()) {
    let key = tf.GetKey();
    let field = tf.GetValue();
    data[key] = {
      name: key,
      value: field.GetValue().GetFirstString(),
      isAccepted: field.GetBaseFieldInfo().GetIsAccepted()
    };
  }
  return data;
}

// function getTEMP(result) {
//   const data = {};
//   const tf = result.TextFieldsBegin();
//   for (; !tf.Equals(result.TextFieldsEnd()); tf.Advance()) {

//     const key = tf.GetKey();
//     const field = tf.GetValue();
//     data[key] = field.GetValue().GetFirstString();

//     const V = field.GetBaseFieldInfo();
//     const td = V.AttributesStart();
//     for (; !td.Equals(V.AttributesEnd()); td.Advance()) {
//       const key = td.GetKey();
//       const field = td.GetValue();
//       console.log(key);
//       console.log(field);
//     }

//     //console.log(field.GetBaseFieldInfo());
//   }


// }


/* Convert base64 images to blob urls for better reuse in UI */
function base64toBlob(data) {
  const b = atob(data);
  const byteNumbers = new Array(b.length);
  for (let i = 0; i < b.length; i++) {
    byteNumbers[i] = b.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const file = new Blob([byteArray], { type: "image/jpg" + ';base64' });
  return URL.createObjectURL(file);

}

/* Get images fields */

function getImageFields(result) {
  const images = {};

  const img = result.ImageFieldsBegin();
  for (; !img.Equals(result.ImageFieldsEnd()); img.Advance()) {
    const key = img.GetKey();
    const field = img.GetValue();
    images[key] = base64toBlob(field.GetValue().GetBase64String());
  }
  return images;

}

