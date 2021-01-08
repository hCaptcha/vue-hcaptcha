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
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "407a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hcaptcha_vue_vue_type_template_id_17a46154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c756");
/* harmony import */ var _hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fa1f");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hcaptcha_vue_vue_type_template_id_17a46154___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _hcaptcha_vue_vue_type_template_id_17a46154___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "hcaptcha.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "7c22":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hcaptchaScript = __webpack_require__("dfcd");

//
//
//
//
var _default = {
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
  data: function data() {
    return {
      widgetId: null,
      hcaptcha: null
    };
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
        'callback': this.onVerify,
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
      } else {
        // execute after el is rendered
        this.$on('rendered', this.execute);
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
      this.$emit('rendered');
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
};
exports.default = _default;

/***/ }),

/***/ "c756":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"0d395c67-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/hcaptcha.vue?vue&type=template&id=17a46154&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"hcap-script"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/hcaptcha.vue?vue&type=template&id=17a46154&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


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

/***/ "fa1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c22");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hcaptcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("56d7");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ })

/******/ });
//# sourceMappingURL=vue-hcaptcha.common.js.map