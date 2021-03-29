module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "407a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b99");
/* harmony import */ var _hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("56d1");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__["render"]

/* harmony default export */ __webpack_exports__["default"] = (_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "4b99":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ac1");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_template_id_20a606a2__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "56d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac03");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_hcaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ "56d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
exports.default = void 0;

var _hcaptcha = _interopRequireDefault(__webpack_require__("407a"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true; // Keep this for backwards compatibility

  Vue.component('vuehcaptcha', _hcaptcha.default); // Register camelcase which allows component with dash in it: <vue-hcaptcha />

  Vue.component('VueHcaptcha', _hcaptcha.default);
} // Create module definition for Vue.use()


var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


var _default = _hcaptcha.default;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8ac1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _vue = __webpack_require__("8bbf");

var _hoisted_1 = {
  id: "hcap-script"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)("div", _hoisted_1);
}

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ac03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = __webpack_require__("8bbf");

var _hcaptchaScript = __webpack_require__("dfcd");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'VueHcaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: undefined
    },
    tabindex: {
      type: String,
      default: undefined
    },
    language: {
      type: String,
      default: undefined
    },
    reCaptchaCompat: {
      type: Boolean,
      default: true
    },
    challengeContainer: {
      type: String,
      default: undefined
    },
    rqdata: {
      type: String,
      default: undefined
    },
    sentry: {
      type: Boolean,
      default: true
    },
    apiEndpoint: {
      type: String,
      default: 'https://hcaptcha.com/1/api.js'
    },
    endpoint: {
      type: String,
      default: undefined
    },
    reportapi: {
      type: String,
      default: undefined
    },
    assethost: {
      type: String,
      default: undefined
    },
    imghost: {
      type: String,
      default: undefined
    }
  },
  setup: function setup() {
    var data = (0, _vue.reactive)({
      widgetId: null,
      hcaptcha: null
    });
    return _objectSpread({}, (0, _vue.toRefs)(data));
  },
  mounted: function mounted() {
    return (0, _hcaptchaScript.loadApiEndpointIfNotAlready)(this.$props).then(this.onApiLoaded).catch(this.onError);
  },
  unmounted: function unmounted() {
    var _this = this;

    if (this.widgetId) {
      this.hcaptcha.then(function () {
        _this.hcaptcha.reset(_this.widgetId);

        _this.hcaptcha.remove(_this.widgetId);
      });
    }
  },
  methods: {
    onApiLoaded: function onApiLoaded() {
      this.hcaptcha = window.hcaptcha;
      var opt = {
        sitekey: this.sitekey,
        theme: this.theme,
        size: this.size,
        tabindex: this.tabindex,
        callback: this.onVerify,
        'expired-callback': this.onExpired,
        'chalexpired-callback': this.onChallengeExpired,
        'error-callback': this.onError,
        'open-callback': this.onOpen,
        'close-callback': this.onClose
      };

      if (this.challengeContainer) {
        opt['challenge-container'] = this.challengeContainer;
      }

      this.widgetId = this.hcaptcha.render(this.$el, opt);

      if (this.rqdata) {
        this.hcaptcha.setData(this.widgetId, {
          rqdata: this.rqdata
        });
      }

      this.onRendered();
    },
    execute: function execute() {
      if (this.widgetId) {
        this.hcaptcha.execute(this.widgetId);
        this.onExecuted();
      }
    },
    reset: function reset() {
      if (this.widgetId) {
        this.hcaptcha.reset(this.widgetId);
        this.onReset();
      } else {
        this.$emit('error', 'Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.');
      }
    },
    onRendered: function onRendered() {
      this.$emit('rendered'); // execute after el is rendered

      this.execute();
    },
    onExecuted: function onExecuted() {
      this.$emit('executed');
    },
    onReset: function onReset() {
      this.$emit('reset');
    },
    onError: function onError(e) {
      this.$emit('error', e);
      this.reset();
    },
    onVerify: function onVerify() {
      var token = this.hcaptcha.getResponse(this.widgetId);
      var eKey = this.hcaptcha.getRespKey(this.widgetId);
      this.$emit('verify', token, eKey);
    },
    onExpired: function onExpired() {
      this.$emit('expired');
    },
    onChallengeExpired: function onChallengeExpired() {
      this.$emit('challengeExpired');
    },
    onOpen: function onOpen() {
      this.$emit('opened');
    },
    onClose: function onClose() {
      this.$emit('closed');
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "dfcd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApiEndpointIfNotAlready = loadApiEndpointIfNotAlready;
exports.getScriptSrc = getScriptSrc;
exports.addQueryParamIfDefined = addQueryParamIfDefined;
exports.SCRIPT_ID = void 0;

/**
 * Used to prevent loading api.js multiple times
 * @type {string}
 */
var SCRIPT_ID = 'hcaptcha-api-script-id';
exports.SCRIPT_ID = SCRIPT_ID;
var HCAPTCHA_LOAD_FN_NAME = '_hcaptchaOnLoad';
var resolveFn;
var rejectFn;
var promise = new Promise(function (resolve, reject) {
  resolveFn = resolve;
  rejectFn = reject;
});
/**
 * Async hcaptcha api.js loader.
 *
 * It makes sure `apiEndpoint` is loaded ONCE on the page despite calling this multiple times.
 *
 * Usage:
 * 1. import hcaptchaScript from './hcaptcha-script';
 * 2. when web component is mounted do:
 *      loadApiEndpointIfNotAlready('apiEndpoint', ...)
 *        .then(() => console.log('hcaptcha is loaded so it is safe to be used'))
 *        .catch((err) => console.error('failed to load the hcaptcha', err));
 *
 * @param config
 * @returns {Promise<void>}
 */

function loadApiEndpointIfNotAlready(config) {
  if (window.hcaptcha) {
    // api.js is already present
    resolveFn();
    return promise;
  }

  if (document.getElementById(SCRIPT_ID)) {
    // api.js was already requested
    return promise;
  } // request api.js once


  window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;
  var scriptSrc = getScriptSrc(config);
  var script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = scriptSrc;
  script.async = true;
  script.defer = true;

  script.onerror = function (event) {
    // eslint-disable-next-line no-console
    console.error('Failed to load api: ' + scriptSrc, event);
    rejectFn('Failed to load api.js');
  };

  document.head.appendChild(script);
  return promise;
}

function getScriptSrc(config) {
  var scriptSrc = config.apiEndpoint;
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'render', 'explicit');
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'onload', HCAPTCHA_LOAD_FN_NAME);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'recaptchacompat', config.reCaptchaCompat === false ? 'off' : null);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'hl', config.language);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'sentry', config.sentry);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'endpoint', config.endpoint);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'assethost', config.assethost);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'imghost', config.imghost);
  scriptSrc = addQueryParamIfDefined(scriptSrc, 'reportapi', config.reportapi);
  return scriptSrc;
}

function addQueryParamIfDefined(url, queryName, queryValue) {
  if (queryValue !== undefined && queryValue !== null) {
    var link = url.includes('?') ? '&' : '?';
    return url + link + queryName + '=' + encodeURIComponent(queryValue);
  }

  return url;
}

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("56d7");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ })

/******/ });
//# sourceMappingURL=vue-hcaptcha.common.js.map