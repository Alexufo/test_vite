var SmartIDEngine = (function () {
  var _scriptDir = import.meta.url;
  return (function (SmartIDEngine) {
    SmartIDEngine = SmartIDEngine || {};

    "use strict";
    var Module = typeof SmartIDEngine !== "undefined" ? SmartIDEngine : {};
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function (resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject
    }
    );
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_end")) {
      Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
        configurable: true,
        get: function () {
          abort("You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
        configurable: true,
        set: function () {
          abort("You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_free")) {
      Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
        configurable: true,
        get: function () {
          abort("You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
        configurable: true,
        set: function () {
          abort("You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_init")) {
      Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
        configurable: true,
        get: function () {
          abort("You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
        configurable: true,
        set: function () {
          abort("You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackSave")) {
      Object.defineProperty(Module["ready"], "_stackSave", {
        configurable: true,
        get: function () {
          abort("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_stackSave", {
        configurable: true,
        set: function () {
          abort("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackRestore")) {
      Object.defineProperty(Module["ready"], "_stackRestore", {
        configurable: true,
        get: function () {
          abort("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_stackRestore", {
        configurable: true,
        set: function () {
          abort("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackAlloc")) {
      Object.defineProperty(Module["ready"], "_stackAlloc", {
        configurable: true,
        get: function () {
          abort("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_stackAlloc", {
        configurable: true,
        set: function () {
          abort("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___wasm_call_ctors")) {
      Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
        configurable: true,
        get: function () {
          abort("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
        configurable: true,
        set: function () {
          abort("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___errno_location")) {
      Object.defineProperty(Module["ready"], "___errno_location", {
        configurable: true,
        get: function () {
          abort("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___errno_location", {
        configurable: true,
        set: function () {
          abort("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
      Object.defineProperty(Module["ready"], "_malloc", {
        configurable: true,
        get: function () {
          abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_malloc", {
        configurable: true,
        set: function () {
          abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
      Object.defineProperty(Module["ready"], "_free", {
        configurable: true,
        get: function () {
          abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_free", {
        configurable: true,
        set: function () {
          abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___cxa_is_pointer_type")) {
      Object.defineProperty(Module["ready"], "___cxa_is_pointer_type", {
        configurable: true,
        get: function () {
          abort("You are getting ___cxa_is_pointer_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___cxa_is_pointer_type", {
        configurable: true,
        set: function () {
          abort("You are setting ___cxa_is_pointer_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___cxa_can_catch")) {
      Object.defineProperty(Module["ready"], "___cxa_can_catch", {
        configurable: true,
        get: function () {
          abort("You are getting ___cxa_can_catch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___cxa_can_catch", {
        configurable: true,
        set: function () {
          abort("You are setting ___cxa_can_catch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_setThrew")) {
      Object.defineProperty(Module["ready"], "_setThrew", {
        configurable: true,
        get: function () {
          abort("You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_setThrew", {
        configurable: true,
        set: function () {
          abort("You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_main_thread_process_queued_calls")) {
      Object.defineProperty(Module["ready"], "_emscripten_main_thread_process_queued_calls", {
        configurable: true,
        get: function () {
          abort("You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_emscripten_main_thread_process_queued_calls", {
        configurable: true,
        set: function () {
          abort("You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_tzname")) {
      Object.defineProperty(Module["ready"], "__get_tzname", {
        configurable: true,
        get: function () {
          abort("You are getting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "__get_tzname", {
        configurable: true,
        set: function () {
          abort("You are setting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_daylight")) {
      Object.defineProperty(Module["ready"], "__get_daylight", {
        configurable: true,
        get: function () {
          abort("You are getting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "__get_daylight", {
        configurable: true,
        set: function () {
          abort("You are setting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_timezone")) {
      Object.defineProperty(Module["ready"], "__get_timezone", {
        configurable: true,
        get: function () {
          abort("You are getting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "__get_timezone", {
        configurable: true,
        set: function () {
          abort("You are setting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_saveSetjmp")) {
      Object.defineProperty(Module["ready"], "_saveSetjmp", {
        configurable: true,
        get: function () {
          abort("You are getting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_saveSetjmp", {
        configurable: true,
        set: function () {
          abort("You are setting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_memalign")) {
      Object.defineProperty(Module["ready"], "_memalign", {
        configurable: true,
        get: function () {
          abort("You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_memalign", {
        configurable: true,
        set: function () {
          abort("You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "_memset")) {
      Object.defineProperty(Module["ready"], "_memset", {
        configurable: true,
        get: function () {
          abort("You are getting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "_memset", {
        configurable: true,
        set: function () {
          abort("You are setting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___getTypeName")) {
      Object.defineProperty(Module["ready"], "___getTypeName", {
        configurable: true,
        get: function () {
          abort("You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___getTypeName", {
        configurable: true,
        set: function () {
          abort("You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "___embind_register_native_and_builtin_types")) {
      Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
        configurable: true,
        get: function () {
          abort("You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
        configurable: true,
        set: function () {
          abort("You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
      Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
        configurable: true,
        get: function () {
          abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      });
      Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
        configurable: true,
        set: function () {
          abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        }
      })
    }
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key]
      }
    }
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = function (status, toThrow) {
      throw toThrow
    };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module["ENVIRONMENT"]) {
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)")
    }
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
      }
      return scriptDirectory + path
    }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/"
      } else {
        scriptDirectory = __dirname + "/"
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS)
          nodeFS = require("fs");
        if (!nodePath)
          nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8")
      }
        ;
      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret)
        }
        assert(ret.buffer);
        return ret
      }
        ;
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/")
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex
        }
      });
      process["on"]("unhandledRejection", abort);
      quit_ = function (status) {
        process["exit"](status)
      }
        ;
      Module["inspect"] = function () {
        return "[Emscripten Module object]"
      }
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f)
        }
      }
      readBinary = function readBinary(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f))
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data
      }
        ;
      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments
      }
      if (typeof quit === "function") {
        quit_ = function (status) {
          quit(status)
        }
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined")
          console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
      } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1)
      } else {
        scriptDirectory = ""
      }
      {
        read_ = function (url) {
          var xhr = new XMLHttpRequest;
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText
        }
          ;
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function (url) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response)
          }
        }
        readAsync = function (url, onload, onerror) {
          var xhr = new XMLHttpRequest;
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function () {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return
            }
            onerror()
          }
            ;
          xhr.onerror = onerror;
          xhr.send(null)
        }
      }
      setWindowTitle = function (title) {
        document.title = title
      }
    } else {
      throw new Error("environment detection error")
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key]
      }
    }
    moduleOverrides = null;
    if (Module["arguments"])
      arguments_ = Module["arguments"];
    if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
      Object.defineProperty(Module, "arguments", {
        configurable: true,
        get: function () {
          abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
      Object.defineProperty(Module, "thisProgram", {
        configurable: true,
        get: function () {
          abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (Module["quit"])
      quit_ = Module["quit"];
    if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
      Object.defineProperty(Module, "quit", {
        configurable: true,
        get: function () {
          abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");
    assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
    assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    if (!Object.getOwnPropertyDescriptor(Module, "read")) {
      Object.defineProperty(Module, "read", {
        configurable: true,
        get: function () {
          abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
      Object.defineProperty(Module, "readAsync", {
        configurable: true,
        get: function () {
          abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
      Object.defineProperty(Module, "readBinary", {
        configurable: true,
        get: function () {
          abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
      Object.defineProperty(Module, "setWindowTitle", {
        configurable: true,
        get: function () {
          abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    var STACK_ALIGN = 16;
    function warnOnce(text) {
      if (!warnOnce.shown)
        warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text)
      }
    }
    function convertJsFunctionToWasm(func, sig) {
      if (typeof WebAssembly.Function === "function") {
        var typeNames = {
          "i": "i32",
          "j": "i64",
          "f": "f32",
          "d": "f64"
        };
        var type = {
          parameters: [],
          results: sig[0] == "v" ? [] : [typeNames[sig[0]]]
        };
        for (var i = 1; i < sig.length; ++i) {
          type.parameters.push(typeNames[sig[i]])
        }
        return new WebAssembly.Function(type, func)
      }
      var typeSection = [1, 0, 1, 96];
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = {
        "i": 127,
        "j": 126,
        "f": 125,
        "d": 124
      };
      typeSection.push(sigParam.length);
      for (var i = 0; i < sigParam.length; ++i) {
        typeSection.push(typeCodes[sigParam[i]])
      }
      if (sigRet == "v") {
        typeSection.push(0)
      } else {
        typeSection = typeSection.concat([1, typeCodes[sigRet]])
      }
      typeSection[1] = typeSection.length - 2;
      var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
      var module = new WebAssembly.Module(bytes);
      var instance = new WebAssembly.Instance(module, {
        "e": {
          "f": func
        }
      });
      var wrappedFunc = instance.exports["f"];
      return wrappedFunc
    }
    var freeTableIndexes = [];
    var functionsInTableMap;
    function getEmptyTableSlot() {
      if (freeTableIndexes.length) {
        return freeTableIndexes.pop()
      }
      try {
        wasmTable.grow(1)
      } catch (err) {
        if (!(err instanceof RangeError)) {
          throw err
        }
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
      }
      return wasmTable.length - 1
    }
    function addFunctionWasm(func, sig) {
      if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap;
        for (var i = 0; i < wasmTable.length; i++) {
          var item = wasmTable.get(i);
          if (item) {
            functionsInTableMap.set(item, i)
          }
        }
      }
      if (functionsInTableMap.has(func)) {
        return functionsInTableMap.get(func)
      }
      var ret = getEmptyTableSlot();
      try {
        wasmTable.set(ret, func)
      } catch (err) {
        if (!(err instanceof TypeError)) {
          throw err
        }
        assert(typeof sig !== "undefined", "Missing signature argument to addFunction: " + func);
        var wrapped = convertJsFunctionToWasm(func, sig);
        wasmTable.set(ret, wrapped)
      }
      functionsInTableMap.set(func, ret);
      return ret
    }
    var tempRet0 = 0;
    var setTempRet0 = function (value) {
      tempRet0 = value
    };
    var getTempRet0 = function () {
      return tempRet0
    };
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
      Object.defineProperty(Module, "wasmBinary", {
        configurable: true,
        get: function () {
          abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    var noExitRuntime = Module["noExitRuntime"] || true;
    if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
      Object.defineProperty(Module, "noExitRuntime", {
        configurable: true,
        get: function () {
          abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    if (typeof WebAssembly !== "object") {
      abort("no native wasm support detected")
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text)
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        "string": function (str) {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len)
          }
          return ret
        },
        "array": function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret
        }
      };
      function convertReturnValue(ret) {
        if (returnType === "string")
          return UTF8ToString(ret);
        if (returnType === "boolean")
          return Boolean(ret);
        return ret
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i])
          } else {
            cArgs[i] = args[i]
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0)
        stackRestore(stack);
      return ret
    }
    var ALLOC_STACK = 1;
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heap[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr))
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = heap[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue
          }
          var u1 = heap[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue
          }
          var u2 = heap[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2
          } else {
            if ((u0 & 248) != 240)
              warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0)
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
          }
        }
      }
      return str
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
    }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          heap[outIdx++] = u
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          if (u >= 2097152)
            warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).");
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4
      }
      return len
    }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
    function UTF16ToString(ptr, maxBytesToRead) {
      assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
      var endPtr = ptr;
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      while (!(idx >= maxIdx) && HEAPU16[idx])
        ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr))
      } else {
        var str = "";
        for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0)
            break;
          str += String.fromCharCode(codeUnit)
        }
        return str
      }
    }
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
      }
      if (maxBytesToWrite < 2)
        return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr
    }
    function lengthBytesUTF16(str) {
      return str.length * 2
    }
    function UTF32ToString(ptr, maxBytesToRead) {
      assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
      var i = 0;
      var str = "";
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0)
          break;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        } else {
          str += String.fromCharCode(utf32)
        }
      }
      return str
    }
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647
      }
      if (maxBytesToWrite < 4)
        return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
          break
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr
    }
    function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
          ++i;
        len += 4
      }
      return len
    }
    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret)
        stringToUTF8Array(str, HEAP8, ret, size);
      return ret
    }
    function writeArrayToMemory(array, buffer) {
      assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
      HEAP8.set(array, buffer)
    }
    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
        HEAP8[buffer++ >> 0] = str.charCodeAt(i)
      }
      if (!dontAddNull)
        HEAP8[buffer >> 0] = 0
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple
      }
      return x
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
    }
    var TOTAL_STACK = 5242880;
    if (Module["TOTAL_STACK"])
      assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 98304e3;
    if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
      Object.defineProperty(Module, "INITIAL_MEMORY", {
        configurable: true,
        get: function () {
          abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
        }
      })
    }
    assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
    assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, "JS engine does not provide full typed array support");
    assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
    assert(INITIAL_MEMORY == 98304e3, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
    var wasmTable;
    function writeStackCookie() {
      var max = _emscripten_stack_get_end();
      assert((max & 3) == 0);
      HEAPU32[(max >> 2) + 1] = 34821223;
      HEAPU32[(max >> 2) + 2] = 2310721022;
      HEAP32[0] = 1668509029
    }
    function checkStackCookie() {
      if (ABORT)
        return;
      var max = _emscripten_stack_get_end();
      var cookie1 = HEAPU32[(max >> 2) + 1];
      var cookie2 = HEAPU32[(max >> 2) + 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16))
      }
      if (HEAP32[0] !== 1668509029)
        abort("Runtime error: The application has corrupted its heap memory area (address zero)!")
    }
    (function () {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99)
        throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)"
    }
    )();
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift())
        }
      }
      callRuntimeCallbacks(__ATPRERUN__)
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__)
    }
    function exitRuntime() {
      checkStackCookie();
      runtimeExited = true
    }
    function postRun() {
      checkStackCookie();
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift())
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__)
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb)
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb)
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb)
    }
    assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
          runDependencyWatcher = setInterval(function () {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:")
              }
              err("dependency: " + dep)
            }
            if (shown) {
              err("(end of list)")
            }
          }, 1e4)
        }
      } else {
        err("warning: run dependency added without ID")
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id]
      } else {
        err("warning: run dependency removed without ID")
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback()
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what)
      }
      what += "";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      var output = "abort(" + what + ") at " + stackTrace();
      what = output;
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e
    }
    var FS = {
      error: function () {
        abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")
      },
      init: function () {
        FS.error()
      },
      createDataFile: function () {
        FS.error()
      },
      createPreloadedFile: function () {
        FS.error()
      },
      createLazyFile: function () {
        FS.error()
      },
      open: function () {
        FS.error()
      },
      mkdev: function () {
        FS.error()
      },
      registerDevice: function () {
        FS.error()
      },
      analyzePath: function () {
        FS.error()
      },
      loadFilesFromDB: function () {
        FS.error()
      },
      ErrnoError: function ErrnoError() {
        FS.error()
      }
    };
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return filename.startsWith(dataURIPrefix)
    }
    function isFileURI(filename) {
      return filename.startsWith("file://")
    }
    function createExportWrapper(name, fixedasm) {
      return function () {
        var displayName = name;
        var asm = fixedasm;
        if (!fixedasm) {
          asm = Module["asm"]
        }
        assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
        assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
        if (!asm[name]) {
          assert(asm[name], "exported native function `" + displayName + "` not found")
        }
        return asm[name].apply(null, arguments)
      }
    }
    var abortWrapperDepth = 0;
    function makeAbortWrapper(original) {
      return function () {
        if (ABORT) {
          throw "program has already aborted!"
        }
        abortWrapperDepth += 1;
        try {
          return original.apply(null, arguments)
        } catch (e) {
          if (ABORT || abortWrapperDepth > 1 || e === "longjmp") {
            throw e
          }
          abort("unhandled exception: " + [e, e.stack])
        } finally {
          abortWrapperDepth -= 1
        }
      }
    }
    function instrumentWasmExportsWithAbort(exports) {
      var instExports = {};
      for (var name in exports) {
        var original = exports[name];
        if (typeof original === "function") {
          instExports[name] = makeAbortWrapper(original)
        } else {
          instExports[name] = original
        }
      }
      return instExports
    }
    function instrumentWasmTableWithAbort() {
      var realGet = wasmTable.get;
      var wrapperCache = {};
      wasmTable.get = function (i) {
        var func = realGet.call(wasmTable, i);
        var cached = wrapperCache[i];
        if (!cached || cached.func !== func) {
          cached = wrapperCache[i] = {
            func: func,
            wrapper: makeAbortWrapper(func)
          }
        }
        return cached.wrapper
      }
    }
    var wasmBinaryFile;
    wasmBinaryFile = "../bin/idengine_wasm.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile)
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary)
        }
        if (readBinary) {
          return readBinary(file)
        } else {
          throw "both async and sync fetching of the wasm failed"
        }
      } catch (err) {
        abort(err)
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
          return fetch(wasmBinaryFile, {
            credentials: "same-origin"
          }).then(function (response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
            }
            return response["arrayBuffer"]()
          }).catch(function () {
            return getBinary(wasmBinaryFile)
          })
        } else {
          if (readAsync) {
            return new Promise(function (resolve, reject) {
              readAsync(wasmBinaryFile, function (response) {
                resolve(new Uint8Array(response))
              }, reject)
            }
            )
          }
        }
      }
      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile)
      })
    }
    function createWasm() {
      var info = {
        "env": asmLibraryArg,
        "wasi_snapshot_preview1": asmLibraryArg
      };
      function receiveInstance(instance, module) {
        var exports = instance.exports;
        exports = instrumentWasmExportsWithAbort(exports);
        Module["asm"] = exports;
        wasmMemory = Module["asm"]["memory"];
        assert(wasmMemory, "memory not found in wasm exports");
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["__indirect_function_table"];
        assert(wasmTable, "table not found in wasm exports");
        addOnInit(Module["asm"]["__wasm_call_ctors"]);
        instrumentWasmTableWithAbort();
        removeRunDependency("wasm-instantiate")
      }
      addRunDependency("wasm-instantiate");
      var trueModule = Module;
      function receiveInstantiationResult(result) {
        assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
        trueModule = null;
        receiveInstance(result["instance"])
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function (binary) {
          var result = WebAssembly.instantiate(binary, info);
          return result
        }).then(receiver, function (reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          if (isFileURI(wasmBinaryFile)) {
            err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing")
          }
          abort(reason)
        })
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {

          return fetch(wasmBinaryFile, {
            credentials: "same-origin"
          }).then(function (response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiationResult, function (reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiationResult)
            })
          })
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult)
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {}
    }
    var tempDouble;
    var tempI64;
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback(Module);
          continue
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === undefined) {
            wasmTable.get(func)()
          } else {
            wasmTable.get(func)(callback.arg)
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg)
        }
      }
    }
    Module["callRuntimeCallbacks"] = callRuntimeCallbacks;
    function demangle(func) {
      warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return func
    }
    Module["demangle"] = demangle;
    function demangleAll(text) {
      var regex = /\b_Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]"
      })
    }
    Module["demangleAll"] = demangleAll;
    function jsStackTrace() {
      var error = new Error;
      if (!error.stack) {
        try {
          throw new Error
        } catch (e) {
          error = e
        }
        if (!error.stack) {
          return "(no stack trace available)"
        }
      }
      return error.stack.toString()
    }
    Module["jsStackTrace"] = jsStackTrace;
    var runtimeKeepaliveCounter = 0;
    Module["runtimeKeepaliveCounter"] = runtimeKeepaliveCounter;
    function keepRuntimeAlive() {
      return noExitRuntime || runtimeKeepaliveCounter > 0
    }
    Module["keepRuntimeAlive"] = keepRuntimeAlive;
    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"])
        js += "\n" + Module["extraStackTrace"]();
      return demangleAll(js)
    }
    Module["stackTrace"] = stackTrace;
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function () {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6
      }
    } else if (typeof dateNow !== "undefined") {
      _emscripten_get_now = dateNow
    } else
      _emscripten_get_now = function () {
        return performance.now()
      }
        ;
    Module["_emscripten_get_now"] = _emscripten_get_now;
    var _emscripten_get_now_is_monotonic = true;
    Module["_emscripten_get_now_is_monotonic"] = _emscripten_get_now_is_monotonic;
    function setErrNo(value) {
      HEAP32[___errno_location() >> 2] = value;
      return value
    }
    Module["setErrNo"] = setErrNo;
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now()
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now()
      } else {
        setErrNo(28);
        return -1
      }
      HEAP32[tp >> 2] = now / 1e3 | 0;
      HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
      return 0
    }
    Module["_clock_gettime"] = _clock_gettime;
    function ___clock_gettime(a0, a1) {
      return _clock_gettime(a0, a1)
    }
    Module["___clock_gettime"] = ___clock_gettime;
    var ExceptionInfoAttrs = {
      DESTRUCTOR_OFFSET: 0,
      REFCOUNT_OFFSET: 4,
      TYPE_OFFSET: 8,
      CAUGHT_OFFSET: 12,
      RETHROWN_OFFSET: 13,
      SIZE: 16
    };
    Module["ExceptionInfoAttrs"] = ExceptionInfoAttrs;
    function ___cxa_allocate_exception(size) {
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE
    }
    Module["___cxa_allocate_exception"] = ___cxa_allocate_exception;
    function _atexit(func, arg) { }
    Module["_atexit"] = _atexit;
    function ___cxa_atexit(a0, a1) {
      return _atexit(a0, a1)
    }
    Module["___cxa_atexit"] = ___cxa_atexit;
    function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
      this.set_type = function (type) {
        HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2] = type
      }
        ;
      this.get_type = function () {
        return HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2]
      }
        ;
      this.set_destructor = function (destructor) {
        HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2] = destructor
      }
        ;
      this.get_destructor = function () {
        return HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2]
      }
        ;
      this.set_refcount = function (refcount) {
        HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = refcount
      }
        ;
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] = caught
      }
        ;
      this.get_caught = function () {
        return HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] != 0
      }
        ;
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] = rethrown
      }
        ;
      this.get_rethrown = function () {
        return HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] != 0
      }
        ;
      this.init = function (type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false)
      }
        ;
      this.add_ref = function () {
        var value = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
        HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = value + 1
      }
        ;
      this.release_ref = function () {
        var prev = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
        HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = prev - 1;
        assert(prev > 0);
        return prev === 1
      }
    }
    Module["ExceptionInfo"] = ExceptionInfo;
    function CatchInfo(ptr) {
      this.free = function () {
        _free(this.ptr);
        this.ptr = 0
      }
        ;
      this.set_base_ptr = function (basePtr) {
        HEAP32[this.ptr >> 2] = basePtr
      }
        ;
      this.get_base_ptr = function () {
        return HEAP32[this.ptr >> 2]
      }
        ;
      this.set_adjusted_ptr = function (adjustedPtr) {
        var ptrSize = 4;
        HEAP32[this.ptr + ptrSize >> 2] = adjustedPtr
      }
        ;
      this.get_adjusted_ptr = function () {
        var ptrSize = 4;
        return HEAP32[this.ptr + ptrSize >> 2]
      }
        ;
      this.get_exception_ptr = function () {
        var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type());
        if (isPointer) {
          return HEAP32[this.get_base_ptr() >> 2]
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0)
          return adjusted;
        return this.get_base_ptr()
      }
        ;
      this.get_exception_info = function () {
        return new ExceptionInfo(this.get_base_ptr())
      }
        ;
      if (ptr === undefined) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0)
      } else {
        this.ptr = ptr
      }
    }
    Module["CatchInfo"] = CatchInfo;
    var exceptionCaught = [];
    Module["exceptionCaught"] = exceptionCaught;
    function exception_addRef(info) {
      info.add_ref()
    }
    Module["exception_addRef"] = exception_addRef;
    var uncaughtExceptionCount = 0;
    Module["uncaughtExceptionCount"] = uncaughtExceptionCount;
    function ___cxa_begin_catch(ptr) {
      var catchInfo = new CatchInfo(ptr);
      var info = catchInfo.get_exception_info();
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--
      }
      info.set_rethrown(false);
      exceptionCaught.push(catchInfo);
      exception_addRef(info);
      return catchInfo.get_exception_ptr()
    }
    Module["___cxa_begin_catch"] = ___cxa_begin_catch;
    function ___cxa_call_unexpected(exception) {
      err("Unexpected exception thrown, this is not properly supported - aborting");
      ABORT = true;
      throw exception
    }
    Module["___cxa_call_unexpected"] = ___cxa_call_unexpected;
    function ___cxa_current_primary_exception() {
      if (!exceptionCaught.length) {
        return 0
      }
      var catchInfo = exceptionCaught[exceptionCaught.length - 1];
      exception_addRef(catchInfo.get_exception_info());
      return catchInfo.get_base_ptr()
    }
    Module["___cxa_current_primary_exception"] = ___cxa_current_primary_exception;
    function ___cxa_free_exception(ptr) {
      try {
        return _free(new ExceptionInfo(ptr).ptr)
      } catch (e) {
        err("exception during cxa_free_exception: " + e)
      }
    }
    Module["___cxa_free_exception"] = ___cxa_free_exception;
    function exception_decRef(info) {
      if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
          wasmTable.get(destructor)(info.excPtr)
        }
        ___cxa_free_exception(info.excPtr)
      }
    }
    Module["exception_decRef"] = exception_decRef;
    function ___cxa_decrement_exception_refcount(ptr) {
      if (!ptr)
        return;
      exception_decRef(new ExceptionInfo(ptr))
    }
    Module["___cxa_decrement_exception_refcount"] = ___cxa_decrement_exception_refcount;
    var exceptionLast = 0;
    Module["exceptionLast"] = exceptionLast;
    function ___cxa_end_catch() {
      _setThrew(0);
      assert(exceptionCaught.length > 0);
      var catchInfo = exceptionCaught.pop();
      exception_decRef(catchInfo.get_exception_info());
      catchInfo.free();
      exceptionLast = 0
    }
    Module["___cxa_end_catch"] = ___cxa_end_catch;
    function ___resumeException(catchInfoPtr) {
      var catchInfo = new CatchInfo(catchInfoPtr);
      var ptr = catchInfo.get_base_ptr();
      if (!exceptionLast) {
        exceptionLast = ptr
      }
      catchInfo.free();
      throw ptr
    }
    Module["___resumeException"] = ___resumeException;
    function ___cxa_find_matching_catch_2() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo;
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0
      }
      var typeArray = Array.prototype.slice.call(arguments);
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[exceptionThrowBuf >> 2] = thrown;
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[exceptionThrowBuf >> 2];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted)
          }
          setTempRet0(caughtType);
          return catchInfo.ptr | 0
        }
      }
      stackRestore(stackTop);
      setTempRet0(thrownType);
      return catchInfo.ptr | 0
    }
    Module["___cxa_find_matching_catch_2"] = ___cxa_find_matching_catch_2;
    function ___cxa_find_matching_catch_3() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo;
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0
      }
      var typeArray = Array.prototype.slice.call(arguments);
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[exceptionThrowBuf >> 2] = thrown;
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[exceptionThrowBuf >> 2];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted)
          }
          setTempRet0(caughtType);
          return catchInfo.ptr | 0
        }
      }
      stackRestore(stackTop);
      setTempRet0(thrownType);
      return catchInfo.ptr | 0
    }
    Module["___cxa_find_matching_catch_3"] = ___cxa_find_matching_catch_3;
    function ___cxa_find_matching_catch_4() {
      var thrown = exceptionLast;
      if (!thrown) {
        setTempRet0(0);
        return 0 | 0
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo;
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        setTempRet0(0);
        return catchInfo.ptr | 0
      }
      var typeArray = Array.prototype.slice.call(arguments);
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[exceptionThrowBuf >> 2] = thrown;
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          break
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[exceptionThrowBuf >> 2];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted)
          }
          setTempRet0(caughtType);
          return catchInfo.ptr | 0
        }
      }
      stackRestore(stackTop);
      setTempRet0(thrownType);
      return catchInfo.ptr | 0
    }
    Module["___cxa_find_matching_catch_4"] = ___cxa_find_matching_catch_4;
    function ___cxa_increment_exception_refcount(ptr) {
      if (!ptr)
        return;
      exception_addRef(new ExceptionInfo(ptr))
    }
    Module["___cxa_increment_exception_refcount"] = ___cxa_increment_exception_refcount;
    function ___cxa_rethrow() {
      var catchInfo = exceptionCaught.pop();
      if (!catchInfo) {
        abort("no exception to throw")
      }
      var info = catchInfo.get_exception_info();
      var ptr = catchInfo.get_base_ptr();
      if (!info.get_rethrown()) {
        exceptionCaught.push(catchInfo);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++
      } else {
        catchInfo.free()
      }
      exceptionLast = ptr;
      throw ptr
    }
    Module["___cxa_rethrow"] = ___cxa_rethrow;
    function ___cxa_thread_atexit(a0, a1) {
      return _atexit(a0, a1)
    }
    Module["___cxa_thread_atexit"] = ___cxa_thread_atexit;
    function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr
    }
    Module["___cxa_throw"] = ___cxa_throw;
    function ___cxa_uncaught_exceptions() {
      return uncaughtExceptionCount
    }
    Module["___cxa_uncaught_exceptions"] = ___cxa_uncaught_exceptions;
    function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getUTCSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
      HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
      HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
      HEAP32[tmPtr + 36 >> 2] = 0;
      HEAP32[tmPtr + 32 >> 2] = 0;
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      if (!_gmtime_r.GMTString)
        _gmtime_r.GMTString = allocateUTF8("GMT");
      HEAP32[tmPtr + 40 >> 2] = _gmtime_r.GMTString;
      return tmPtr
    }
    Module["_gmtime_r"] = _gmtime_r;
    function ___gmtime_r(a0, a1) {
      return _gmtime_r(a0, a1)
    }
    Module["___gmtime_r"] = ___gmtime_r;
    function _tzset() {
      if (_tzset.called)
        return;
      _tzset.called = true;
      var currentYear = (new Date).getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
      HEAP32[__get_timezone() >> 2] = stdTimezoneOffset * 60;
      HEAP32[__get_daylight() >> 2] = Number(winterOffset != summerOffset);
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT"
      }
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summerOffset < winterOffset) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr
      } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr
      }
    }
    Module["_tzset"] = _tzset;
    function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
      var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
      HEAP32[tmPtr + 40 >> 2] = zonePtr;
      return tmPtr
    }
    Module["_localtime_r"] = _localtime_r;
    function ___localtime_r(a0, a1) {
      return _localtime_r(a0, a1)
    }
    Module["___localtime_r"] = ___localtime_r;
    var SYSCALLS = {
      mappings: {},
      buffers: [null, [], []],
      printChar: function (stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        assert(buffer);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0
        } else {
          buffer.push(curr)
        }
      },
      varargs: undefined,
      get: function () {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret
      },
      getStr: function (ptr) {
        var ret = UTF8ToString(ptr);
        return ret
      },
      get64: function (low, high) {
        if (low >= 0)
          assert(high === 0);
        else
          assert(high === -1);
        return low
      }
    };
    Module["SYSCALLS"] = SYSCALLS;
    function ___sys_chmod(path, mode) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_chmod"] = ___sys_chmod;
    function ___sys_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      return 0
    }
    Module["___sys_fcntl64"] = ___sys_fcntl64;
    function ___sys_fstat64(fd, buf) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_fstat64"] = ___sys_fstat64;
    function ___sys_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      return 0
    }
    Module["___sys_ioctl"] = ___sys_ioctl;
    function ___sys_mkdir(path, mode) {
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doMkdir(path, mode)
    }
    Module["___sys_mkdir"] = ___sys_mkdir;
    function ___sys_open(path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_open"] = ___sys_open;
    function ___sys_rename(old_path, new_path) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_rename"] = ___sys_rename;
    function ___sys_rmdir(path) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_rmdir"] = ___sys_rmdir;
    function ___sys_stat64(path, buf) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_stat64"] = ___sys_stat64;
    function ___sys_umask(mask) {
      var old = SYSCALLS.umask;
      SYSCALLS.umask = mask;
      return old
    }
    Module["___sys_umask"] = ___sys_umask;
    function ___sys_unlink(path) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["___sys_unlink"] = ___sys_unlink;
    var structRegistrations = {};
    Module["structRegistrations"] = structRegistrations;
    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr)
      }
    }
    Module["runDestructors"] = runDestructors;
    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2])
    }
    Module["simpleReadValueFromPointer"] = simpleReadValueFromPointer;
    var awaitingDependencies = {};
    Module["awaitingDependencies"] = awaitingDependencies;
    var registeredTypes = {};
    Module["registeredTypes"] = registeredTypes;
    var typeDependencies = {};
    Module["typeDependencies"] = typeDependencies;
    var char_0 = 48;
    Module["char_0"] = char_0;
    var char_9 = 57;
    Module["char_9"] = char_9;
    function makeLegalFunctionName(name) {
      if (undefined === name) {
        return "_unknown"
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return "_" + name
      } else {
        return name
      }
    }
    Module["makeLegalFunctionName"] = makeLegalFunctionName;
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body)
    }
    Module["createNamedFunction"] = createNamedFunction;
    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== undefined) {
          this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "")
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name
        } else {
          return this.name + ": " + this.message
        }
      }
        ;
      return errorClass
    }
    Module["extendError"] = extendError;
    var InternalError = undefined;
    Module["InternalError"] = InternalError;
    function throwInternalError(message) {
      throw new InternalError(message)
    }
    Module["throwInternalError"] = throwInternalError;
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function (type) {
        typeDependencies[type] = dependentTypes
      });
      function onComplete(typeConverters) {
        var myTypeConverters = getTypeConverters(typeConverters);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count")
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i])
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function (dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt]
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = []
          }
          awaitingDependencies[dt].push(function () {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters)
            }
          })
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters)
      }
    }
    Module["whenDependentTypesAreResolved"] = whenDependentTypesAreResolved;
    function __embind_finalize_value_object(structType) {
      var reg = structRegistrations[structType];
      delete structRegistrations[structType];
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      var fieldRecords = reg.fields;
      var fieldTypes = fieldRecords.map(function (field) {
        return field.getterReturnType
      }).concat(fieldRecords.map(function (field) {
        return field.setterArgumentType
      }));
      whenDependentTypesAreResolved([structType], fieldTypes, function (fieldTypes) {
        var fields = {};
        fieldRecords.forEach(function (field, i) {
          var fieldName = field.fieldName;
          var getterReturnType = fieldTypes[i];
          var getter = field.getter;
          var getterContext = field.getterContext;
          var setterArgumentType = fieldTypes[i + fieldRecords.length];
          var setter = field.setter;
          var setterContext = field.setterContext;
          fields[fieldName] = {
            read: function (ptr) {
              return getterReturnType["fromWireType"](getter(getterContext, ptr))
            },
            write: function (ptr, o) {
              var destructors = [];
              setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
              runDestructors(destructors)
            }
          }
        });
        return [{
          name: reg.name,
          "fromWireType": function (ptr) {
            var rv = {};
            for (var i in fields) {
              rv[i] = fields[i].read(ptr)
            }
            rawDestructor(ptr);
            return rv
          },
          "toWireType": function (destructors, o) {
            for (var fieldName in fields) {
              if (!(fieldName in o)) {
                throw new TypeError('Missing field:  "' + fieldName + '"')
              }
            }
            var ptr = rawConstructor();
            for (fieldName in fields) {
              fields[fieldName].write(ptr, o[fieldName])
            }
            if (destructors !== null) {
              destructors.push(rawDestructor, ptr)
            }
            return ptr
          },
          "argPackAdvance": 8,
          "readValueFromPointer": simpleReadValueFromPointer,
          destructorFunction: rawDestructor
        }]
      })
    }
    Module["__embind_finalize_value_object"] = __embind_finalize_value_object;
    function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) { }
    Module["__embind_register_bigint"] = __embind_register_bigint;
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + size)
      }
    }
    Module["getShiftFromSize"] = getShiftFromSize;
    function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i)
      }
      embind_charCodes = codes
    }
    Module["embind_init_charCodes"] = embind_init_charCodes;
    var embind_charCodes = undefined;
    Module["embind_charCodes"] = embind_charCodes;
    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]]
      }
      return ret
    }
    Module["readLatin1String"] = readLatin1String;
    var BindingError = undefined;
    Module["BindingError"] = BindingError;
    function throwBindingError(message) {
      throw new BindingError(message)
    }
    Module["throwBindingError"] = throwBindingError;
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance")
      }
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer')
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return
        } else {
          throwBindingError("Cannot register type '" + name + "' twice")
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function (cb) {
          cb()
        })
      }
    }
    Module["registerType"] = registerType;
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function (wt) {
          return !!wt
        },
        "toWireType": function (destructors, o) {
          return o ? trueValue : falseValue
        },
        "argPackAdvance": 8,
        "readValueFromPointer": function (pointer) {
          var heap;
          if (size === 1) {
            heap = HEAP8
          } else if (size === 2) {
            heap = HEAP16
          } else if (size === 4) {
            heap = HEAP32
          } else {
            throw new TypeError("Unknown boolean type size: " + name)
          }
          return this["fromWireType"](heap[pointer >> shift])
        },
        destructorFunction: null
      })
    }
    Module["__embind_register_bool"] = __embind_register_bool;
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false
      }
      if (!(other instanceof ClassHandle)) {
        return false
      }
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass
      }
      return leftClass === rightClass && left === right
    }
    Module["ClassHandle_isAliasOf"] = ClassHandle_isAliasOf;
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      }
    }
    Module["shallowCopyInternalPointer"] = shallowCopyInternalPointer;
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name
      }
      throwBindingError(getInstanceTypeName(obj) + " instance already deleted")
    }
    Module["throwInstanceAlreadyDeleted"] = throwInstanceAlreadyDeleted;
    var finalizationGroup = false;
    Module["finalizationGroup"] = finalizationGroup;
    function detachFinalizer(handle) { }
    Module["detachFinalizer"] = detachFinalizer;
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr)
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr)
      }
    }
    Module["runDestructor"] = runDestructor;
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
        runDestructor($$)
      }
    }
    Module["releaseClassHandle"] = releaseClassHandle;
    function attachFinalizer(handle) {
      if ("undefined" === typeof FinalizationGroup) {
        attachFinalizer = function (handle) {
          return handle
        }
          ;
        return handle
      }
      finalizationGroup = new FinalizationGroup(function (iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;
          if (!$$.ptr) {
            console.warn("object already deleted: " + $$.ptr)
          } else {
            releaseClassHandle($$)
          }
        }
      }
      );
      attachFinalizer = function (handle) {
        finalizationGroup.register(handle, handle.$$, handle.$$);
        return handle
      }
        ;
      detachFinalizer = function (handle) {
        finalizationGroup.unregister(handle.$$)
      }
        ;
      return attachFinalizer(handle)
    }
    Module["attachFinalizer"] = attachFinalizer;
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this)
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: {
            value: shallowCopyInternalPointer(this.$$)
          }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone
      }
    }
    Module["ClassHandle_clone"] = ClassHandle_clone;
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this)
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion")
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = undefined;
        this.$$.ptr = undefined
      }
    }
    Module["ClassHandle_delete"] = ClassHandle_delete;
    function ClassHandle_isDeleted() {
      return !this.$$.ptr
    }
    Module["ClassHandle_isDeleted"] = ClassHandle_isDeleted;
    var delayFunction = undefined;
    Module["delayFunction"] = delayFunction;
    var deletionQueue = [];
    Module["deletionQueue"] = deletionQueue;
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]()
      }
    }
    Module["flushPendingDeletes"] = flushPendingDeletes;
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this)
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion")
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes)
      }
      this.$$.deleteScheduled = true;
      return this
    }
    Module["ClassHandle_deleteLater"] = ClassHandle_deleteLater;
    function init_ClassHandle() {
      ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
      ClassHandle.prototype["clone"] = ClassHandle_clone;
      ClassHandle.prototype["delete"] = ClassHandle_delete;
      ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
      ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater
    }
    Module["init_ClassHandle"] = init_ClassHandle;
    function ClassHandle() { }
    Module["ClassHandle"] = ClassHandle;
    var registeredPointers = {};
    Module["registeredPointers"] = registeredPointers;
    function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function () {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!")
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments)
        }
          ;
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc
      }
    }
    Module["ensureOverloadTable"] = ensureOverloadTable;
    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
          throwBindingError("Cannot register public name '" + name + "' twice")
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!")
        }
        Module[name].overloadTable[numArguments] = value
      } else {
        Module[name] = value;
        if (undefined !== numArguments) {
          Module[name].numArguments = numArguments
        }
      }
    }
    Module["exposePublicSymbol"] = exposePublicSymbol;
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = []
    }
    Module["RegisteredClass"] = RegisteredClass;
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name)
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass
      }
      return ptr
    }
    Module["upcastPointer"] = upcastPointer;
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name)
        }
        return 0
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr
    }
    Module["constNoSmartPtrRawPointerToWireType"] = constNoSmartPtrRawPointerToWireType;
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name)
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr)
          }
          return ptr
        } else {
          return 0
        }
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name)
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (undefined === handle.$$.smartPtr) {
          throwBindingError("Passing raw pointer to smart pointer is illegal")
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr
            } else {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name)
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(ptr, __emval_register(function () {
                clonedHandle["delete"]()
              }));
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr)
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy")
        }
      }
      return ptr
    }
    Module["genericPointerToWireType"] = genericPointerToWireType;
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name)
        }
        return 0
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name)
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr
    }
    Module["nonConstNoSmartPtrRawPointerToWireType"] = nonConstNoSmartPtrRawPointerToWireType;
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr)
      }
      return ptr
    }
    Module["RegisteredPointer_getPointee"] = RegisteredPointer_getPointee;
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr)
      }
    }
    Module["RegisteredPointer_destructor"] = RegisteredPointer_destructor;
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle["delete"]()
      }
    }
    Module["RegisteredPointer_deleteObject"] = RegisteredPointer_deleteObject;
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr
      }
      if (undefined === desiredClass.baseClass) {
        return null
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null
      }
      return desiredClass.downcast(rv)
    }
    Module["downcastPointer"] = downcastPointer;
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length
    }
    Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
    function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k])
        }
      }
      return rv
    }
    Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes)
      }
    }
    Module["setDelayFunction"] = setDelayFunction;
    function init_embind() {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction
    }
    Module["init_embind"] = init_embind;
    var registeredInstances = {};
    Module["registeredInstances"] = registeredInstances;
    function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
        throwBindingError("ptr should not be undefined")
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass
      }
      return ptr
    }
    Module["getBasestPointer"] = getBasestPointer;
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr]
    }
    Module["getInheritedInstance"] = getInheritedInstance;
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType")
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified")
      }
      record.count = {
        value: 1
      };
      return attachFinalizer(Object.create(prototype, {
        $$: {
          value: record
        }
      }))
    }
    Module["makeClassHandle"] = makeClassHandle;
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]()
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          })
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr: ptr
          })
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this)
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType
      } else {
        toType = registeredPointerRecord.pointerType
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this)
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        })
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        })
      }
    }
    Module["RegisteredPointer_fromWireType"] = RegisteredPointer_fromWireType;
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype["argPackAdvance"] = 8;
      RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
      RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType
    }
    Module["init_RegisteredPointer"] = init_RegisteredPointer;
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null
        }
      } else {
        this["toWireType"] = genericPointerToWireType
      }
    }
    Module["RegisteredPointer"] = RegisteredPointer;
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol")
      }
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments
      }
    }
    Module["replacePublicSymbol"] = replacePublicSymbol;
    function dynCallLegacy(sig, ptr, args) {
      assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
      if (args && args.length) {
        assert(args.length === sig.substring(1).replace(/j/g, "--").length)
      } else {
        assert(sig.length == 1)
      }
      var f = Module["dynCall_" + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
    }
    Module["dynCallLegacy"] = dynCallLegacy;
    function dynCall(sig, ptr, args) {
      if (sig.includes("j")) {
        return dynCallLegacy(sig, ptr, args)
      }
      assert(wasmTable.get(ptr), "missing table entry in dynCall: " + ptr);
      return wasmTable.get(ptr).apply(null, args)
    }
    Module["dynCall"] = dynCall;
    function getDynCaller(sig, ptr) {
      assert(sig.includes("j"), "getDynCaller should only be called with i64 sigs");
      var argCache = [];
      return function () {
        argCache.length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
          argCache[i] = arguments[i]
        }
        return dynCall(sig, ptr, argCache)
      }
    }
    Module["getDynCaller"] = getDynCaller;
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        if (signature.includes("j")) {
          return getDynCaller(signature, rawFunction)
        }
        return wasmTable.get(rawFunction)
      }
      var fp = makeDynCaller();
      if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction)
      }
      return fp
    }
    Module["embind__requireFunction"] = embind__requireFunction;
    var UnboundTypeError = undefined;
    Module["UnboundTypeError"] = UnboundTypeError;
    function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv
    }
    Module["getTypeName"] = getTypeName;
    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return
        }
        if (registeredTypes[type]) {
          return
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return
        }
        unboundTypes.push(type);
        seen[type] = true
      }
      types.forEach(visit);
      throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]))
    }
    Module["throwUnboundTypeError"] = throwUnboundTypeError;
    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast)
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast)
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function () {
        throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType])
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
        base = base[0];
        var baseClass;
        var basePrototype;
        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype
        } else {
          basePrototype = ClassHandle.prototype
        }
        var constructor = createNamedFunction(legalFunctionName, function () {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name)
          }
          if (undefined === registeredClass.constructor_body) {
            throw new BindingError(name + " has no accessible constructor")
          }
          var body = registeredClass.constructor_body[arguments.length];
          if (undefined === body) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!")
          }
          return body.apply(this, arguments)
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: {
            value: constructor
          }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter]
      })
    }
    Module["__embind_register_class"] = __embind_register_class;
    function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i])
      }
      return array
    }
    Module["heap32VectorToArray"] = heap32VectorToArray;
    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = "constructor " + classType.name;
        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = []
        }
        if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!")
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes)
        }
          ;
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1))
            }
            destructors.length = 0;
            args.length = argCount;
            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1])
            }
            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]["fromWireType"](ptr)
          }
            ;
          return []
        });
        return []
      })
    }
    Module["__embind_register_class_constructor"] = __embind_register_class_constructor;
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function")
      }
      var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () { });
      dummy.prototype = constructor.prototype;
      var obj = new dummy;
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj
    }
    Module["new_"] = new_;
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!")
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
          needsDestructorStack = true;
          break
        }
      }
      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired"
      }
      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n"
      }
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n"
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2])
      }
      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired
      }
      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n"
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction)
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n"
      } else { }
      invokerFnBody += "}\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction
    }
    Module["craftInvokerFunction"] = craftInvokerFunction;
    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        if (methodName.startsWith("@@")) {
          methodName = Symbol[methodName.substring(2)]
        }
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName)
        }
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes)
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler
        }
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
          if (undefined === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction
          }
          return []
        });
        return []
      })
    }
    Module["__embind_register_class_function"] = __embind_register_class_function;
    var emval_free_list = [];
    Module["emval_free_list"] = emval_free_list;
    var emval_handle_array = [{}, {
      value: undefined
    }, {
      value: null
    }, {
      value: true
    }, {
      value: false
    }];
    Module["emval_handle_array"] = emval_handle_array;
    function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle)
      }
    }
    Module["__emval_decref"] = __emval_decref;
    function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          ++count
        }
      }
      return count
    }
    Module["count_emval_handles"] = count_emval_handles;
    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          return emval_handle_array[i]
        }
      }
      return null
    }
    Module["get_first_emval"] = get_first_emval;
    function init_emval() {
      Module["count_emval_handles"] = count_emval_handles;
      Module["get_first_emval"] = get_first_emval
    }
    Module["init_emval"] = init_emval;
    function __emval_register(value) {
      switch (value) {
        case undefined:
          {
            return 1
          }
        case null:
          {
            return 2
          }
        case true:
          {
            return 3
          }
        case false:
          {
            return 4
          }
        default:
          {
            var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
            emval_handle_array[handle] = {
              refcount: 1,
              value: value
            };
            return handle
          }
      }
    }
    Module["__emval_register"] = __emval_register;
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function (handle) {
          var rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv
        },
        "toWireType": function (destructors, value) {
          return __emval_register(value)
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: null
      })
    }
    Module["__embind_register_emval"] = __embind_register_emval;
    function enumReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return function (pointer) {
            var heap = signed ? HEAP8 : HEAPU8;
            return this["fromWireType"](heap[pointer])
          }
            ;
        case 1:
          return function (pointer) {
            var heap = signed ? HEAP16 : HEAPU16;
            return this["fromWireType"](heap[pointer >> 1])
          }
            ;
        case 2:
          return function (pointer) {
            var heap = signed ? HEAP32 : HEAPU32;
            return this["fromWireType"](heap[pointer >> 2])
          }
            ;
        default:
          throw new TypeError("Unknown integer type: " + name)
      }
    }
    Module["enumReadValueFromPointer"] = enumReadValueFromPointer;
    function __embind_register_enum(rawType, name, size, isSigned) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      function ctor() { }
      ctor.values = {};
      registerType(rawType, {
        name: name,
        constructor: ctor,
        "fromWireType": function (c) {
          return this.constructor.values[c]
        },
        "toWireType": function (destructors, c) {
          return c.value
        },
        "argPackAdvance": 8,
        "readValueFromPointer": enumReadValueFromPointer(name, shift, isSigned),
        destructorFunction: null
      });
      exposePublicSymbol(name, ctor)
    }
    Module["__embind_register_enum"] = __embind_register_enum;
    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType))
      }
      return impl
    }
    Module["requireRegisteredType"] = requireRegisteredType;
    function __embind_register_enum_value(rawEnumType, name, enumValue) {
      var enumType = requireRegisteredType(rawEnumType, "enum");
      name = readLatin1String(name);
      var Enum = enumType.constructor;
      var Value = Object.create(enumType.constructor.prototype, {
        value: {
          value: enumValue
        },
        constructor: {
          value: createNamedFunction(enumType.name + "_" + name, function () { })
        }
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value
    }
    Module["__embind_register_enum_value"] = __embind_register_enum_value;
    function _embind_repr(v) {
      if (v === null) {
        return "null"
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString()
      } else {
        return "" + v
      }
    }
    Module["_embind_repr"] = _embind_repr;
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function (pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2])
          }
            ;
        case 3:
          return function (pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3])
          }
            ;
        default:
          throw new TypeError("Unknown float type: " + name)
      }
    }
    Module["floatReadValueFromPointer"] = floatReadValueFromPointer;
    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": function (value) {
          return value
        },
        "toWireType": function (destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name)
          }
          return value
        },
        "argPackAdvance": 8,
        "readValueFromPointer": floatReadValueFromPointer(name, shift),
        destructorFunction: null
      })
    }
    Module["__embind_register_float"] = __embind_register_float;
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(name, function () {
        throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes)
      }, argCount - 1);
      whenDependentTypesAreResolved([], argTypes, function (argTypes) {
        var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return []
      })
    }
    Module["__embind_register_function"] = __embind_register_function;
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer]
          }
            : function readU8FromPointer(pointer) {
              return HEAPU8[pointer]
            }
            ;
        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1]
          }
            : function readU16FromPointer(pointer) {
              return HEAPU16[pointer >> 1]
            }
            ;
        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2]
          }
            : function readU32FromPointer(pointer) {
              return HEAPU32[pointer >> 2]
            }
            ;
        default:
          throw new TypeError("Unknown integer type: " + name)
      }
    }
    Module["integerReadValueFromPointer"] = integerReadValueFromPointer;
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295
      }
      var shift = getShiftFromSize(size);
      var fromWireType = function (value) {
        return value
      };
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function (value) {
          return value << bitshift >>> bitshift
        }
      }
      var isUnsignedType = name.includes("unsigned");
      registerType(primitiveType, {
        name: name,
        "fromWireType": fromWireType,
        "toWireType": function (destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name)
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!")
          }
          return isUnsignedType ? value >>> 0 : value | 0
        },
        "argPackAdvance": 8,
        "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
      })
    }
    Module["__embind_register_integer"] = __embind_register_integer;
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size)
      }
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        "fromWireType": decodeMemoryView,
        "argPackAdvance": 8,
        "readValueFromPointer": decodeMemoryView
      }, {
        ignoreDuplicateRegistrations: true
      })
    }
    Module["__embind_register_memory_view"] = __embind_register_memory_view;
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name: name,
        "fromWireType": function (value) {
          var length = HEAPU32[value >> 2];
          var str;
          if (stdStringIsUTF8) {
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;
              if (i == length || HEAPU8[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === undefined) {
                  str = stringSegment
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment
                }
                decodeStartPtr = currentBytePtr + 1
              }
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i])
            }
            str = a.join("")
          }
          _free(value);
          return str
        },
        "toWireType": function (destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value)
          }
          var getLength;
          var valueIsOfTypeString = typeof value === "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string")
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function () {
              return lengthBytesUTF8(value)
            }
          } else {
            getLength = function () {
              return value.length
            }
          }
          var length = getLength();
          var ptr = _malloc(4 + length + 1);
          HEAPU32[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1)
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError("String has UTF-16 code units that do not fit in 8 bits")
                }
                HEAPU8[ptr + 4 + i] = charCode
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i]
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr)
          }
          return ptr
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr)
        }
      })
    }
    Module["__embind_register_std_string"] = __embind_register_std_string;
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function () {
          return HEAPU16
        }
          ;
        shift = 1
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function () {
          return HEAPU32
        }
          ;
        shift = 2
      }
      registerType(rawType, {
        name: name,
        "fromWireType": function (value) {
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || HEAP[currentBytePtr >> shift] == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === undefined) {
                str = stringSegment
              } else {
                str += String.fromCharCode(0);
                str += stringSegment
              }
              decodeStartPtr = currentBytePtr + charSize
            }
          }
          _free(value);
          return str
        },
        "toWireType": function (destructors, value) {
          if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name)
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr)
          }
          return ptr
        },
        "argPackAdvance": 8,
        "readValueFromPointer": simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr)
        }
      })
    }
    Module["__embind_register_std_wstring"] = __embind_register_std_wstring;
    function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
      structRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
        rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
        fields: []
      }
    }
    Module["__embind_register_value_object"] = __embind_register_value_object;
    function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
      structRegistrations[structType].fields.push({
        fieldName: readLatin1String(fieldName),
        getterReturnType: getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext: getterContext,
        setterArgumentType: setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext: setterContext
      })
    }
    Module["__embind_register_value_object_field"] = __embind_register_value_object_field;
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name: name,
        "argPackAdvance": 0,
        "fromWireType": function () {
          return undefined
        },
        "toWireType": function (destructors, o) {
          return undefined
        }
      })
    }
    Module["__embind_register_void"] = __embind_register_void;
    function __emscripten_throw_longjmp() {
      throw "longjmp"
    }
    Module["__emscripten_throw_longjmp"] = __emscripten_throw_longjmp;
    function _abort() {
      abort()
    }
    Module["_abort"] = _abort;
    function _emscripten_get_heap_max() {
      return 2147483648
    }
    Module["_emscripten_get_heap_max"] = _emscripten_get_heap_max;
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num)
    }
    Module["_emscripten_memcpy_big"] = _emscripten_memcpy_big;
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1
      } catch (e) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e)
      }
    }
    Module["emscripten_realloc_buffer"] = emscripten_realloc_buffer;
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      assert(requestedSize > oldSize);
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
        return false
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true
        }
      }
      err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
      return false
    }
    Module["_emscripten_resize_heap"] = _emscripten_resize_heap;
    var ENV = {};
    Module["ENV"] = ENV;
    function getExecutableName() {
      return thisProgram || "./this.program"
    }
    Module["getExecutableName"] = getExecutableName;
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": lang,
          "_": getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === undefined)
            delete env[x];
          else
            env[x] = ENV[x]
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x])
        }
        getEnvStrings.strings = strings
      }
      return getEnvStrings.strings
    }
    Module["getEnvStrings"] = getEnvStrings;
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function (string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1
      });
      return 0
    }
    Module["_environ_get"] = _environ_get;
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function (string) {
        bufSize += string.length + 1
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0
    }
    Module["_environ_sizes_get"] = _environ_sizes_get;
    function _exit(status) {
      exit(status)
    }
    Module["_exit"] = _exit;
    function _fd_close(fd) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
      return 0
    }
    Module["_fd_close"] = _fd_close;
    function _fd_fdstat_get(fd, pbuf) {
      var type = fd == 1 || fd == 2 ? 2 : abort();
      HEAP8[pbuf >> 0] = type;
      return 0
    }
    Module["_fd_fdstat_get"] = _fd_fdstat_get;
    function _fd_read(fd, iov, iovcnt, pnum) {
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[pnum >> 2] = num;
      return 0
    }
    Module["_fd_read"] = _fd_read;
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
    }
    Module["_fd_seek"] = _fd_seek;
    function flush_NO_FILESYSTEM() {
      if (typeof _fflush !== "undefined")
        _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length)
        SYSCALLS.printChar(1, 10);
      if (buffers[2].length)
        SYSCALLS.printChar(2, 10)
    }
    Module["flush_NO_FILESYSTEM"] = flush_NO_FILESYSTEM;
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j])
        }
        num += len
      }
      HEAP32[pnum >> 2] = num;
      return 0
    }
    Module["_fd_write"] = _fd_write;
    function _getTempRet0() {
      return getTempRet0()
    }
    Module["_getTempRet0"] = _getTempRet0;
    function _llvm_eh_typeid_for(type) {
      return type
    }
    Module["_llvm_eh_typeid_for"] = _llvm_eh_typeid_for;
    function _mktime(tmPtr) {
      _tzset();
      var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
      var dst = HEAP32[tmPtr + 32 >> 2];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset);
      if (dst < 0) {
        HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
      } else if (dst > 0 != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
      }
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      return date.getTime() / 1e3 | 0
    }
    Module["_mktime"] = _mktime;
    function _setTempRet0(val) {
      setTempRet0(val)
    }
    Module["_setTempRet0"] = _setTempRet0;
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    }
    Module["__isLeapYear"] = __isLeapYear;
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) { }
      return sum
    }
    Module["__arraySum"] = __arraySum;
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Module["__MONTH_DAYS_LEAP"] = __MONTH_DAYS_LEAP;
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Module["__MONTH_DAYS_REGULAR"] = __MONTH_DAYS_REGULAR;
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1)
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate
        }
      }
      return newDate
    }
    Module["__addDays"] = __addDays;
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str
        }
        return str
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0")
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate())
          }
        }
        return compare
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30)
        }
      }
      function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1
          } else {
            return thisDate.getFullYear()
          }
        } else {
          return thisDate.getFullYear() - 1
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function (date) {
          return WEEKDAYS[date.tm_wday].substring(0, 3)
        },
        "%A": function (date) {
          return WEEKDAYS[date.tm_wday]
        },
        "%b": function (date) {
          return MONTHS[date.tm_mon].substring(0, 3)
        },
        "%B": function (date) {
          return MONTHS[date.tm_mon]
        },
        "%C": function (date) {
          var year = date.tm_year + 1900;
          return leadingNulls(year / 100 | 0, 2)
        },
        "%d": function (date) {
          return leadingNulls(date.tm_mday, 2)
        },
        "%e": function (date) {
          return leadingSomething(date.tm_mday, 2, " ")
        },
        "%g": function (date) {
          return getWeekBasedYear(date).toString().substring(2)
        },
        "%G": function (date) {
          return getWeekBasedYear(date)
        },
        "%H": function (date) {
          return leadingNulls(date.tm_hour, 2)
        },
        "%I": function (date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0)
            twelveHour = 12;
          else if (twelveHour > 12)
            twelveHour -= 12;
          return leadingNulls(twelveHour, 2)
        },
        "%j": function (date) {
          return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
        },
        "%m": function (date) {
          return leadingNulls(date.tm_mon + 1, 2)
        },
        "%M": function (date) {
          return leadingNulls(date.tm_min, 2)
        },
        "%n": function () {
          return "\n"
        },
        "%p": function (date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return "AM"
          } else {
            return "PM"
          }
        },
        "%S": function (date) {
          return leadingNulls(date.tm_sec, 2)
        },
        "%t": function () {
          return "\t"
        },
        "%u": function (date) {
          return date.tm_wday || 7
        },
        "%U": function (date) {
          var janFirst = new Date(date.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2)
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00"
        },
        "%V": function (date) {
          var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53"
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01"
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
            daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate()
          } else {
            daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate()
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2)
        },
        "%w": function (date) {
          return date.tm_wday
        },
        "%W": function (date) {
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2)
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00"
        },
        "%y": function (date) {
          return (date.tm_year + 1900).toString().substring(2)
        },
        "%Y": function (date) {
          return date.tm_year + 1900
        },
        "%z": function (date) {
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = off / 60 * 100 + off % 60;
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
        },
        "%Z": function (date) {
          return date.tm_zone
        },
        "%%": function () {
          return "%"
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1
    }
    Module["_strftime"] = _strftime;
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm)
    }
    Module["_strftime_l"] = _strftime_l;
    function _time(ptr) {
      var ret = Date.now() / 1e3 | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret
      }
      return ret
    }
    Module["_time"] = _time;
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    embind_init_charCodes();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    init_emval();
    var ASSERTIONS = true;
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array
    }
    var asmLibraryArg = {
      "__clock_gettime": ___clock_gettime,
      "__cxa_allocate_exception": ___cxa_allocate_exception,
      "__cxa_atexit": ___cxa_atexit,
      "__cxa_begin_catch": ___cxa_begin_catch,
      "__cxa_call_unexpected": ___cxa_call_unexpected,
      "__cxa_current_primary_exception": ___cxa_current_primary_exception,
      "__cxa_decrement_exception_refcount": ___cxa_decrement_exception_refcount,
      "__cxa_end_catch": ___cxa_end_catch,
      "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
      "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
      "__cxa_find_matching_catch_4": ___cxa_find_matching_catch_4,
      "__cxa_free_exception": ___cxa_free_exception,
      "__cxa_increment_exception_refcount": ___cxa_increment_exception_refcount,
      "__cxa_rethrow": ___cxa_rethrow,
      "__cxa_thread_atexit": ___cxa_thread_atexit,
      "__cxa_throw": ___cxa_throw,
      "__cxa_uncaught_exceptions": ___cxa_uncaught_exceptions,
      "__gmtime_r": ___gmtime_r,
      "__localtime_r": ___localtime_r,
      "__resumeException": ___resumeException,
      "__sys_chmod": ___sys_chmod,
      "__sys_fcntl64": ___sys_fcntl64,
      "__sys_fstat64": ___sys_fstat64,
      "__sys_ioctl": ___sys_ioctl,
      "__sys_mkdir": ___sys_mkdir,
      "__sys_open": ___sys_open,
      "__sys_rename": ___sys_rename,
      "__sys_rmdir": ___sys_rmdir,
      "__sys_stat64": ___sys_stat64,
      "__sys_umask": ___sys_umask,
      "__sys_unlink": ___sys_unlink,
      "_embind_finalize_value_object": __embind_finalize_value_object,
      "_embind_register_bigint": __embind_register_bigint,
      "_embind_register_bool": __embind_register_bool,
      "_embind_register_class": __embind_register_class,
      "_embind_register_class_constructor": __embind_register_class_constructor,
      "_embind_register_class_function": __embind_register_class_function,
      "_embind_register_emval": __embind_register_emval,
      "_embind_register_enum": __embind_register_enum,
      "_embind_register_enum_value": __embind_register_enum_value,
      "_embind_register_float": __embind_register_float,
      "_embind_register_function": __embind_register_function,
      "_embind_register_integer": __embind_register_integer,
      "_embind_register_memory_view": __embind_register_memory_view,
      "_embind_register_std_string": __embind_register_std_string,
      "_embind_register_std_wstring": __embind_register_std_wstring,
      "_embind_register_value_object": __embind_register_value_object,
      "_embind_register_value_object_field": __embind_register_value_object_field,
      "_embind_register_void": __embind_register_void,
      "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
      "abort": _abort,
      "clock_gettime": _clock_gettime,
      "emscripten_get_heap_max": _emscripten_get_heap_max,
      "emscripten_memcpy_big": _emscripten_memcpy_big,
      "emscripten_resize_heap": _emscripten_resize_heap,
      "environ_get": _environ_get,
      "environ_sizes_get": _environ_sizes_get,
      "exit": _exit,
      "fd_close": _fd_close,
      "fd_fdstat_get": _fd_fdstat_get,
      "fd_read": _fd_read,
      "fd_seek": _fd_seek,
      "fd_write": _fd_write,
      "getTempRet0": _getTempRet0,
      "invoke_ddd": invoke_ddd,
      "invoke_ddi": invoke_ddi,
      "invoke_ddii": invoke_ddii,
      "invoke_di": invoke_di,
      "invoke_did": invoke_did,
      "invoke_dii": invoke_dii,
      "invoke_diidd": invoke_diidd,
      "invoke_diii": invoke_diii,
      "invoke_diiidd": invoke_diiidd,
      "invoke_diiii": invoke_diiii,
      "invoke_diiiid": invoke_diiiid,
      "invoke_diiiii": invoke_diiiii,
      "invoke_diiiiii": invoke_diiiiii,
      "invoke_fi": invoke_fi,
      "invoke_fif": invoke_fif,
      "invoke_fifi": invoke_fifi,
      "invoke_fii": invoke_fii,
      "invoke_fiif": invoke_fiif,
      "invoke_fiifi": invoke_fiifi,
      "invoke_fiii": invoke_fiii,
      "invoke_fiiii": invoke_fiiii,
      "invoke_fiiiii": invoke_fiiiii,
      "invoke_fiiiiii": invoke_fiiiiii,
      "invoke_fiiiiiii": invoke_fiiiiiii,
      "invoke_i": invoke_i,
      "invoke_idddd": invoke_idddd,
      "invoke_ii": invoke_ii,
      "invoke_iid": invoke_iid,
      "invoke_iidd": invoke_iidd,
      "invoke_iiddiidddidiiii": invoke_iiddiidddidiiii,
      "invoke_iidi": invoke_iidi,
      "invoke_iidii": invoke_iidii,
      "invoke_iidiii": invoke_iidiii,
      "invoke_iif": invoke_iif,
      "invoke_iiff": invoke_iiff,
      "invoke_iifffi": invoke_iifffi,
      "invoke_iifffiiiii": invoke_iifffiiiii,
      "invoke_iifi": invoke_iifi,
      "invoke_iififffi": invoke_iififffi,
      "invoke_iifii": invoke_iifii,
      "invoke_iifiif": invoke_iifiif,
      "invoke_iii": invoke_iii,
      "invoke_iiid": invoke_iiid,
      "invoke_iiidd": invoke_iiidd,
      "invoke_iiidddd": invoke_iiidddd,
      "invoke_iiiddddi": invoke_iiiddddi,
      "invoke_iiiddddiii": invoke_iiiddddiii,
      "invoke_iiiddi": invoke_iiiddi,
      "invoke_iiidi": invoke_iiidi,
      "invoke_iiidii": invoke_iiidii,
      "invoke_iiif": invoke_iiif,
      "invoke_iiiff": invoke_iiiff,
      "invoke_iiiffff": invoke_iiiffff,
      "invoke_iiiffii": invoke_iiiffii,
      "invoke_iiiffiii": invoke_iiiffiii,
      "invoke_iiifi": invoke_iiifi,
      "invoke_iiifii": invoke_iiifii,
      "invoke_iiifiii": invoke_iiifiii,
      "invoke_iiifiiii": invoke_iiifiiii,
      "invoke_iiifiiiiiiiiiii": invoke_iiifiiiiiiiiiii,
      "invoke_iiii": invoke_iiii,
      "invoke_iiiid": invoke_iiiid,
      "invoke_iiiiddd": invoke_iiiiddd,
      "invoke_iiiidddi": invoke_iiiidddi,
      "invoke_iiiiddidi": invoke_iiiiddidi,
      "invoke_iiiidii": invoke_iiiidii,
      "invoke_iiiif": invoke_iiiif,
      "invoke_iiiiff": invoke_iiiiff,
      "invoke_iiiiffi": invoke_iiiiffi,
      "invoke_iiiiffiii": invoke_iiiiffiii,
      "invoke_iiiifi": invoke_iiiifi,
      "invoke_iiiii": invoke_iiiii,
      "invoke_iiiiid": invoke_iiiiid,
      "invoke_iiiiidd": invoke_iiiiidd,
      "invoke_iiiiidddiiiiiii": invoke_iiiiidddiiiiiii,
      "invoke_iiiiiddii": invoke_iiiiiddii,
      "invoke_iiiiidi": invoke_iiiiidi,
      "invoke_iiiiidii": invoke_iiiiidii,
      "invoke_iiiiidiid": invoke_iiiiidiid,
      "invoke_iiiiif": invoke_iiiiif,
      "invoke_iiiiiffii": invoke_iiiiiffii,
      "invoke_iiiiifi": invoke_iiiiifi,
      "invoke_iiiiifii": invoke_iiiiifii,
      "invoke_iiiiifiii": invoke_iiiiifiii,
      "invoke_iiiiifiiiiiii": invoke_iiiiifiiiiiii,
      "invoke_iiiiii": invoke_iiiiii,
      "invoke_iiiiiif": invoke_iiiiiif,
      "invoke_iiiiiiff": invoke_iiiiiiff,
      "invoke_iiiiiiffiiii": invoke_iiiiiiffiiii,
      "invoke_iiiiiifi": invoke_iiiiiifi,
      "invoke_iiiiiififiii": invoke_iiiiiififiii,
      "invoke_iiiiiifii": invoke_iiiiiifii,
      "invoke_iiiiiifiiffff": invoke_iiiiiifiiffff,
      "invoke_iiiiiifiii": invoke_iiiiiifiii,
      "invoke_iiiiiii": invoke_iiiiiii,
      "invoke_iiiiiiidddiiiiiii": invoke_iiiiiiidddiiiiiii,
      "invoke_iiiiiiif": invoke_iiiiiiif,
      "invoke_iiiiiiifii": invoke_iiiiiiifii,
      "invoke_iiiiiiii": invoke_iiiiiiii,
      "invoke_iiiiiiiiddiii": invoke_iiiiiiiiddiii,
      "invoke_iiiiiiiifiiiiiiiiiif": invoke_iiiiiiiifiiiiiiiiiif,
      "invoke_iiiiiiiii": invoke_iiiiiiiii,
      "invoke_iiiiiiiiiffiiii": invoke_iiiiiiiiiffiiii,
      "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
      "invoke_iiiiiiiiiif": invoke_iiiiiiiiiif,
      "invoke_iiiiiiiiiii": invoke_iiiiiiiiiii,
      "invoke_iiiiiiiiiiii": invoke_iiiiiiiiiiii,
      "invoke_iiiiiiiiiiiii": invoke_iiiiiiiiiiiii,
      "invoke_iiiiiiiiiiiiiddi": invoke_iiiiiiiiiiiiiddi,
      "invoke_iiiiiiiiiiiiii": invoke_iiiiiiiiiiiiii,
      "invoke_iiiiij": invoke_iiiiij,
      "invoke_iij": invoke_iij,
      "invoke_iji": invoke_iji,
      "invoke_j": invoke_j,
      "invoke_jiiii": invoke_jiiii,
      "invoke_jiji": invoke_jiji,
      "invoke_v": invoke_v,
      "invoke_vi": invoke_vi,
      "invoke_vid": invoke_vid,
      "invoke_vidddd": invoke_vidddd,
      "invoke_vidi": invoke_vidi,
      "invoke_vidii": invoke_vidii,
      "invoke_vif": invoke_vif,
      "invoke_viff": invoke_viff,
      "invoke_viffff": invoke_viffff,
      "invoke_vifffiii": invoke_vifffiii,
      "invoke_vifi": invoke_vifi,
      "invoke_vifii": invoke_vifii,
      "invoke_vifiii": invoke_vifiii,
      "invoke_vii": invoke_vii,
      "invoke_viid": invoke_viid,
      "invoke_viidddd": invoke_viidddd,
      "invoke_viiddddiii": invoke_viiddddiii,
      "invoke_viidi": invoke_viidi,
      "invoke_viidii": invoke_viidii,
      "invoke_viif": invoke_viif,
      "invoke_viiff": invoke_viiff,
      "invoke_viiffi": invoke_viiffi,
      "invoke_viiffiidi": invoke_viiffiidi,
      "invoke_viifi": invoke_viifi,
      "invoke_viifii": invoke_viifii,
      "invoke_viifiii": invoke_viifiii,
      "invoke_viii": invoke_viii,
      "invoke_viiid": invoke_viiid,
      "invoke_viiiddi": invoke_viiiddi,
      "invoke_viiidid": invoke_viiidid,
      "invoke_viiidii": invoke_viiidii,
      "invoke_viiif": invoke_viiif,
      "invoke_viiiff": invoke_viiiff,
      "invoke_viiiffii": invoke_viiiffii,
      "invoke_viiifi": invoke_viiifi,
      "invoke_viiii": invoke_viiii,
      "invoke_viiiiddd": invoke_viiiiddd,
      "invoke_viiiif": invoke_viiiif,
      "invoke_viiiiffffifiiiiiii": invoke_viiiiffffifiiiiiii,
      "invoke_viiiifffiii": invoke_viiiifffiii,
      "invoke_viiiiffiiii": invoke_viiiiffiiii,
      "invoke_viiiifi": invoke_viiiifi,
      "invoke_viiiii": invoke_viiiii,
      "invoke_viiiiidddddddddiiiii": invoke_viiiiidddddddddiiiii,
      "invoke_viiiiidddddddddiiiiii": invoke_viiiiidddddddddiiiiii,
      "invoke_viiiiidiiiii": invoke_viiiiidiiiii,
      "invoke_viiiiif": invoke_viiiiif,
      "invoke_viiiiifi": invoke_viiiiifi,
      "invoke_viiiiii": invoke_viiiiii,
      "invoke_viiiiiif": invoke_viiiiiif,
      "invoke_viiiiiifffiii": invoke_viiiiiifffiii,
      "invoke_viiiiiifiiiii": invoke_viiiiiifiiiii,
      "invoke_viiiiiii": invoke_viiiiiii,
      "invoke_viiiiiiif": invoke_viiiiiiif,
      "invoke_viiiiiiifffffiii": invoke_viiiiiiifffffiii,
      "invoke_viiiiiiiffi": invoke_viiiiiiiffi,
      "invoke_viiiiiiii": invoke_viiiiiiii,
      "invoke_viiiiiiiid": invoke_viiiiiiiid,
      "invoke_viiiiiiiidiiiii": invoke_viiiiiiiidiiiii,
      "invoke_viiiiiiiif": invoke_viiiiiiiif,
      "invoke_viiiiiiiiff": invoke_viiiiiiiiff,
      "invoke_viiiiiiiifiiii": invoke_viiiiiiiifiiii,
      "invoke_viiiiiiiifiiiii": invoke_viiiiiiiifiiiii,
      "invoke_viiiiiiiii": invoke_viiiiiiiii,
      "invoke_viiiiiiiiidii": invoke_viiiiiiiiidii,
      "invoke_viiiiiiiiifii": invoke_viiiiiiiiifii,
      "invoke_viiiiiiiiii": invoke_viiiiiiiiii,
      "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii,
      "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii,
      "invoke_viiiiiiiiiiiii": invoke_viiiiiiiiiiiii,
      "invoke_viiiiiiiiiiiiii": invoke_viiiiiiiiiiiiii,
      "invoke_viiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiii,
      "invoke_viiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiii,
      "invoke_vij": invoke_vij,
      "llvm_eh_typeid_for": _llvm_eh_typeid_for,
      "mktime": _mktime,
      "setTempRet0": _setTempRet0,
      "strftime_l": _strftime_l,
      "time": _time
    };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");
    var _malloc = Module["_malloc"] = createExportWrapper("malloc");
    var _memset = Module["_memset"] = createExportWrapper("memset");
    var _memalign = Module["_memalign"] = createExportWrapper("memalign");
    var _free = Module["_free"] = createExportWrapper("free");
    var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");
    var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");
    var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");
    var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");
    var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");
    var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function () {
      return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments)
    }
      ;
    var __get_tzname = Module["__get_tzname"] = createExportWrapper("_get_tzname");
    var __get_daylight = Module["__get_daylight"] = createExportWrapper("_get_daylight");
    var __get_timezone = Module["__get_timezone"] = createExportWrapper("_get_timezone");
    var stackSave = Module["stackSave"] = createExportWrapper("stackSave");
    var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");
    var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");
    var _emscripten_stack_init = Module["_emscripten_stack_init"] = function () {
      return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments)
    }
      ;
    var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function () {
      return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments)
    }
      ;
    var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");
    var ___cxa_can_catch = Module["___cxa_can_catch"] = createExportWrapper("__cxa_can_catch");
    var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type");
    var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");
    var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");
    var dynCall_viij = Module["dynCall_viij"] = createExportWrapper("dynCall_viij");
    var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");
    var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");
    var dynCall_iji = Module["dynCall_iji"] = createExportWrapper("dynCall_iji");
    var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");
    var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
    var dynCall_viiji = Module["dynCall_viiji"] = createExportWrapper("dynCall_viiji");
    var dynCall_vijii = Module["dynCall_vijii"] = createExportWrapper("dynCall_vijii");
    var dynCall_jiiiji = Module["dynCall_jiiiji"] = createExportWrapper("dynCall_jiiiji");
    var dynCall_jiiji = Module["dynCall_jiiji"] = createExportWrapper("dynCall_jiiji");
    var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");
    var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");
    var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");
    var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");
    var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j");
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vi(index, a1) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vii(index, a1, a2) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viid(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiddi(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iidd(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_v(index) {
      var sp = stackSave();
      try {
        wasmTable.get(index)()
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiid(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_i(index) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)()
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_di(index, a1) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiid(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iid(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fi(index, a1) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vid(index, a1, a2) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viif(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiidi(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viidddd(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiddddi(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiifiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiifii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fii(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diiiid(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_did(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fif(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viidii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiif(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iif(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiffii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiddii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vif(index, a1, a2) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiif(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiifiiffff(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiidii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_dii(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiff(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viifiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vidddd(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiif(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iifffiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiifi(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iidiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiid(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiidid(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiddddiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiddidi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiddiidddidiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiidddiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiidddiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiif(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiifiiiiiiiiiif(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiff(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiifi(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiifii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiif(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiifiiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viifi(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiidi(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diidd(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vidii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diiidd(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viifii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iidii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiifii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiddd(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiif(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iidi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiffiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiifii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiddiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiifi(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_idddd(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vidi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiif(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiidii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiffiidi(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiif(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiif(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiidd(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iifiif(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iifi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iifffi(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_ddi(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iifii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiffii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiif(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiidddd(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiff(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viffff(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiff(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiffi(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiff(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vifi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viff(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiffi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vifffiii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiffi(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiifi(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiifi(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiidiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiidii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiid(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiffff(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiidii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_diii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_ddd(index, a1, a2) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiidd(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiddi(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viidi(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiidii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiidiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiiiiiddi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiidddddddddiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiidddddddddiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiifiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiddddiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiidddi(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiddd(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiidiid(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiifi(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiifiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fifi(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiiiiii(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iififffi(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiif(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiffffifiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiifffffiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiifiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiffii(index, a1, a2, a3, a4, a5, a6, a7) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiifiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiifiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiffiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiififiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_fiifi(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiffiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiff(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiif(index, a1, a2, a3, a4, a5, a6, a7, a8) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiifiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiff(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_ddii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return wasmTable.get(index)(a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiifi(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiifii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiifiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiif(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vifiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiifffiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiifffiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vifii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
      var sp = stackSave();
      try {
        wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iij(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_iij(index, a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_vij(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        dynCall_vij(index, a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iji(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return dynCall_iji(index, a1, a2, a3)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_jiji(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_jiji(index, a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_jiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return dynCall_jiiii(index, a1, a2, a3, a4)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
      var sp = stackSave();
      try {
        return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    function invoke_j(index) {
      var sp = stackSave();
      try {
        return dynCall_j(index)
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
          throw e;
        _setThrew(1, 0)
      }
    }
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
      Module["intArrayFromString"] = function () {
        abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
      Module["intArrayToString"] = function () {
        abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ccall"))
      Module["ccall"] = function () {
        abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "cwrap"))
      Module["cwrap"] = function () {
        abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
      Module["setValue"] = function () {
        abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getValue"))
      Module["getValue"] = function () {
        abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
      Module["allocate"] = function () {
        abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
      Module["UTF8ArrayToString"] = function () {
        abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString"))
      Module["UTF8ToString"] = function () {
        abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
      Module["stringToUTF8Array"] = function () {
        abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8"))
      Module["stringToUTF8"] = function () {
        abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8"))
      Module["lengthBytesUTF8"] = function () {
        abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function () {
        abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
      Module["addOnPreRun"] = function () {
        abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
      Module["addOnInit"] = function () {
        abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
      Module["addOnPreMain"] = function () {
        abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
      Module["addOnExit"] = function () {
        abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
      Module["addOnPostRun"] = function () {
        abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
      Module["writeStringToMemory"] = function () {
        abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory"))
      Module["writeArrayToMemory"] = function () {
        abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
      Module["writeAsciiToMemory"] = function () {
        abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency"))
      Module["addRunDependency"] = function () {
        abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency"))
      Module["removeRunDependency"] = function () {
        abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder"))
      Module["FS_createFolder"] = function () {
        abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath"))
      Module["FS_createPath"] = function () {
        abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile"))
      Module["FS_createDataFile"] = function () {
        abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile"))
      Module["FS_createPreloadedFile"] = function () {
        abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile"))
      Module["FS_createLazyFile"] = function () {
        abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink"))
      Module["FS_createLink"] = function () {
        abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice"))
      Module["FS_createDevice"] = function () {
        abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink"))
      Module["FS_unlink"] = function () {
        abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
      Module["getLEB"] = function () {
        abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
      Module["getFunctionTables"] = function () {
        abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
      Module["alignFunctionTables"] = function () {
        abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
      Module["registerFunctions"] = function () {
        abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
      Module["addFunction"] = function () {
        abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
      Module["removeFunction"] = function () {
        abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
      Module["getFuncWrapper"] = function () {
        abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
      Module["prettyPrint"] = function () {
        abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
      Module["dynCall"] = function () {
        abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
      Module["getCompilerSetting"] = function () {
        abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "print"))
      Module["print"] = function () {
        abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
      Module["printErr"] = function () {
        abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
      Module["getTempRet0"] = function () {
        abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
      Module["setTempRet0"] = function () {
        abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
      Module["callMain"] = function () {
        abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "abort"))
      Module["abort"] = function () {
        abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
      Module["stringToNewUTF8"] = function () {
        abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setFileTime"))
      Module["setFileTime"] = function () {
        abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer"))
      Module["emscripten_realloc_buffer"] = function () {
        abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
      Module["ENV"] = function () {
        abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
      Module["ERRNO_CODES"] = function () {
        abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
      Module["ERRNO_MESSAGES"] = function () {
        abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setErrNo"))
      Module["setErrNo"] = function () {
        abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "inetPton4"))
      Module["inetPton4"] = function () {
        abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4"))
      Module["inetNtop4"] = function () {
        abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "inetPton6"))
      Module["inetPton6"] = function () {
        abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6"))
      Module["inetNtop6"] = function () {
        abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr"))
      Module["readSockaddr"] = function () {
        abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr"))
      Module["writeSockaddr"] = function () {
        abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
      Module["DNS"] = function () {
        abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getHostByName"))
      Module["getHostByName"] = function () {
        abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
      Module["GAI_ERRNO_MESSAGES"] = function () {
        abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
      Module["Protocols"] = function () {
        abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
      Module["Sockets"] = function () {
        abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice"))
      Module["getRandomDevice"] = function () {
        abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "traverseStack"))
      Module["traverseStack"] = function () {
        abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
      Module["UNWIND_CACHE"] = function () {
        abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc"))
      Module["withBuiltinMalloc"] = function () {
        abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray"))
      Module["readAsmConstArgsArray"] = function () {
        abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
      Module["readAsmConstArgs"] = function () {
        abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM"))
      Module["mainThreadEM_ASM"] = function () {
        abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
      Module["jstoi_q"] = function () {
        abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
      Module["jstoi_s"] = function () {
        abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName"))
      Module["getExecutableName"] = function () {
        abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "listenOnce"))
      Module["listenOnce"] = function () {
        abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext"))
      Module["autoResumeAudioContext"] = function () {
        abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy"))
      Module["dynCallLegacy"] = function () {
        abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller"))
      Module["getDynCaller"] = function () {
        abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
      Module["dynCall"] = function () {
        abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks"))
      Module["callRuntimeCallbacks"] = function () {
        abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepaliveCounter"))
      Module["runtimeKeepaliveCounter"] = function () {
        abort("'runtimeKeepaliveCounter' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive"))
      Module["keepRuntimeAlive"] = function () {
        abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush"))
      Module["runtimeKeepalivePush"] = function () {
        abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop"))
      Module["runtimeKeepalivePop"] = function () {
        abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback"))
      Module["callUserCallback"] = function () {
        abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "maybeExit"))
      Module["maybeExit"] = function () {
        abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle"))
      Module["asmjsMangle"] = function () {
        abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative"))
      Module["reallyNegative"] = function () {
        abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "unSign"))
      Module["unSign"] = function () {
        abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "reSign"))
      Module["reSign"] = function () {
        abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "formatString"))
      Module["formatString"] = function () {
        abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
      Module["PATH"] = function () {
        abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
      Module["PATH_FS"] = function () {
        abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
      Module["SYSCALLS"] = function () {
        abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
      Module["syscallMmap2"] = function () {
        abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
      Module["syscallMunmap"] = function () {
        abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD"))
      Module["getSocketFromFD"] = function () {
        abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress"))
      Module["getSocketAddress"] = function () {
        abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
      Module["JSEvents"] = function () {
        abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback"))
      Module["registerKeyEventCallback"] = function () {
        abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets"))
      Module["specialHTMLTargets"] = function () {
        abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString"))
      Module["maybeCStringToJsString"] = function () {
        abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget"))
      Module["findEventTarget"] = function () {
        abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget"))
      Module["findCanvasEventTarget"] = function () {
        abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect"))
      Module["getBoundingClientRect"] = function () {
        abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData"))
      Module["fillMouseEventData"] = function () {
        abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback"))
      Module["registerMouseEventCallback"] = function () {
        abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback"))
      Module["registerWheelEventCallback"] = function () {
        abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback"))
      Module["registerUiEventCallback"] = function () {
        abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback"))
      Module["registerFocusEventCallback"] = function () {
        abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData"))
      Module["fillDeviceOrientationEventData"] = function () {
        abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback"))
      Module["registerDeviceOrientationEventCallback"] = function () {
        abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData"))
      Module["fillDeviceMotionEventData"] = function () {
        abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback"))
      Module["registerDeviceMotionEventCallback"] = function () {
        abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation"))
      Module["screenOrientation"] = function () {
        abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData"))
      Module["fillOrientationChangeEventData"] = function () {
        abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback"))
      Module["registerOrientationChangeEventCallback"] = function () {
        abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData"))
      Module["fillFullscreenChangeEventData"] = function () {
        abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback"))
      Module["registerFullscreenChangeEventCallback"] = function () {
        abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle"))
      Module["registerRestoreOldStyle"] = function () {
        abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement"))
      Module["hideEverythingExceptGivenElement"] = function () {
        abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements"))
      Module["restoreHiddenElements"] = function () {
        abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox"))
      Module["setLetterbox"] = function () {
        abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy"))
      Module["currentFullscreenStrategy"] = function () {
        abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle"))
      Module["restoreOldWindowedStyle"] = function () {
        abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget"))
      Module["softFullscreenResizeWebGLRenderTarget"] = function () {
        abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen"))
      Module["doRequestFullscreen"] = function () {
        abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData"))
      Module["fillPointerlockChangeEventData"] = function () {
        abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback"))
      Module["registerPointerlockChangeEventCallback"] = function () {
        abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback"))
      Module["registerPointerlockErrorEventCallback"] = function () {
        abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock"))
      Module["requestPointerLock"] = function () {
        abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData"))
      Module["fillVisibilityChangeEventData"] = function () {
        abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback"))
      Module["registerVisibilityChangeEventCallback"] = function () {
        abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback"))
      Module["registerTouchEventCallback"] = function () {
        abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData"))
      Module["fillGamepadEventData"] = function () {
        abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback"))
      Module["registerGamepadEventCallback"] = function () {
        abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback"))
      Module["registerBeforeUnloadEventCallback"] = function () {
        abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData"))
      Module["fillBatteryEventData"] = function () {
        abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "battery"))
      Module["battery"] = function () {
        abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback"))
      Module["registerBatteryEventCallback"] = function () {
        abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize"))
      Module["setCanvasElementSize"] = function () {
        abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize"))
      Module["getCanvasElementSize"] = function () {
        abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate"))
      Module["polyfillSetImmediate"] = function () {
        abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
      Module["demangle"] = function () {
        abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
      Module["demangleAll"] = function () {
        abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
      Module["jsStackTrace"] = function () {
        abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function () {
        abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings"))
      Module["getEnvStrings"] = function () {
        abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock"))
      Module["checkWasiClock"] = function () {
        abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM"))
      Module["flush_NO_FILESYSTEM"] = function () {
        abort("'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
      Module["writeI53ToI64"] = function () {
        abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
      Module["writeI53ToI64Clamped"] = function () {
        abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
      Module["writeI53ToI64Signaling"] = function () {
        abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
      Module["writeI53ToU64Clamped"] = function () {
        abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
      Module["writeI53ToU64Signaling"] = function () {
        abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
      Module["readI53FromI64"] = function () {
        abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
      Module["readI53FromU64"] = function () {
        abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
      Module["convertI32PairToI53"] = function () {
        abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
      Module["convertU32PairToI53"] = function () {
        abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount"))
      Module["uncaughtExceptionCount"] = function () {
        abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast"))
      Module["exceptionLast"] = function () {
        abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught"))
      Module["exceptionCaught"] = function () {
        abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs"))
      Module["ExceptionInfoAttrs"] = function () {
        abort("'ExceptionInfoAttrs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo"))
      Module["ExceptionInfo"] = function () {
        abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo"))
      Module["CatchInfo"] = function () {
        abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef"))
      Module["exception_addRef"] = function () {
        abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef"))
      Module["exception_decRef"] = function () {
        abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
      Module["Browser"] = function () {
        abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers"))
      Module["funcWrappers"] = function () {
        abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
      Module["getFuncWrapper"] = function () {
        abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop"))
      Module["setMainLoop"] = function () {
        abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
      Module["emval_handle_array"] = function () {
        abort("'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
      Module["emval_free_list"] = function () {
        abort("'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
      Module["emval_symbols"] = function () {
        abort("'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
      Module["init_emval"] = function () {
        abort("'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
      Module["count_emval_handles"] = function () {
        abort("'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
      Module["get_first_emval"] = function () {
        abort("'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
      Module["getStringOrSymbol"] = function () {
        abort("'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "requireHandle"))
      Module["requireHandle"] = function () {
        abort("'requireHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
      Module["emval_newers"] = function () {
        abort("'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
      Module["craftEmvalAllocator"] = function () {
        abort("'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
      Module["emval_get_global"] = function () {
        abort("'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
      Module["emval_methodCallers"] = function () {
        abort("'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
      Module["InternalError"] = function () {
        abort("'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
      Module["BindingError"] = function () {
        abort("'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
      Module["UnboundTypeError"] = function () {
        abort("'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
      Module["PureVirtualError"] = function () {
        abort("'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
      Module["init_embind"] = function () {
        abort("'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
      Module["throwInternalError"] = function () {
        abort("'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
      Module["throwBindingError"] = function () {
        abort("'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
      Module["throwUnboundTypeError"] = function () {
        abort("'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
      Module["ensureOverloadTable"] = function () {
        abort("'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
      Module["exposePublicSymbol"] = function () {
        abort("'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
      Module["replacePublicSymbol"] = function () {
        abort("'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
      Module["extendError"] = function () {
        abort("'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
      Module["createNamedFunction"] = function () {
        abort("'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
      Module["registeredInstances"] = function () {
        abort("'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
      Module["getBasestPointer"] = function () {
        abort("'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance"))
      Module["registerInheritedInstance"] = function () {
        abort("'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance"))
      Module["unregisterInheritedInstance"] = function () {
        abort("'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
      Module["getInheritedInstance"] = function () {
        abort("'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount"))
      Module["getInheritedInstanceCount"] = function () {
        abort("'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances"))
      Module["getLiveInheritedInstances"] = function () {
        abort("'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
      Module["registeredTypes"] = function () {
        abort("'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
      Module["awaitingDependencies"] = function () {
        abort("'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
      Module["typeDependencies"] = function () {
        abort("'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
      Module["registeredPointers"] = function () {
        abort("'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
      Module["registerType"] = function () {
        abort("'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved"))
      Module["whenDependentTypesAreResolved"] = function () {
        abort("'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
      Module["embind_charCodes"] = function () {
        abort("'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
      Module["embind_init_charCodes"] = function () {
        abort("'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
      Module["readLatin1String"] = function () {
        abort("'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
      Module["getTypeName"] = function () {
        abort("'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
      Module["heap32VectorToArray"] = function () {
        abort("'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
      Module["requireRegisteredType"] = function () {
        abort("'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
      Module["getShiftFromSize"] = function () {
        abort("'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer"))
      Module["integerReadValueFromPointer"] = function () {
        abort("'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer"))
      Module["enumReadValueFromPointer"] = function () {
        abort("'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer"))
      Module["floatReadValueFromPointer"] = function () {
        abort("'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer"))
      Module["simpleReadValueFromPointer"] = function () {
        abort("'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
      Module["runDestructors"] = function () {
        abort("'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "new_"))
      Module["new_"] = function () {
        abort("'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
      Module["craftInvokerFunction"] = function () {
        abort("'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
      Module["embind__requireFunction"] = function () {
        abort("'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
      Module["tupleRegistrations"] = function () {
        abort("'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
      Module["structRegistrations"] = function () {
        abort("'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType"))
      Module["genericPointerToWireType"] = function () {
        abort("'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType"))
      Module["constNoSmartPtrRawPointerToWireType"] = function () {
        abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType"))
      Module["nonConstNoSmartPtrRawPointerToWireType"] = function () {
        abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
      Module["init_RegisteredPointer"] = function () {
        abort("'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
      Module["RegisteredPointer"] = function () {
        abort("'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee"))
      Module["RegisteredPointer_getPointee"] = function () {
        abort("'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor"))
      Module["RegisteredPointer_destructor"] = function () {
        abort("'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject"))
      Module["RegisteredPointer_deleteObject"] = function () {
        abort("'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType"))
      Module["RegisteredPointer_fromWireType"] = function () {
        abort("'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
      Module["runDestructor"] = function () {
        abort("'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
      Module["releaseClassHandle"] = function () {
        abort("'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
      Module["finalizationGroup"] = function () {
        abort("'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
      Module["detachFinalizer_deps"] = function () {
        abort("'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
      Module["detachFinalizer"] = function () {
        abort("'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
      Module["attachFinalizer"] = function () {
        abort("'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
      Module["makeClassHandle"] = function () {
        abort("'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
      Module["init_ClassHandle"] = function () {
        abort("'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
      Module["ClassHandle"] = function () {
        abort("'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
      Module["ClassHandle_isAliasOf"] = function () {
        abort("'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted"))
      Module["throwInstanceAlreadyDeleted"] = function () {
        abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
      Module["ClassHandle_clone"] = function () {
        abort("'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
      Module["ClassHandle_delete"] = function () {
        abort("'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
      Module["deletionQueue"] = function () {
        abort("'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
      Module["ClassHandle_isDeleted"] = function () {
        abort("'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
      Module["ClassHandle_deleteLater"] = function () {
        abort("'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
      Module["flushPendingDeletes"] = function () {
        abort("'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
      Module["delayFunction"] = function () {
        abort("'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
      Module["setDelayFunction"] = function () {
        abort("'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
      Module["RegisteredClass"] = function () {
        abort("'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer"))
      Module["shallowCopyInternalPointer"] = function () {
        abort("'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
      Module["downcastPointer"] = function () {
        abort("'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
      Module["upcastPointer"] = function () {
        abort("'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
      Module["validateThis"] = function () {
        abort("'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
      Module["char_0"] = function () {
        abort("'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
      Module["char_9"] = function () {
        abort("'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
      Module["makeLegalFunctionName"] = function () {
        abort("'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
      Module["warnOnce"] = function () {
        abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
      Module["stackSave"] = function () {
        abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
      Module["stackRestore"] = function () {
        abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
      Module["stackAlloc"] = function () {
        abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
      Module["AsciiToString"] = function () {
        abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
      Module["stringToAscii"] = function () {
        abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
      Module["UTF16ToString"] = function () {
        abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
      Module["stringToUTF16"] = function () {
        abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
      Module["lengthBytesUTF16"] = function () {
        abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
      Module["UTF32ToString"] = function () {
        abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
      Module["stringToUTF32"] = function () {
        abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
      Module["lengthBytesUTF32"] = function () {
        abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
      Module["allocateUTF8"] = function () {
        abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
      Module["allocateUTF8OnStack"] = function () {
        abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
      }
        ;
    Module["writeStackCookie"] = writeStackCookie;
    Module["checkStackCookie"] = checkStackCookie;
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
      Object.defineProperty(Module, "ALLOC_NORMAL", {
        configurable: true,
        get: function () {
          abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
      Object.defineProperty(Module, "ALLOC_STACK", {
        configurable: true,
        get: function () {
          abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
      });
    var calledRun;
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller
    }
      ;
    function stackCheckInit() {
      _emscripten_stack_init();
      writeStackCookie()
    }
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return
      }
      stackCheckInit();
      preRun();
      if (runDependencies > 0) {
        return
      }
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun()
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("")
          }, 1);
          doRun()
        }, 1)
      } else {
        doRun()
      }
      checkStackCookie()
    }
    Module["run"] = run;
    function checkUnflushedContent() {
      var oldOut = out;
      var oldErr = err;
      var has = false;
      out = err = function (x) {
        has = true
      }
        ;
      try {
        var flush = flush_NO_FILESYSTEM;
        if (flush)
          flush()
      } catch (e) { }
      out = oldOut;
      err = oldErr;
      if (has) {
        warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
        warnOnce("(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)")
      }
    }
    function exit(status, implicit) {
      EXITSTATUS = status;
      checkUnflushedContent();
      if (implicit && keepRuntimeAlive() && status === 0) {
        return
      }
      if (keepRuntimeAlive()) {
        if (!implicit) {
          var msg = "program exited (with status: " + status + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
          readyPromiseReject(msg);
          err(msg)
        }
      } else {
        exitRuntime();
        if (Module["onExit"])
          Module["onExit"](status);
        ABORT = true
      }
      quit_(status, new ExitStatus(status))
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
      }
    }
    run();

    return SmartIDEngine.ready
  }
  );
}
)();
export default SmartIDEngine;
