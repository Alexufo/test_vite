import { createApp, reactive } from "./js/petite-vue.es.js";
// petite-vue only for UI interaction

// https://github.com/GoogleChromeLabs/wasm-feature-detect


// use <link rel="modulepreload" to preload workers. Cold start boost
// https://web.dev/module-workers/
// const SEWorker = new Worker('./bindings/idengine_worker', { type: 'module' });
const SEWorker = new Worker('./bindings/idengine_worker.js');

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
});

const _resultData = reactive({
    images: null,
    data: null,
    theme: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ],
    theme_selected: ''
});

createApp({
    _log,
    _loader,
    _resultData,

    recognizerFrame() {
        _log.push('Capture video stream...');
        SEWorker.postMessage(requestFrame());
        _loader.btn_frame_active = true;
    },
    recognizeFile(event) {
        _loader.btn_file_active = true;
        const file = event.files[0];

        if (file.type && file.type.indexOf('image') === -1) {
            _log.push('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {

            SEWorker.postMessage({
                requestType: 'file',
                imageData: event.target.result,
            });
        });
        reader.readAsArrayBuffer(file);
    },
    _setupRouting() {
        const onHashChange = () => {

            if (window.location.hash) {
                _resultData.theme_selected = window.location.hash.substring(1);
            }
        }
        window.addEventListener('hashchange', onHashChange);
        onHashChange();
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

    // access to camera
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

    // dublicate canvas size for overlay
    canvas.width = overlayCanvas.width = videoWidth;
    canvas.height = overlayCanvas.height = videoHeight;

    canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, canvas.width, canvas.height);

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
        imageData: canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height),
        width: canvas.width,
        height: canvas.height,
    };
}




function cleanCanvas() {
    overlayCanvas.getContext('2d').clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
}
function toCanvas(result) {

    cleanCanvas();
    if (result?.templateDetection) {
        for (let i = 0; i < result.templateDetection.length; i++) {
            const p = result.templateDetection[i];
            const path = new Path2D();
            path.moveTo(p[0].x, p[0].y);
            path.lineTo(p[1].x, p[1].y);
            path.lineTo(p[2].x, p[2].y);
            path.lineTo(p[3].x, p[3].y);
            path.lineTo(p[0].x, p[0].y);

            overlayCanvas.getContext('2d').lineWidth = 2;
            overlayCanvas.getContext('2d').strokeStyle = 'red';
            overlayCanvas.getContext('2d').stroke(path);
        }
    }

    if (result?.templateSegmentation) {
        for (let i = 0; i < result.templateSegmentation.length; i++) {
            const p = result.templateSegmentation[i];
            const path = new Path2D();
            path.moveTo(p[0].x, p[0].y);
            path.lineTo(p[1].x, p[1].y);
            path.lineTo(p[2].x, p[2].y);
            path.lineTo(p[3].x, p[3].y);
            path.lineTo(p[0].x, p[0].y);

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
            let result = msg.data;
            _loader.btn_frame_active = false;
            _loader.btn_file_active = false;

            // timeout event
            if (Object.keys(result.data).length === 0) {
                _log.push('😕 Document Not found');
                _loader.resetUI();
                SEWorker.postMessage({ requestType: 'reset' });
                return
            }
            // push to UI
            _resultData.images = result.images;
            _resultData.data = result.data;

            _log.push('👍 Document Ready');
            // get result
            console.log(result);

            // Clear overlay canvas
            cleanCanvas();

            // reset session on result. Overwise you will always get result of latest document every request.
            SEWorker.postMessage({ requestType: 'reset' });

            break;
        // providing more images for recognition
        case 'FeedMeMore':
            _log.push('🥝 Feed Me More...');
            toCanvas(msg.data);
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
            _log.push('🟢 Wasm ready');
            _loader.systemReady();
            break;
        case 'error':
            _log.push('Error: ' + evenType.desc);
            break;
        case 'version':
            _loader.wasmVersion = evenType.desc;
            _log.push('Version: ' + evenType.desc);
            break;
        case 'benchmark':
            _log.push(evenType.desc);

            if (evenType.name === "Session Process") {
                _log.performance = ": " + evenType.desc.split(":")[1];
            }
            break;
        case 'reset':
            _log.push('--- Session Reset ---');
            break;
        // no default
    }
}

