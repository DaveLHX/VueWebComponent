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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RequestFormForExport.vue?vue&type=template&id=253baa40&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('request-form')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RequestFormForExport.vue?vue&type=template&id=253baa40&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RequestForm.vue?vue&type=template&id=5a024670&
var RequestFormvue_type_template_id_5a024670_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h1',[_vm._v(" "+_vm._s(_vm.activity.name))]),_c('v-chip',[_c('v-avatar',{staticClass:"blue"},[_vm._v("M")]),_vm._v("\n            "+_vm._s(_vm.activity.nbMaleCadets)+"\n          ")],1),_c('v-chip',[_c('v-avatar',{staticClass:"pink"},[_vm._v("F")]),_vm._v("\n            "+_vm._s(_vm.activity.nbFemaleCadets)+"\n          ")],1),_c('v-tabs',{attrs:{"color":"blue","dark":"","slider-color":"yellow"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{key:1,attrs:{"ripple":""}},[_vm._v("\n       Activity\n      ")]),_c('v-tab',{key:2,attrs:{"ripple":""}},[_vm._v("\n       Rations\n      "),_c('v-icon',{attrs:{"medium":"","color":"white"}},[_vm._v("\n        fastfood\n      ")])],1),_c('v-tab',{key:3,attrs:{"ripple":""}},[_vm._v("\n       Transport\n         "),_c('v-icon',{attrs:{"medium":"","color":"white"}},[_vm._v("\n         directions_bus\n      ")])],1),_c('v-tab-item',{key:1},[_c('v-card',{attrs:{"flat":""}},[_c('activity',{attrs:{"activityItem":_vm.activity}})],1)],1),_c('v-tab-item',{key:2},[_c('v-card',{attrs:{"flat":""}},[_c('rations')],1)],1),_c('v-tab-item',{key:3},[_c('v-card',{attrs:{"flat":""}},[_c('transport')],1)],1)],1),_c('v-btn',{attrs:{"color":"success"}},[_vm._v("Success")])],1)}
var RequestFormvue_type_template_id_5a024670_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RequestForm.vue?vue&type=template&id=5a024670&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Activity.vue?vue&type=template&id=22ddc64d&
var Activityvue_type_template_id_22ddc64d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h1',[_vm._v("Please complete the activity details")]),_c('v-form',{model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"rules":_vm.nameRules,"counter":20,"label":"Name","required":""},model:{value:(_vm.activityItem.name),callback:function ($$v) {_vm.$set(_vm.activityItem, "name", $$v)},expression:"activityItem.name"}}),_c('v-text-field',{attrs:{"label":"Location","required":""},model:{value:(_vm.activityItem.location),callback:function ($$v) {_vm.$set(_vm.activityItem, "location", $$v)},expression:"activityItem.location"}}),_c('v-textarea',{attrs:{"label":"Description","required":""},model:{value:(_vm.activityItem.description),callback:function ($$v) {_vm.$set(_vm.activityItem, "description", $$v)},expression:"activityItem.description"}})],1)],1)}
var Activityvue_type_template_id_22ddc64d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Activity.vue?vue&type=template&id=22ddc64d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Activity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Activityvue_type_script_lang_js_ = ({
  name: "activity",
  props: ["activityItem"],
  data: () => ({
    valid: false,
    name: "",
    nameRules: [v => !!v || "Name is required", v => v.length <= 20 || "Name must be less than 10 characters"]
  })
});
// CONCATENATED MODULE: ./src/components/Activity.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Activityvue_type_script_lang_js_ = (Activityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Activity.vue





/* normalize component */

