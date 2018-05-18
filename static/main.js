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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "./static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ciffi-js/device/device.js":
/*!*************************************************!*\
  !*** ./node_modules/@ciffi-js/device/device.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function () {
	
	var _html = document.querySelector('html');
	_html.className += ' ' + checkIe();
	_html.className += ' ' + checkPlatform();
	_html.className += ' ' + checkTouch();
	_html.className += ' ' + androidVersion();
	
	return {
		websocket: typeof window.WebSocket === 'function',
		webgl: detectWebGLContext(),
		touch: 'ontouchstart' in document.documentElement,
		isIe: checkIe()
	};
	
	function detectWebGLContext() {
		var canvas = document.createElement('canvas');
		var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		return gl && gl instanceof WebGLRenderingContext;
	}
	
	function checkIe() {
		var _ua = window.navigator.userAgent;
		var _version;
		var _msie;
		var _trident;
		var _edge;
		
		_msie = _ua.indexOf('MSIE ');
		if (_msie > 0) {
			
			_version = parseInt(_ua.substring(_msie + 5, _ua.indexOf('.', _msie)), 10);
			return 'ie' + _version;
		}
		
		_trident = _ua.indexOf('Trident/');
		if (_trident > 0) {
			
			var _rv = _ua.indexOf('rv:');
			_version = parseInt(_ua.substring(_rv + 3, _ua.indexOf('.', _rv)), 10);
			return 'ie' + _version;
		}
		
		_edge = _ua.indexOf('Edge/');
		if (_edge > 0) {
			
			_version = parseInt(_ua.substring(_edge + 5, _ua.indexOf('.', _edge)), 10);
			return 'edge' + _version;
		}
		
		// return 'ie11';
		return 'not-ie';
	}
	
	function androidVersion() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		var _version = 'no-android';
		
		if (/android/i.test(userAgent)) {
			if (userAgent.indexOf('Android 5.') >= 0) {
				_version = 'android-5';
			} else {
				_version = 'android-4';
			}
			
			if (userAgent.indexOf('Chrome') >= 0 && userAgent.indexOf('Safari')) {
				_version += ' android-chrome';
			}
			
		}
		
		return _version;
	}
	
	function checkPlatform() {
		
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		
		// Windows Phone must come first because its UA also contains 'Android'
		if (/windows phone/i.test(userAgent)) {
			return 'Windows Phone';
		}
		
		if (/android/i.test(userAgent)) {
			return 'Android';
		}
		
		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return 'iOS';
		}
		
		return 'no-device';
		
	}
	
	function checkTouch() {
		
		if (checkPlatform() === 'no-device' && 'ontouchstart' in document.documentElement) {
			return 'no-touch';
		} else if ('ontouchstart' in document.documentElement) {
			return 'touch';
		} else {
			return 'no-touch';
		}
		
	}
	
})();

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Application = __webpack_require__(/*! ./modules/Application.js */ "./src/scripts/modules/Application.js");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// device
__webpack_require__(/*! @ciffi-js/device */ "./node_modules/@ciffi-js/device/device.js");

new _Application2.default();

/***/ }),

/***/ "./src/scripts/modules/Application.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/Application.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Menu = __webpack_require__(/*! ./Menu */ "./src/scripts/modules/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _Layout = __webpack_require__(/*! ./Layout */ "./src/scripts/modules/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function () {
	function Application() {
		var _this = this;

		(0, _classCallCheck3.default)(this, Application);

		this.layout = new _Layout2.default();

		new _Menu2.default({
			onClickEvent: function onClickEvent(id) {
				_this.layout.show(id);
			}
		});

		this.init();
	}

	(0, _createClass3.default)(Application, [{
		key: 'init',
		value: function init() {
			this.layout.init('one');
		}
	}]);
	return Application;
}();

exports.default = Application;

/***/ }),

/***/ "./src/scripts/modules/Aside.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Aside.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aside = function () {
	function Aside(_ref) {
		var _ref$elementClass = _ref.elementClass,
		    elementClass = _ref$elementClass === undefined ? '.aside' : _ref$elementClass,
		    _ref$visibleClass = _ref.visibleClass,
		    visibleClass = _ref$visibleClass === undefined ? '.is-visible' : _ref$visibleClass;
		(0, _classCallCheck3.default)(this, Aside);

		this.aside = document.querySelector(elementClass);
		this.visibleClass = visibleClass;
	}

	(0, _createClass3.default)(Aside, [{
		key: 'show',
		value: function show() {
			this.aside.classList.add(this.visibleClass);
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.aside.classList.remove(this.visibleClass);
		}
	}]);
	return Aside;
}();

exports.default = Aside;

/***/ }),

