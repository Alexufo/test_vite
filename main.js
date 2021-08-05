/* eslint-disable no-console */
/* eslint-disable linebreak-style */

// only for UI interaction
import { createApp, reactive } from "/petite-vue.es.js";
// main worker. Workers allow us do not block main thread during recognition.

const SEWorker = new Worker('./bindings/idengine_worker.js', { type: 'module' });

const canvas = document.querySelector('.js-main-canvas');
const overlayCanvas = document.querySelector('.js-overlay-canvas');

const _log = reactive({
    logger: [],
    p1: null,
    performance: null,
    push(string) {
        console.log(string);
        let t = new Date().toLocaleTimeString();
        this.logger.unshift(t + " | " + string);
        // console.log(this.logger);
    },
    performanceStart() {
        this.p1 = performance.now();
    },
    performanceStop() {
        let p2 = performance.now();
        let total = ((p2 - this.p1) / 1000).toFixed(3) + " sec";
        this.performance = ": " + total;
        this.push("Result in: " + total);
    }
});

const _loader = reactive({
    systemReady() {
        this.wasmReady = true;
        return;
    },
    resetUI() {
        _resultData.images = null;
        _resultData.data = null;
        return;
    },
    wasmReady: false,
    imageProcess: false,
    btn_frame_active: false,
    btn_file_active: false,
    wasmVersion: 'waiting...',
    imgSrc: '',
});

const _resultData = reactive({
    images: null,
    data: null
});


createApp({
    _log,
    _loader,
    _resultData,

    recognizerFrame() {
        _log.push('Capture video stream...');
        SEWorker.postMessage(requestFrame());
        _loader.btn_frame_active = true;
        _log.performanceStart();
    },
    recognizeFile(event) {
        _log.performanceStart();
        _loader.btn_file_active = true;
        const file = event.files[0];

        if (file.type && file.type.indexOf('image') === -1) {
            _log.push('File is not an image.', file.type, file);
            return;
        }

        //_loader.imgSrc = URL.createObjectURL(file);

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {

            SEWorker.postMessage({
                requestType: 'file',
                imageData: event.target.result,
            });
        });
        reader.readAsArrayBuffer(file);
    }
}).mount();






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
    animate();
}

main();

function requestFrame() {

    // Show requested images by the wasm
    console.log('%c ', `line-height:8rem;padding-right:25%;background:url(${canvas.toDataURL('image/jpeg', 1.0)}) top left / contain no-repeat`);

    return {
        requestType: 'frame',
        imageData: canvas.getContext('2d', { alpha: false }).getImageData(0, 0, canvas.width, canvas.height),
        width: canvas.width,
        height: canvas.height,
    };
}

function drawQuads(currentResult, cleanCanvas = false) {

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

            overlayCanvas.getContext('2d').lineWidth = 2;
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
            overlayCanvas.getContext('2d').lineWidth = 2;
            overlayCanvas.getContext('2d').strokeStyle = 'green';
            overlayCanvas.getContext('2d').stroke(path);
        }

    }
    // debug drawing
    console.log('%c ', `line-height:8rem;padding-right:25%;background:url(${overlayCanvas.toDataURL('image/jpeg', 1.0)}) top left / contain no-repeat`);

}

SEWorker.onmessage = function (msg) {
    switch (msg.data.requestType) {

        // events from wasm worker
        case 'wasmEvent':

            wasmEmitter(msg.data.data);
            break;

        // processing result 
        case 'result':
            let currentResult = msg.data;
            _loader.btn_frame_active = false;
            _loader.btn_file_active = false;

            _log.performanceStop();
            // timeout event
            if (Object.keys(currentResult.data).length === 0) {
                _log.push('Document Not found 😕');
                _loader.resetUI();
                SEWorker.postMessage({ requestType: 'reset' });
                return
            }
            // push to UI
            _resultData.images = currentResult.images;
            _resultData.data = currentResult.data;

            _log.push('Document Ready 👍');
            // get result
            console.log(currentResult);

            // Clear overlay canvas
            drawQuads(null, true);

            // reset session on result. Overwise you will always get latest document on every request.
            SEWorker.postMessage({ requestType: 'reset' });

            break;
        // providing more images for recognition
        case 'FeedMeMore':
            _log.push('Feed Me More... 🥝');
            drawQuads(msg.data);
            SEWorker.postMessage(requestFrame());
            break;
        // no default
    }
};

function wasmEmitter(evenType) {
    switch (evenType.type) {
        case 'started':
            _log.push('Wasm download and compiling...');
            break;
        case 'ready':
            _log.push('Wasm ready 🟢');
            _loader.systemReady();
            break;
        case 'error':
            _log.push('Error: ' + evenType.desc);
            break;
        case 'version':
            _loader.wasmVersion = evenType.desc;
            _log.push('Version: ' + evenType.desc);
            break;
        case 'reset':
            _log.push('--- Session Reset ---');
            break;
        // no default
    }
}

