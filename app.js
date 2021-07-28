/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const SEWorker = new Worker('./idengine_worker.js');

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const overlayCanvas = document.getElementById('overlayCanvas');

const fileSelector = document.getElementById('select_file');
const startButton = document.getElementById('button_start');

let currentResult;

function frameData() {
  // Show images that will be requested by the system
  console.log('%c ', `line-height:8rem;padding-right:25%;background:url(${canvas.toDataURL('image/jpeg', 1.0)}) top left / contain no-repeat`);

  return {
    requestType: 'frame',
    imageData: canvas.getContext('2d', { alpha: false }).getImageData(0, 0, canvas.width, canvas.height),
    width: canvas.width,
    height: canvas.height,

  };
}

startButton.addEventListener('click', (event) => {
  SEWorker.postMessage(frameData());
});

fileSelector.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file);
    return;
  }
  const img = new Image();
  img.onload = function () {

  };
  img.src = URL.createObjectURL(file);
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    console.log(event.target.result);
    SEWorker.postMessage({
      requestType: 'file',
      imageData: event.target.result,
    });
  });
  reader.readAsArrayBuffer(file);
});

async function main() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
      'Browser API getUserMedia not available',
    );
  }

  async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width:
        {
          min: 640,
          max: 1280, // may be slow? Looks like 640 is ok for most cases.
        },
        height:
        {
          min: 480,
          max: 720,
        },
      },
      facingMode: 'environment',
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  }

  // await of camera init
  await setupCamera();
  video.play();

  // create canvas and run stream from video element
  const { videoWidth, videoHeight } = video;
  video.width = videoWidth;
  video.height = videoHeight;
  canvas.width = videoWidth;
  canvas.height = videoHeight;

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  overlayCanvas.width = videoWidth;
  overlayCanvas.height = videoHeight;

  function animate() {
    canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
  }

  // console.log(canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height));
  animate();
}

main();

function drawQuads(cleanCanvas = false) {
  // console.log("currentResult.imageType ", currentResult.imageType)
  overlayCanvas.getContext('2d').clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  if (cleanCanvas) {
    return;
  }
  if (currentResult?.templateDetection) {
    for (let i = 0; i < currentResult.templateDetection.length; i++) {
      const templatePoints = currentResult.templateDetection[i];
      const path = new Path2D();
      path.moveTo(templatePoints[0].x, templatePoints[0].y);
      path.lineTo(templatePoints[1].x, templatePoints[1].y);
      path.lineTo(templatePoints[2].x, templatePoints[2].y);
      path.lineTo(templatePoints[3].x, templatePoints[3].y);
      path.lineTo(templatePoints[0].x, templatePoints[0].y);

      overlayCanvas.getContext('2d').lineWidth = 1;
      overlayCanvas.getContext('2d').strokeStyle = 'red';
      overlayCanvas.getContext('2d').stroke(path);
    }
  }
  if (currentResult?.templateSegmentation) {
    for (let i = 0; i < currentResult.templateSegmentation.length; i++) {
      const templatePoints = currentResult.templateSegmentation[i];
      const path = new Path2D();
      path.moveTo(templatePoints[0].x, templatePoints[0].y);
      path.lineTo(templatePoints[1].x, templatePoints[1].y);
      path.lineTo(templatePoints[2].x, templatePoints[2].y);
      path.lineTo(templatePoints[3].x, templatePoints[3].y);
      path.lineTo(templatePoints[0].x, templatePoints[0].y);
      overlayCanvas.getContext('2d').lineWidth = 1;
      overlayCanvas.getContext('2d').strokeStyle = 'green';
      overlayCanvas.getContext('2d').stroke(path);
    }
  }
}

SEWorker.onmessage = function (msg) {
  switch (msg.data.requestType) {
    case 'ready':
      console.log('Ready');
      break;
    case 'result':
      currentResult = msg.data;

      // timeout
      if (currentResult.data === 0) {
        console.log('Document Not found');
      }
      // get result
      console.log(currentResult);

      // Clear overlay canvas
      drawQuads(true);

      // reset session on result. Overwise you will always get latest document on every request.
      SEWorker.postMessage({ requestType: 'reset' });

      break;
    case 'FeedMeMore':
      console.log('Feed Me More!! 🥝');
      currentResult = msg.data;
      // draw only for
      drawQuads();
      SEWorker.postMessage(frameData());
      break;
    // no default
  }
};
