import SmartIDEngine from './idengine_wasm.js';
import { checkSession, getTemplateDetection, getTemplateSegmentation, getTextFields, getImageFields } from './helper.js';
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


postMessage({ requestType: 'wasmEvent', data: { type: 'started' } });

console.log(SmartIDEngine);


const IdEngineConfig = {
  activationUrl: 'https://localhost:8000',
  docTypes: 'mrz.*',
  secretKey: '2a883092fffd13a45a2bc8cb4ba781b325abfcd6b7b8efc76c4cc008610327e79f485a456a13e24318163019ef3fb8da5a059b89f2486b989bfaada8f0521ffb6119001fa8b0dbe2923aaf61910e4ea661c9344e38d27103cbd7d2bf08723fb88f20c2ee66bee1cda53e81c8f1b9c4320f72e560bd5972531ff839c49a80bf09',
};

// console.log(SmartIDEngine);
// console.log(IdEngineConfig);

SmartIDEngine().then((SmartIDEngine) => {
  const engine = new SmartIDEngine.seIdEngine();

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

  /* show all options */
  /*
    const ss = sessionSettings.OptionsBegin();
    for (; !ss.Equals(sessionSettings.OptionsEnd()); ss.Advance()) {
      const key = ss.GetKey();
      const field = ss.GetValue();
      console.log(`${key} - ${field}`);
    }
  */

  function recognizerFrame(imageData, width, height) {
    // Frame processing method
    const rawData = imageData.data.buffer;
    const channels = rawData.byteLength / (height * width); // Number of channels
    const stride = channels >= 3 ? (rawData.byteLength / height) : width; // Stride calculation
    const imgSrc = new SmartIDEngine.seImageFromBuffer(rawData, width, height, stride, channels);

    const result = spawnedSession.Process(imgSrc);

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
    const result = spawnedSession.Process(imgSrc);

    const resultMessage = {
      requestType: 'result',
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
        console.log("--------------");
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
