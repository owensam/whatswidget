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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"whtsc\"> <div class=\"whtsm\"></div> <a target=\"_blank\" rel=\"nofollow\" class=\"whatswidget-button\"><img src=\"https://cdn.jsdelivr.net/gh/mascarell/whatswidget/assets/whatsapp.svg\" alt=\"Whatsapp Icon\"/></a> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".whtsc{\n    position: fixed;\n    z-index: 10002;\n    bottom: 0; right: 0; left: auto; top: auto;\n    content: '';\n    font-family: Verdana, Geneva, sans-serif;\n    padding: 12px;\n}\n.whtsc .whtsm{\n    position: relative;\n    font-size: 16px; background-color: #f7f7f7;\n    letter-spacing: 1px;\n    font-family: 'Darker Grotesque', sans-serif;\n    box-shadow: 2px 2px 10px 5px #dadada;\n    padding: 10px 20px; padding-right: 30px;\n    border-radius: 8px;\n    color: #525252;\n    font-weight: 600;\n    margin-bottom: 12px;\n    max-width: 450px;\n    width: auto;\n    display: none;\n}\n.whtsc .whtsm span{ content: ''; position: absolute; width: 15px; height: 15px; right: 15px; top: 15px; left: auto; }\n.whtsc .whtsm span:hover{ cursor: pointer; }\n.whtsc .whtsm span::after{ content: ''; position: absolute; top: 8px; left: 0; width: 10px; height: 2px; background-color: #979797; transform: rotate(45deg); }\n.whtsc .whtsm span::before{ content: ''; position: absolute; top: 8px; left: 0; width: 10px; height: 2px; background-color: #979797; transform: rotate(-45deg); }\n.whtsc .whatswidget-button{\n    content: '';\n    width: 48px; height: 48px;\n    position: relative;\n    float: right;\n    display: flex; justify-content: center; align-items: center;\n    transition: .1s linear;\n    /* background-color: #25D366; */\n}\n.whtsc .whatswidget-button::before{ \n    content: ''; position: absolute;\n    border-radius: 50%;\n    z-index: 10000;\n    width: 100%; height: 100%;\n    box-shadow: 2px 2px 10px 5px #dadada;\n}\n.whtsc .whatswidget-button img{ \n    z-index: 10001;\n    transition: .1s linear;\n    margin: 0 !important; padding: 0 !important;\n    max-width: 100%; \n}\n.whtsc .whatswidget-button:hover img{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/* POSITION THE WIDGET TO THE LEFT */\n.whtsc.left{ left: 0; width: auto; right: initial; }\n.whtsc.left .whatswidget-button{ float: left; }\n\n/* SHOW WIDGET ON MOBILES DIVICES */\n.whtsc.show-message-always .whtsm{ display: block; }\n\n/* Tablets */\n@media only screen and (min-width : 768px) \n{\n    .whtsc .whtsm span{ right: 10px;}\n    .whtsc .whtsm{ display: block; }\n}", "",{"version":3,"sources":["webpack://src/views/message.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,cAAc;IACd,SAAS,EAAE,QAAQ,EAAE,UAAU,EAAE,SAAS;IAC1C,WAAW;IACX,wCAAwC;IACxC,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,eAAe,EAAE,yBAAyB;IAC1C,mBAAmB;IACnB,2CAA2C;IAC3C,oCAAoC;IACpC,kBAAkB,EAAE,mBAAmB;IACvC,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,aAAa;AACjB;AACA,oBAAoB,WAAW,EAAE,kBAAkB,EAAE,WAAW,EAAE,YAAY,EAAE,WAAW,EAAE,SAAS,EAAE,UAAU,EAAE;AACpH,0BAA0B,eAAe,EAAE;AAC3C,2BAA2B,WAAW,EAAE,kBAAkB,EAAE,QAAQ,EAAE,OAAO,EAAE,WAAW,EAAE,WAAW,EAAE,yBAAyB,EAAE,wBAAwB,EAAE;AAC9J,4BAA4B,WAAW,EAAE,kBAAkB,EAAE,QAAQ,EAAE,OAAO,EAAE,WAAW,EAAE,WAAW,EAAE,yBAAyB,EAAE,yBAAyB,EAAE;AAChK;IACI,WAAW;IACX,WAAW,EAAE,YAAY;IACzB,kBAAkB;IAClB,YAAY;IACZ,aAAa,EAAE,uBAAuB,EAAE,mBAAmB;IAC3D,sBAAsB;IACtB,+BAA+B;AACnC;AACA;IACI,WAAW,EAAE,kBAAkB;IAC/B,kBAAkB;IAClB,cAAc;IACd,WAAW,EAAE,YAAY;IACzB,oCAAoC;AACxC;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,oBAAoB,EAAE,qBAAqB;IAC3C,eAAe;AACnB;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA,oCAAoC;AACpC,aAAa,OAAO,EAAE,WAAW,EAAE,cAAc,EAAE;AACnD,iCAAiC,WAAW,EAAE;;AAE9C,mCAAmC;AACnC,mCAAmC,cAAc,EAAE;;AAEnD,YAAY;AACZ;;IAEI,oBAAoB,WAAW,CAAC;IAChC,eAAe,cAAc,EAAE;AACnC","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap');\n\n.whtsc{\n    position: fixed;\n    z-index: 10002;\n    bottom: 0; right: 0; left: auto; top: auto;\n    content: '';\n    font-family: Verdana, Geneva, sans-serif;\n    padding: 12px;\n}\n.whtsc .whtsm{\n    position: relative;\n    font-size: 16px; background-color: #f7f7f7;\n    letter-spacing: 1px;\n    font-family: 'Darker Grotesque', sans-serif;\n    box-shadow: 2px 2px 10px 5px #dadada;\n    padding: 10px 20px; padding-right: 30px;\n    border-radius: 8px;\n    color: #525252;\n    font-weight: 600;\n    margin-bottom: 12px;\n    max-width: 450px;\n    width: auto;\n    display: none;\n}\n.whtsc .whtsm span{ content: ''; position: absolute; width: 15px; height: 15px; right: 15px; top: 15px; left: auto; }\n.whtsc .whtsm span:hover{ cursor: pointer; }\n.whtsc .whtsm span::after{ content: ''; position: absolute; top: 8px; left: 0; width: 10px; height: 2px; background-color: #979797; transform: rotate(45deg); }\n.whtsc .whtsm span::before{ content: ''; position: absolute; top: 8px; left: 0; width: 10px; height: 2px; background-color: #979797; transform: rotate(-45deg); }\n.whtsc .whatswidget-button{\n    content: '';\n    width: 48px; height: 48px;\n    position: relative;\n    float: right;\n    display: flex; justify-content: center; align-items: center;\n    transition: .1s linear;\n    /* background-color: #25D366; */\n}\n.whtsc .whatswidget-button::before{ \n    content: ''; position: absolute;\n    border-radius: 50%;\n    z-index: 10000;\n    width: 100%; height: 100%;\n    box-shadow: 2px 2px 10px 5px #dadada;\n}\n.whtsc .whatswidget-button img{ \n    z-index: 10001;\n    transition: .1s linear;\n    margin: 0 !important; padding: 0 !important;\n    max-width: 100%; \n}\n.whtsc .whatswidget-button:hover img{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/* POSITION THE WIDGET TO THE LEFT */\n.whtsc.left{ left: 0; width: auto; right: initial; }\n.whtsc.left .whatswidget-button{ float: left; }\n\n/* SHOW WIDGET ON MOBILES DIVICES */\n.whtsc.show-message-always .whtsm{ display: block; }\n\n/* Tablets */\n@media only screen and (min-width : 768px) \n{\n    .whtsc .whtsm span{ right: 10px;}\n    .whtsc .whtsm{ display: block; }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/views/message.html
var message = __webpack_require__(0);
var message_default = /*#__PURE__*/__webpack_require__.n(message);

// EXTERNAL MODULE: ./src/views/message.css
var views_message = __webpack_require__(2);

// CONCATENATED MODULE: ./src/views/message.js


var body;
var tmp = document.createElement('div');
tmp.innerHTML = message_default.a;
var container = tmp.querySelector('.whtsc');
/* Initial configuration for the widget */

function config(config) {
  if (config.message) {
    // Welcome message
    // If we use cookies, check to see if the cookie exists already or check if we don't use cookies
    if (config.useCookies && document.cookie.match(/^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/) == null) {
      container.querySelector('.whtsm').innerHTML = "".concat(config.message, " <span></span>");
      container.querySelector('.whtsm span').addEventListener('click', closeMessage); // Event listener to close the message on the widget

      createCookie('showmessage', 'no', 7); // Create the cookie
    } else if (!config.useCookies) {
      // Show the message if we're not using cookies always
      container.querySelector('.whtsm').innerHTML = "".concat(config.message, " <span></span>");
      container.querySelector('.whtsm span').addEventListener('click', closeMessage); // Event listener to close the message on the widget
    } else // Remove the div that contains the welcome message if we're using the cookie and it already exists
      container.querySelector('.whtsm').remove();
  } else // If there's no welcome message, remove that div
    container.querySelector('.whtsm').remove();

  if (config.phone) // Add whatsapp link
    container.querySelector('.whatswidget-button').href = "https://api.whatsapp.com/send?phone=".concat(config.phone);
  if (config.floatLeft) // Show the widget on the left side of the page
    container.classList.add('left');
  if (config.showMessageAlways) // Show the widget message on mobile devices
    container.classList.add('show-message-always');
  body = document.getElementsByTagName('body')[0];
  body.appendChild(container);
}
/* Close widget welcome message */

function closeMessage() {
  container.querySelector('.whtsm').style.display = 'none';
}
/* Function to create a cookie to show the message only once each day */

/* Taken from here https://stackoverflow.com/questions/6561687/how-can-i-set-a-cookie-to-expire-after-x-days-with-this-code-i-have */

function createCookie(name, value, days) {
  console.log('creating cookie');
  var date, expires;

  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else expires = "";

  document.cookie = name + "=" + value + expires + "; path=/";
}
// CONCATENATED MODULE: ./src/main.js

var supportedAPI = ['config']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

/*
    The main entry of the application
*/

function app(window) {
  // set default configurations
  var configurations = {
    message: false,
    phone: false,
    floatLeft: false,
    showMessageAlways: false,
    useCookies: false
  }; // all methods that were called till now and stored in queue
  // needs to be called now 

  var globalObject = window[window['ww']];
  var queue = globalObject.q;

  if (queue) {
    for (var i = 0; i < queue.length; i++) {
      apiHandler(queue[i][0], queue[i][1]);
    }
  } // override temporary (until the app loaded) handler
  // for widget's API calls


  globalObject = apiHandler;
  globalObject.configurations = configurations;
}
/*
    Method that handles all API calls
*/


function apiHandler(api, params) {
  if (!api) throw Error('API method required');
  api = api.toLowerCase();
  if (supportedAPI.indexOf(api) === -1) throw Error("Method ".concat(api, " is not supported"));

  switch (api) {
    // TODO: add API implementation
    case 'config':
      config(params);
      break;

    default:
      console.warn("No handler defined for ".concat(api));
  }
}

app(window);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmNzcz83MjRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVzc2FnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiYm9keSIsInRtcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlnIiwibWVzc2FnZSIsInVzZUNvb2tpZXMiLCJjb29raWUiLCJtYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZU1lc3NhZ2UiLCJjcmVhdGVDb29raWUiLCJyZW1vdmUiLCJwaG9uZSIsImhyZWYiLCJmbG9hdExlZnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93TWVzc2FnZUFsd2F5cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lIiwidmFsdWUiLCJkYXlzIiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJleHBpcmVzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9HTVRTdHJpbmciLCJzdXBwb3J0ZWRBUEkiLCJhcHAiLCJ3aW5kb3ciLCJjb25maWd1cmF0aW9ucyIsImdsb2JhbE9iamVjdCIsInF1ZXVlIiwicSIsImkiLCJsZW5ndGgiLCJhcGlIYW5kbGVyIiwiYXBp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STtBQUNBLFNBQUssUUFBTDtBQUNJeEMsWUFBTSxDQUFDeUMsTUFBRCxDQUFOO0FBQ0E7O0FBQ0o7QUFDSW5CLGFBQU8sQ0FBQ3VCLElBQVIsa0NBQXVDTCxHQUF2QztBQU5SO0FBUUg7O0FBRURULEdBQUcsQ0FBQ0MsTUFBRCxDQUFILEMiLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwid2h0c2NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ3aHRzbVxcXCI+PC9kaXY+IDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vZm9sbG93XFxcIiBjbGFzcz1cXFwid2hhdHN3aWRnZXQtYnV0dG9uXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21hc2NhcmVsbC93aGF0c3dpZGdldC9hc3NldHMvd2hhdHNhcHAuc3ZnXFxcIiBhbHQ9XFxcIldoYXRzYXBwIEljb25cXFwiLz48L2E+IDwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVzc2FnZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RGFya2VyK0dyb3Rlc3F1ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2h0c2N7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwMDI7XFxuICAgIGJvdHRvbTogMDsgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87IHRvcDogYXV0bztcXG4gICAgY29udGVudDogJyc7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcbi53aHRzYyAud2h0c217XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggNXB4ICNkYWRhZGE7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogIzUyNTI1MjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi53aHRzYyAud2h0c20gc3BhbnsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgcmlnaHQ6IDE1cHg7IHRvcDogMTVweDsgbGVmdDogYXV0bzsgfVxcbi53aHRzYyAud2h0c20gc3Bhbjpob3ZlcnsgY3Vyc29yOiBwb2ludGVyOyB9XFxuLndodHNjIC53aHRzbSBzcGFuOjphZnRlcnsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA4cHg7IGxlZnQ6IDA7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDJweDsgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuLndodHNjIC53aHRzbSBzcGFuOjpiZWZvcmV7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogOHB4OyBsZWZ0OiAwOyB3aWR0aDogMTBweDsgaGVpZ2h0OiAycHg7IGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7IHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG4ud2h0c2MgLndoYXRzd2lkZ2V0LWJ1dHRvbntcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGxpbmVhcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI1RDM2NjsgKi9cXG59XFxuLndodHNjIC53aGF0c3dpZGdldC1idXR0b246OmJlZm9yZXsgXFxuICAgIGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCA1cHggI2RhZGFkYTtcXG59XFxuLndodHNjIC53aGF0c3dpZGdldC1idXR0b24gaW1neyBcXG4gICAgei1pbmRleDogMTAwMDE7XFxuICAgIHRyYW5zaXRpb246IC4xcyBsaW5lYXI7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTsgXFxufVxcbi53aHRzYyAud2hhdHN3aWRnZXQtYnV0dG9uOmhvdmVyIGltZ3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIFBPU0lUSU9OIFRIRSBXSURHRVQgVE8gVEhFIExFRlQgKi9cXG4ud2h0c2MubGVmdHsgbGVmdDogMDsgd2lkdGg6IGF1dG87IHJpZ2h0OiBpbml0aWFsOyB9XFxuLndodHNjLmxlZnQgLndoYXRzd2lkZ2V0LWJ1dHRvbnsgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4vKiBTSE9XIFdJREdFVCBPTiBNT0JJTEVTIERJVklDRVMgKi9cXG4ud2h0c2Muc2hvdy1tZXNzYWdlLWFsd2F5cyAud2h0c217IGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogVGFibGV0cyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBcXG57XFxuICAgIC53aHRzYyAud2h0c20gc3BhbnsgcmlnaHQ6IDEwcHg7fVxcbiAgICAud2h0c2MgLndodHNteyBkaXNwbGF5OiBibG9jazsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3ZpZXdzL21lc3NhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTO0lBQzFDLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWUsRUFBRSx5QkFBeUI7SUFDMUMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxvQ0FBb0M7SUFDcEMsa0JBQWtCLEVBQUUsbUJBQW1CO0lBQ3ZDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQSxvQkFBb0IsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDcEgsMEJBQTBCLGVBQWUsRUFBRTtBQUMzQywyQkFBMkIsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRTtBQUM5Siw0QkFBNEIsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRTtBQUNoSztJQUNJLFdBQVc7SUFDWCxXQUFXLEVBQUUsWUFBWTtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUI7SUFDM0Qsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixvQkFBb0IsRUFBRSxxQkFBcUI7SUFDM0MsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQSxvQ0FBb0M7QUFDcEMsYUFBYSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRTtBQUNuRCxpQ0FBaUMsV0FBVyxFQUFFOztBQUU5QyxtQ0FBbUM7QUFDbkMsbUNBQW1DLGNBQWMsRUFBRTs7QUFFbkQsWUFBWTtBQUNaOztJQUVJLG9CQUFvQixXQUFXLENBQUM7SUFDaEMsZUFBZSxjQUFjLEVBQUU7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYXJrZXIrR3JvdGVzcXVlJmRpc3BsYXk9c3dhcCcpO1xcblxcbi53aHRzY3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDAwMjtcXG4gICAgYm90dG9tOiAwOyByaWdodDogMDsgbGVmdDogYXV0bzsgdG9wOiBhdXRvO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuLndodHNjIC53aHRzbXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCA1cHggI2RhZGFkYTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiAjNTI1MjUyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLndodHNjIC53aHRzbSBzcGFueyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyByaWdodDogMTVweDsgdG9wOiAxNXB4OyBsZWZ0OiBhdXRvOyB9XFxuLndodHNjIC53aHRzbSBzcGFuOmhvdmVyeyBjdXJzb3I6IHBvaW50ZXI7IH1cXG4ud2h0c2MgLndodHNtIHNwYW46OmFmdGVyeyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDhweDsgbGVmdDogMDsgd2lkdGg6IDEwcHg7IGhlaWdodDogMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3OyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4ud2h0c2MgLndodHNtIHNwYW46OmJlZm9yZXsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA4cHg7IGxlZnQ6IDA7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDJweDsgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbi53aHRzYyAud2hhdHN3aWRnZXQtYnV0dG9ue1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgbGluZWFyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVEMzY2OyAqL1xcbn1cXG4ud2h0c2MgLndoYXRzd2lkZ2V0LWJ1dHRvbjo6YmVmb3JleyBcXG4gICAgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDVweCAjZGFkYWRhO1xcbn1cXG4ud2h0c2MgLndoYXRzd2lkZ2V0LWJ1dHRvbiBpbWd7IFxcbiAgICB6LWluZGV4OiAxMDAwMTtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGxpbmVhcjtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcXG59XFxuLndodHNjIC53aGF0c3dpZGdldC1idXR0b246aG92ZXIgaW1ne1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogUE9TSVRJT04gVEhFIFdJREdFVCBUTyBUSEUgTEVGVCAqL1xcbi53aHRzYy5sZWZ0eyBsZWZ0OiAwOyB3aWR0aDogYXV0bzsgcmlnaHQ6IGluaXRpYWw7IH1cXG4ud2h0c2MubGVmdCAud2hhdHN3aWRnZXQtYnV0dG9ueyBmbG9hdDogbGVmdDsgfVxcblxcbi8qIFNIT1cgV0lER0VUIE9OIE1PQklMRVMgRElWSUNFUyAqL1xcbi53aHRzYy5zaG93LW1lc3NhZ2UtYWx3YXlzIC53aHRzbXsgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKiBUYWJsZXRzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIFxcbntcXG4gICAgLndodHNjIC53aHRzbSBzcGFueyByaWdodDogMTBweDt9XFxuICAgIC53aHRzYyAud2h0c217IGRpc3BsYXk6IGJsb2NrOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL21lc3NhZ2UuaHRtbCc7XG5pbXBvcnQgJy4vbWVzc2FnZS5jc3MnO1xuXG5sZXQgYm9keVxubGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50bXAuaW5uZXJIVE1MID0gaHRtbFxubGV0IGNvbnRhaW5lciA9IHRtcC5xdWVyeVNlbGVjdG9yKCcud2h0c2MnKVxuXG4vKiBJbml0aWFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB3aWRnZXQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcoY29uZmlnKSB7ICAgIFxuICAgIGlmKGNvbmZpZy5tZXNzYWdlKSB7Ly8gV2VsY29tZSBtZXNzYWdlXG4gICAgICAgIC8vIElmIHdlIHVzZSBjb29raWVzLCBjaGVjayB0byBzZWUgaWYgdGhlIGNvb2tpZSBleGlzdHMgYWxyZWFkeSBvciBjaGVjayBpZiB3ZSBkb24ndCB1c2UgY29va2llc1xuICAgICAgICBpZihjb25maWcudXNlQ29va2llcyAmJiBkb2N1bWVudC5jb29raWUubWF0Y2goL14oLio7KT9cXHMqc2hvd21lc3NhZ2VcXHMqPVxccypbXjtdKyguKik/JC8pID09IG51bGwgKSB7XG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtJykuaW5uZXJIVE1MID0gYCR7Y29uZmlnLm1lc3NhZ2V9IDxzcGFuPjwvc3Bhbj5gXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtIHNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVzc2FnZSkgLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIG1lc3NhZ2Ugb24gdGhlIHdpZGdldFxuICAgICAgICAgICAgY3JlYXRlQ29va2llKCdzaG93bWVzc2FnZScsICdubycsIDcpIC8vIENyZWF0ZSB0aGUgY29va2llXG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbmZpZy51c2VDb29raWVzKSB7IC8vIFNob3cgdGhlIG1lc3NhZ2UgaWYgd2UncmUgbm90IHVzaW5nIGNvb2tpZXMgYWx3YXlzXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtJykuaW5uZXJIVE1MID0gYCR7Y29uZmlnLm1lc3NhZ2V9IDxzcGFuPjwvc3Bhbj5gXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtIHNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVzc2FnZSkgLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIG1lc3NhZ2Ugb24gdGhlIHdpZGdldFxuICAgICAgICB9IGVsc2UgLy8gUmVtb3ZlIHRoZSBkaXYgdGhhdCBjb250YWlucyB0aGUgd2VsY29tZSBtZXNzYWdlIGlmIHdlJ3JlIHVzaW5nIHRoZSBjb29raWUgYW5kIGl0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtJykucmVtb3ZlKClcbiAgICB9IGVsc2UgLy8gSWYgdGhlcmUncyBubyB3ZWxjb21lIG1lc3NhZ2UsIHJlbW92ZSB0aGF0IGRpdlxuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtJykucmVtb3ZlKClcbiAgICAgICAgXG4gICAgaWYoY29uZmlnLnBob25lKSAvLyBBZGQgd2hhdHNhcHAgbGlua1xuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndoYXRzd2lkZ2V0LWJ1dHRvbicpLmhyZWYgPSBgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9JHtjb25maWcucGhvbmV9YFxuICAgIGlmKGNvbmZpZy5mbG9hdExlZnQpIC8vIFNob3cgdGhlIHdpZGdldCBvbiB0aGUgbGVmdCBzaWRlIG9mIHRoZSBwYWdlXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0JylcbiAgICBpZihjb25maWcuc2hvd01lc3NhZ2VBbHdheXMpIC8vIFNob3cgdGhlIHdpZGdldCBtZXNzYWdlIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93LW1lc3NhZ2UtYWx3YXlzJylcblxuXG4gICAgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn1cblxuLyogQ2xvc2Ugd2lkZ2V0IHdlbGNvbWUgbWVzc2FnZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTWVzc2FnZSgpIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLndodHNtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG4vKiBGdW5jdGlvbiB0byBjcmVhdGUgYSBjb29raWUgdG8gc2hvdyB0aGUgbWVzc2FnZSBvbmx5IG9uY2UgZWFjaCBkYXkgKi9cbi8qIFRha2VuIGZyb20gaGVyZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NTYxNjg3L2hvdy1jYW4taS1zZXQtYS1jb29raWUtdG8tZXhwaXJlLWFmdGVyLXgtZGF5cy13aXRoLXRoaXMtY29kZS1pLWhhdmUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBjb29raWUnKVxuICAgIGxldCBkYXRlLCBleHBpcmVzXG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKVxuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZygpXG4gICAgfSBlbHNlIFxuICAgICAgICBleHBpcmVzID0gXCJcIlxuXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZStcIj1cIit2YWx1ZStleHBpcmVzK1wiOyBwYXRoPS9cIlxufSIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vdmlld3MvbWVzc2FnZSdcblxuY29uc3Qgc3VwcG9ydGVkQVBJID0gWydjb25maWcnXSAvLyBlbmxpc3QgYWxsIG1ldGhvZHMgc3VwcG9ydGVkIGJ5IEFQSSAoZS5nLiBgbXcoJ2V2ZW50JywgJ3VzZXItbG9naW4nKTtgKVxuXG4vKlxuICAgIFRoZSBtYWluIGVudHJ5IG9mIHRoZSBhcHBsaWNhdGlvblxuKi9cbmZ1bmN0aW9uIGFwcCh3aW5kb3cpIHtcbiAgICAvLyBzZXQgZGVmYXVsdCBjb25maWd1cmF0aW9uc1xuICAgIGxldCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICAgICAgbWVzc2FnZTogZmFsc2UsXG4gICAgICAgIHBob25lOiBmYWxzZSxcbiAgICAgICAgZmxvYXRMZWZ0OiBmYWxzZSxcbiAgICAgICAgc2hvd01lc3NhZ2VBbHdheXM6IGZhbHNlLFxuICAgICAgICB1c2VDb29raWVzOiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGFsbCBtZXRob2RzIHRoYXQgd2VyZSBjYWxsZWQgdGlsbCBub3cgYW5kIHN0b3JlZCBpbiBxdWV1ZVxuICAgIC8vIG5lZWRzIHRvIGJlIGNhbGxlZCBub3cgXG4gICAgbGV0IGdsb2JhbE9iamVjdCA9IHdpbmRvd1t3aW5kb3dbJ3d3J11dXG4gICAgbGV0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnFcbiAgICBpZiAocXVldWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXBpSGFuZGxlcihxdWV1ZVtpXVswXSwgcXVldWVbaV1bMV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZSB0ZW1wb3JhcnkgKHVudGlsIHRoZSBhcHAgbG9hZGVkKSBoYW5kbGVyXG4gICAgLy8gZm9yIHdpZGdldCdzIEFQSSBjYWxsc1xuICAgIGdsb2JhbE9iamVjdCA9IGFwaUhhbmRsZXJcbiAgICBnbG9iYWxPYmplY3QuY29uZmlndXJhdGlvbnMgPSBjb25maWd1cmF0aW9uc1xufVxuXG4vKlxuICAgIE1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIEFQSSBjYWxsc1xuKi9cbmZ1bmN0aW9uIGFwaUhhbmRsZXIoYXBpLCBwYXJhbXMpIHtcbiAgICBpZiAoIWFwaSkgdGhyb3cgRXJyb3IoJ0FQSSBtZXRob2QgcmVxdWlyZWQnKVxuICAgIGFwaSA9IGFwaS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoc3VwcG9ydGVkQVBJLmluZGV4T2YoYXBpKSA9PT0gLTEpIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKVxuXG4gICAgc3dpdGNoIChhcGkpIHtcbiAgICAgICAgLy8gVE9ETzogYWRkIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgY29uZmlnKHBhcmFtcylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGhhbmRsZXIgZGVmaW5lZCBmb3IgJHthcGl9YClcbiAgICB9XG59XG5cbmFwcCh3aW5kb3cpIl0sInNvdXJjZVJvb3QiOiIifQ==