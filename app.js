import { createApp, reactive } from "./js/petite-vue.es.js";
// petite-vue only for UI interaction

// https://github.com/GoogleChromeLabs/wasm-feature-detect

// https://web.dev/module-workers/
const SEWorker = new Worker('./bindings/idengine_worker.js', { type: 'module' });
// module worker doesnot support importScript

//const SEWorker = new Worker('./bindings/idengine_worker.js');


const _loader = reactive({
    wasmVersion: 'waiting...'
});


/** add reactivity to our UI */

createApp({
    // share it with app scopes
    _loader
}).mount();

SEWorker.onmessage = function (msg) {
    // console.log(msg.data);

    //_loader.wasmVersion = evenType.desc;

};