var component = normalizeComponent(
  components_Activityvue_type_script_lang_js_,
  Activityvue_type_template_id_22ddc64d_render,
  Activityvue_type_template_id_22ddc64d_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

component.options.__file = "Activity.vue"
/* harmony default export */ var Activity = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Rations.vue?vue&type=template&id=704b777c&
var Rationsvue_type_template_id_704b777c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h1',[_vm._v("Rations")]),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.addItem($event)}}},[_c('button',{attrs:{"type":"submit"}},[_vm._v("Add Item")])]),_c('span',{staticClass:"panel"},[_c('h2',[_vm._v("This panel is bound to the model")]),_c('ul',_vm._l((_vm.items),function(item){return _c('li',[_vm._v("\n    "+_vm._s(item.year)+"\n    "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.text),expression:"item.text"}],attrs:{"type":"Text"},domProps:{"value":(item.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "text", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.active),expression:"item.active"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(item.active)?_vm._i(item.active,null)>-1:(item.active)},on:{"change":function($event){var $$a=item.active,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(item, "active", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(item, "active", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(item, "active", $$c)}}}}),_c('button',{on:{"click":function($event){_vm.del(item)}}},[_vm._v("X")])])}))]),_c('span',{staticClass:"panel"},[_c('h2',[_vm._v("This panel is bound to the same data")]),_c('ul',_vm._l((_vm.items),function(item){return _c('li',[_vm._v("\n    "+_vm._s(item.year)+"\n      "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.text),expression:"item.text"}],attrs:{"type":"Text"},domProps:{"value":(item.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "text", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.active),expression:"item.active"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(item.active)?_vm._i(item.active,null)>-1:(item.active)},on:{"change":function($event){var $$a=item.active,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(item, "active", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(item, "active", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(item, "active", $$c)}}}})])}))]),_c('div',{staticClass:"data"},[_c('h2',[_vm._v("This is the json data")]),_vm._v("\n  "+_vm._s(_vm.items)+"\n")])])}
var Rationsvue_type_template_id_704b777c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Rations.vue?vue&type=template&id=704b777c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Rations.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Rationsvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        year: "2012",
        active: false,
        text: "make a list"
      }, {
        year: "2013",
        active: true,
        text: "delete the list"
      }]
    };
  },

  methods: {
    addItem() {
      var newitem = {
        year: `${2012 + this.items.length}`,
        active: true,
        text: `item ${this.items.length + 1}`
      };
      this.items.push(newitem);
    },

    del(item) {
      var index = this.items.indexOf(item);

      if (index > -1) {
        this.items.splice(index, 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/Rations.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Rationsvue_type_script_lang_js_ = (Rationsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Rations.vue





/* normalize component */

var Rations_component = normalizeComponent(
  components_Rationsvue_type_script_lang_js_,
  Rationsvue_type_template_id_704b777c_render,
  Rationsvue_type_template_id_704b777c_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

Rations_component.options.__file = "Rations.vue"
/* harmony default export */ var Rations = (Rations_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3a86e180-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Transport.vue?vue&type=template&id=14486105&
var Transportvue_type_template_id_14486105_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v("transport")])}
var Transportvue_type_template_id_14486105_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Transport.vue?vue&type=template&id=14486105&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Transport.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var Transportvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/Transport.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Transportvue_type_script_lang_js_ = (Transportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Transport.vue





/* normalize component */

var Transport_component = normalizeComponent(
  components_Transportvue_type_script_lang_js_,
  Transportvue_type_template_id_14486105_render,
  Transportvue_type_template_id_14486105_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

Transport_component.options.__file = "Transport.vue"
/* harmony default export */ var Transport = (Transport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RequestForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RequestFormvue_type_script_lang_js_ = ({
  components: {
    Activity: Activity,
    Rations: Rations,
    Transport: Transport
  },

  data() {
    return {
      activity: {
        id: 1,
        name: 'Survie',
        description: 'This is the description',
        startDate: '2018-02-04',
        nbMaleCadets: 10,
        nbFemaleCadets: 4,
        location: '239 Activity Drive, Laval, QC'
      },
      rations: {
        required: null
      }
    };
  }

});
// CONCATENATED MODULE: ./src/components/RequestForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RequestFormvue_type_script_lang_js_ = (RequestFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RequestForm.vue





/* normalize component */

var RequestForm_component = normalizeComponent(
  components_RequestFormvue_type_script_lang_js_,
  RequestFormvue_type_template_id_5a024670_render,
  RequestFormvue_type_template_id_5a024670_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

RequestForm_component.options.__file = "RequestForm.vue"
/* harmony default export */ var RequestForm = (RequestForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RequestFormForExport.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// @import is CSS/SASS syntax to include other files.
// import is modern ES6 syntax to include modules.
// require is AMD/CMD syntax currently used by Node.
// import 'vuetify/dist/vuetify.min.css'   THIS does not work
// import '@/../node_modules/vuetify/dist/vuetify.min.css';
// import "../../node_modules/vuetify/dist/vuetify.min.css";
//require("@/../node_modules/vuetify/dist/vuetify.min.css");
//these two seem to work kind of...in chrome but IE wont show.  Probably including these is not a good idea anyway because of size and caching etc...
//should be left to the page to load the proper JS.
// require("@/../node_modules/vuetify/dist/vuetify.min.js");
// require("@/assets/webcomponents-loader.js");
//https://github.com/vuejs-templates/webpack/issues/604
 //import Vuetify from "vuetify"; //this command means we dont have to add a link to the .js in the page

/* harmony default export */ var RequestFormForExportvue_type_script_lang_js_shadow = ({
  components: {
    RequestForm: RequestForm
  }
});
// CONCATENATED MODULE: ./src/components/RequestFormForExport.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_RequestFormForExportvue_type_script_lang_js_shadow = (RequestFormForExportvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/RequestFormForExport.vue?shadow





/* normalize component */

var RequestFormForExportshadow_component = normalizeComponent(
  components_RequestFormForExportvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

RequestFormForExportshadow_component.options.__file = "RequestFormForExport.vue"
/* harmony default export */ var RequestFormForExportshadow = (RequestFormForExportshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('request-form', vue_wc_wrapper(external_Vue_default.a, RequestFormForExportshadow))

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=Request-Form.js.map