/***/ "./src/scripts/modules/Footer.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Footer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function () {
	function Footer(_ref) {
		var _ref$footerClass = _ref.footerClass,
		    footerClass = _ref$footerClass === undefined ? '.footer' : _ref$footerClass,
		    _ref$footerItemClass = _ref.footerItemClass,
		    footerItemClass = _ref$footerItemClass === undefined ? '.footer__item' : _ref$footerItemClass,
		    _ref$visibleClass = _ref.visibleClass,
		    visibleClass = _ref$visibleClass === undefined ? '.is-visible' : _ref$visibleClass;
		(0, _classCallCheck3.default)(this, Footer);

		this.footerEl = document.querySelector(footerClass);
		this.footerItemClass = footerItemClass;
		this.visibleClass = visibleClass;
	}

	(0, _createClass3.default)(Footer, [{
		key: 'show',
		value: function show(id) {
			this.footerEl.classList.add(this.visibleClass);
			this.showFooterContent(id);
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.footerEl.classList.remove(this.visibleClass);
		}
	}, {
		key: 'showFooterContent',
		value: function showFooterContent(id) {
			var _this = this;

			var footerItem = document.querySelector(this.footerItemClass + '--' + id);
			var footerItemArray = document.querySelectorAll(this.footerItemClass);

			footerItemArray.forEach(function (el) {
				el.classList.remove(_this.visibleClass);
			});

			footerItem.classList.add(this.visibleClass);
		}
	}]);
	return Footer;
}();

exports.default = Footer;

/***/ }),

/***/ "./src/scripts/modules/Layout.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Layout.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Footer = __webpack_require__(/*! ./Footer */ "./src/scripts/modules/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _View = __webpack_require__(/*! ./View */ "./src/scripts/modules/View.js");

var _View2 = _interopRequireDefault(_View);

var _Aside = __webpack_require__(/*! ./Aside */ "./src/scripts/modules/Aside.js");

var _Aside2 = _interopRequireDefault(_Aside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Transition from './Transition';

var Layout = function () {
	function Layout() {
		var _this = this;

		(0, _classCallCheck3.default)(this, Layout);

		this.view = new _View2.default({
			viewContainerClass: '.main',
			viewClass: '.section',
			visibleClass: 'is-visible'
		});

		this.footer = new _Footer2.default({
			footerClass: '.footer',
			footerItemClass: '.footer__item',
			visibleClass: 'is-visible'
		});

		this.aside = new _Aside2.default({
			elementClass: '.aside',
			visibleClass: 'is-visible'
		});

		this.layout = {
			one: function one(id) {
				_this.view.showView(id);
				_this.footer.hide();
				_this.aside.hide();
			},
			two: function two(id) {
				_this.view.showView(id);
				_this.footer.show(id);
				_this.aside.hide();
			},
			three: function three(id) {
				_this.view.showView(id);
				_this.footer.hide();
				_this.aside.show();
			},
			four: function four(id) {
				_this.view.showView(id);
				_this.footer.show(id);
				_this.aside.show();
			}
		};
	}

	(0, _createClass3.default)(Layout, [{
		key: 'init',
		value: function init(id) {
			this.layout[id](id);
		}
	}, {
		key: 'show',
		value: function show(id) {
			// this.transition = new Transition(this.layout[id](id));
			//
			// this.transition.animate('leftToRight', this.view.activeView, this.view.previousView);
			this.layout[id](id);
		}
	}]);
	return Layout;
}();

exports.default = Layout;

/***/ }),

/***/ "./src/scripts/modules/Menu.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/Menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function () {
	function Menu(_ref) {
		var _this = this;

		var _ref$el = _ref.el,
		    el = _ref$el === undefined ? '.js-menu' : _ref$el,
		    _ref$childEl = _ref.childEl,
		    childEl = _ref$childEl === undefined ? '.js-change-section' : _ref$childEl,
		    _ref$onClickEvent = _ref.onClickEvent,
		    onClickEvent = _ref$onClickEvent === undefined ? function () {
			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'clicked';
			console.log(id);
		} : _ref$onClickEvent;
		(0, _classCallCheck3.default)(this, Menu);

		this.el = document.querySelector(el);
		this.linksArray = this.el.querySelectorAll(childEl);

		this.linksArray.forEach(function (el) {
			el.onclick = function () {
				_this.selectMenuLink(el);
				onClickEvent(el.getAttribute('data-show-section'));
			};
		});
	}

	(0, _createClass3.default)(Menu, [{
		key: 'selectMenuLink',
		value: function selectMenuLink(el) {
			this.linksArray.forEach(function (el) {
				el.classList.remove('is-selected');
			});

			el.classList.add('is-selected');
		}
	}]);
	return Menu;
}();

exports.default = Menu;

/***/ }),

/***/ "./src/scripts/modules/View.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/View.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = function () {
	function View(config) {
		(0, _classCallCheck3.default)(this, View);

		this.viewClass = config.viewClass;
		this.visibleClass = config.visibleClass;
		this.footerClass = config.footerClass;
		this.currentView;
		this.prevView;
	}

	(0, _createClass3.default)(View, [{
		key: 'showView',
		value: function showView(id) {
			var _this = this;

			var view = document.querySelector(this.viewClass + '--' + id);
			var viewArray = document.querySelectorAll(this.viewClass);

			viewArray.forEach(function (el) {
				el.classList.remove(_this.visibleClass);
			});

			view.classList.add(this.visibleClass);

			this.activeView = id;
		}
	}, {
		key: 'activeView',
		set: function set(id) {
			this.previousView = this.currentView;
			this.currentView = id;
		},
		get: function get() {
			return document.querySelector('.section--' + this.currentView);
		}
	}, {
		key: 'previousView',
		set: function set(id) {
			this.prevView = id;
		},
		get: function get() {
			return document.querySelector('.section--' + this.prevView);
		}
	}]);
	return View;
}();

exports.default = View;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map