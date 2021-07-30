//import './style.css';
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

// only for UI interaction
import { createApp, reactive } from "/petite-vue.es.js";


const _log = reactive({
    logger: [],
    push(string) {
        console.log(string);
        let t = new Date().toLocaleTimeString();
        this.logger.unshift(t + " | " + string);
        // console.log(this.logger);
    }
});
const _loader = reactive({
    wasmReady: false,
    imageProcess: false

});
createApp({
    _log,
    _loader,
    startCapture() {
        _log.push('Capture video stream...');
        SEWorker.postMessage(frameData());
    }
}).mount();

// import main worker. Workers allow us do not block main thread during recognition.
const SEWorker = new Worker('./idengine_worker.js');

const canvas = document.querySelector('.js-main-canvas');
const overlayCanvas = document.querySelector('.js-overlay-canvas');

const fileSelector = document.querySelector('.js-btn-upload');
const startButton = document.querySelector('.js-btn-capture');

let currentResult;



async function main() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
            'Browser API getUserMedia not available'
        );
    }

    // video tag is nessedory to get video from webcam
    const video = document.createElement('video');

    async function setupCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width:
                    {
                        exact: 640
                        //min: 640,
                        //max: 1280, // may be slow? Looks like 640 is ok for most cases.
                    },
                    height:
                    {
                        exact: 480
                        //min: 480,
                        //max: 720,
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

        } catch (err) {
            console.error('There is not access to webcam: ' + err);
        }
    }

    // await of camera init
    await setupCamera();
    video.play();

    // create canvas and run stream from video element
    const { videoWidth, videoHeight } = video;

    canvas.width = overlayCanvas.width = videoWidth;
    canvas.height = overlayCanvas.height = videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

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
        case 'wasmEvent':
            if (msg.data.data === 'started') {
                console.log('Wasm download and compiling...');
                _log.push('Wasm download and compiling...');

            }
            if (msg.data.data === 'ready') {
                console.log('Ready');
                _log.push('Ready');
                _loader.wasmReady = true;
            }
            break;
        case 'result':
            currentResult = msg.data;

            // timeout
            if (Object.keys(currentResult.data).length === 0) {

                _log.push('Document Not found 😕');
                SEWorker.postMessage({ requestType: 'reset' });
                return
            }
            _log.push('Document Ready 👍');
            // get result
            console.log(currentResult);

            // Clear overlay canvas
            drawQuads(true);

            // reset session on result. Overwise you will always get latest document on every request.
            SEWorker.postMessage({ requestType: 'reset' });

            break;
        case 'FeedMeMore':
            console.log('Feed Me More!! 🥝');
            _log.push('Send image...');
            currentResult = msg.data;
            // draw only for
            drawQuads();
            SEWorker.postMessage(frameData());
            break;
        // no default
    }
};




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

function frameData() {

    // Show requested images by the wasm
    console.log('%c ', `line-height:8rem;padding-right:25%;background:url(${canvas.toDataURL('image/jpeg', 1.0)}) top left / contain no-repeat`);

    return {
        requestType: 'frame',
        imageData: canvas.getContext('2d', { alpha: false }).getImageData(0, 0, canvas.width, canvas.height),
        width: canvas.width,
        height: canvas.height,
    };
}