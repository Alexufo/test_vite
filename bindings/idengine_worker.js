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





// class benchmark {

//   constructor(name) {
//     this.name = name;
//     this.p1 = '';
//     this.p2 = '';
//   }
//   start() {
//     this.p1 = performance.now();
//   }

//   stop() {
//     this.p2 = performance.now();
//     let total = ((this.p2 - this.p1) / 1000).toFixed(3) + " sec";

//     postMessage({
//       requestType: 'wasmEvent',
//       data: { type: 'benchmark', name: this.name, desc: "🕔 " + this.name + ": " + total }
//     });

//   }
// }

// let _bench_process = new benchmark("Session Process");




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
  console.time("Create Engine");
  const engine = new SmartIDEngine.seIdEngine();
  console.timeEnd("Create Engine");
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

  // For images with alpha channel. 
  // sessionSettings.SetOption("common.rgbPixelFormat", "RGBA");

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

  function resultObject(result, templateSize) {

    const templateDetection = getTemplateDetection(result);
    const templateSegmentation = getTemplateSegmentation(result);

    return {
      requestType: 'result',
      docType: result.GetDocumentType(),
      data: getTextFields(result),
      images: getImageFields(result, templateSize, templateDetection, templateSegmentation),
      templateDetection,
      templateSegmentation,
    };
  }


  // Frame processing method
  function recognizerFrame(imageData, width, height) {

    const cleanData = removeAlphaChannel(imageData.data);
    const rawData = cleanData.buffer;
    const channels = rawData.byteLength / (height * width); // Number of channels
    const stride = channels >= 3 ? (rawData.byteLength / height) : width; // Stride calculation
    const imgSrc = new SmartIDEngine.seImageFromBuffer(rawData, width, height, stride, channels);
    console.time("spawned Session");
    const result = spawnedSession.Process(imgSrc);
    console.timeEnd("spawned Session");
    /** we must feed the system if it still feels image hungry */

    if (!result.GetIsTerminal()) {
      return {
        requestType: 'FeedMeMore',
        templateDetection: getTemplateDetection(result),
        templateSegmentation: getTemplateSegmentation(result)
      };
    }
    const templateSize = imgSrc.GetSize();
    console.log(templateSize);
    const resultMessage = resultObject(result, templateSize);

    imgSrc.delete();
    result.delete();
    return resultMessage;
  }


  function recognizeFile(imageData) {
    const imgSrc = new SmartIDEngine.seImage(imageData);
    const templateSize = imgSrc.GetSize();
    console.time("spawned Session");
    const result = spawnedSession.Process(imgSrc);
    console.timeEnd("spawned Session");

    const resultMessage = resultObject(result, templateSize);

    imgSrc.delete();
    result.delete();
    //console.log(resultMessage);
    return resultMessage;
  }

  onmessage = function (msg) {
    switch (msg.data.requestType) {
      case 'frame':
        console.log("spawnedSession");
        //console.log(spawnedSession);


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
  console.time("Session activation");
  try {
    // get dynamic key
    const dynKey = spawnedSession.GetActivationRequest();

    const req = new XMLHttpRequest();
    req.open('POST', IdEngineConfig.activationUrl, false); // false for sync request!
    req.setRequestHeader('Content-type', 'text/plain'); // json content type will be preflighted!
    req.send(`{"dynKey":"${dynKey}"}`);

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
  console.timeEnd("Session activation");
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
    // sr = IdTemplateSegmentationResult
    const sr = result.GetTemplateSegmentationResult(i);
    // qmi = QuadranglesMapIterator
    let qmi = sr.RawFieldQuadranglesBegin();
    for (; !qmi.Equals(sr.RawFieldQuadranglesEnd()); qmi.Advance()) {
      const arr = [];
      const q = qmi.GetValue();
      arr.push(q.GetPoint(0));
      arr.push(q.GetPoint(1));
      arr.push(q.GetPoint(2));
      arr.push(q.GetPoint(3));
      tempData.push(arr);
    }
  }
  return tempData;
}

/* Get text fields after*/

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

/* Get supported documents modes */

// function getSupportedModes(result) {

//   const data = {};
//   const tf = result.SupportedDocumentTypesBegin();
//   for (; !tf.Equals(result.SupportedModesEnd()); tf.Advance()) {

//     console.log(tf.GetValue());
//     console.log(tf.GetValue());

//   }
//   //return data;
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

function getImageFields(result, templateSize, templateDetection, templateSegmentation) {
  const images = {};

  // add svg masks for segmentation demonstration in total result
  images.mask = getSvgQuads(result, templateSize, templateDetection, templateSegmentation);
  const img = result.ImageFieldsBegin();
  for (; !img.Equals(result.ImageFieldsEnd()); img.Advance()) {
    const key = img.GetKey();
    const field = img.GetValue();
    images[key] = base64toBlob(field.GetValue().GetBase64String());
  }


  return images;

}

// Remove every 4 simbol in arr (remove alpha byte)
// intel i5 3750K ~6 ms overhead

function removeAlphaChannel(data) {

  const delta = 4;
  const length = data.length;
  const newLength = length - length / delta;
  const rgbArr = new Uint8Array(newLength);

  // ~27ms overhead for removing aplha from canvas byteArray
  let j = 0;

  for (i = 0; i < data.length; i = i + delta) {
    rgbArr[j] = data[i];
    rgbArr[j + 1] = data[i + 1];
    rgbArr[j + 2] = data[i + 2];
    j = j + 3;
  }

  return rgbArr;
}


function getSvgQuads( result, templateSize, templateDetection, templateSegmentation) {

  let areas = '';
  let fields = '';

  if (templateDetection) {
    for (let i = 0; i < templateDetection.length; i++) {
      const p = templateDetection[i];
      let arr = [p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y];
      areas += `<polygon points="${arr.join(" ")}" class="areas" />`;
    }
  }
  if (templateSegmentation) {
    for (let i = 0; i < templateSegmentation.length; i++) {
      const p = templateSegmentation[i];
      let arr = [p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y];

      fields += `<polygon points="${arr.join(" ")}" class="fields" />`;
    }
  }

  let svg = `<svg height="${templateSize.height}" width="${templateSize.width}"  xmlns="http://www.w3.org/2000/svg">
                <style type="text/css" >
                <![CDATA[
                    .areas {
                        stroke: #989898;
                        fill: #e6e6e6;
                        stroke-width: 5px;
                        stroke-dasharray: 25;

                    }
                    .fields {
                        stroke: #909090;
                        fill: none;
                        stroke-width: 3;
                    }
                ]]>
            </style>
            ${areas}
            ${fields}
            </svg>
    `;

  let blob = new Blob([svg], { type: 'image/svg+xml' });
  let url = URL.createObjectURL(blob);
  return url;
}
