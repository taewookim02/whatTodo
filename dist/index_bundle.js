/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  min-height: 100vh;
}

.content {
  background-color: #eee;
}

.header {
  background-color: #ddd;
  border-right: 2px solid #333;
}

/* Project Modal */
.project__modal,
.todo__modal {
  /* display: none; */
  position: fixed;
  top: 45%; /* init: 50% */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  /* border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.project__form {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content min-content;
  align-items: center;
}

.project__close {
  width: min-content;
  height: min-content;
  justify-self: end;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA,kBAAkB;AAClB;;EAEE,mBAAmB;EACnB,eAAe;EACf,QAAQ,EAAE,cAAc;EACxB,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb;6CAC2C;AAC7C;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 1fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content {\r\n  background-color: #eee;\r\n}\r\n\r\n.header {\r\n  background-color: #ddd;\r\n  border-right: 2px solid #333;\r\n}\r\n\r\n/* Project Modal */\r\n.project__modal,\r\n.todo__modal {\r\n  /* display: none; */\r\n  position: fixed;\r\n  top: 45%; /* init: 50% */\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1000;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  /* border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.modal__overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 999;\r\n}\r\n\r\n.project__form {\r\n  display: grid;\r\n  grid-template-columns: min-content min-content;\r\n  grid-template-rows: min-content min-content;\r\n  align-items: center;\r\n}\r\n\r\n.project__close {\r\n  width: min-content;\r\n  height: min-content;\r\n  justify-self: end;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/classes/DOMController.js":
/*!**************************************!*\
  !*** ./src/classes/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMController: () => (/* binding */ DOMController)
/* harmony export */ });
class DOMController {
  // static projects = new Projects();
  // static variables
  static overlayModal = null;
  static projectModal = null;
  static todoModal = null;
  static content = document.querySelector("#content");
  static nav = document.querySelector(".nav");
  static header = document.querySelector(".header");
  static container = document.querySelector(".container");
  static activeModal = null;
  static selectedProjectId = null;

  // render page structure
  static renderPage() {
    // reset content
    DOMController.nav.innerHTML = `
      <h2>Projects</h2>
      <div class="nav__projects"></div>
    `;
    DOMController.content.innerHTML = `
      <h2>Todos</h2>
      <div class="todos__container"></div>
    `;

    DOMController.renderModal(DOMController.container, "project"); // this creates the project modal
    DOMController.renderModal(DOMController.container, "todo"); // this creates the project modal

    DOMController.addButtons();

    // add event listeners
    DOMController.initEventListeners();
  }

  static addButtons() {
    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    DOMController.header.appendChild(projectBtn);
    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked project button");
    });

    // add todo button
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("todo__btn");
    todoBtn.textContent = "+";
    content.appendChild(todoBtn);
    todoBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  static createModalConfig(modalName) {
    const modalConfigs = {
      project: {
        class: "project__modal",
        content: `
        <form class="project__form">
          <h2>Add Project</h2>
          <a class="project__close">&times;</a>
          <input type="text" id="project__name" name ="project__name" class="project__name" placeHolder="Project Name:" />
          <button class="project__submit">Submit</button>
        </form>
        `,
      },
      todo: {
        class: "todo__modal",
        content: `
        <form class="todo__form">
          <h2>Add Todo</h2>
          <a class="todo__close">&times;</a>
          <input type="text" id="todo__name" name ="todo__name" class="todo__name" placeHolder="Todo Name:" />
          <input type="text" id="todo__description" name ="todo__description" class="todo__description" placeHolder="Description:" />
          <input type="date" id="todo__dueDate" name ="todo__dueDate" class="todo__dueDate" placeHolder="Due Date:" />
          <input type="number" id="todo__priority" name ="todo__priority" class="todo__priority" placeHolder="Priority:" />
          <input type="text" id="todo__notes" name ="todo__notes" class="todo__notes" placeHolder="Notes:" />
          
          <button class="todo__submit">Submit</button>
        </form>
        `,
      },
    };
    return modalConfigs[modalName];
  }

  static addButton() {
    // add project button
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project__btn");
    projectBtn.textContent = "+";
    header.appendChild(projectBtn);

    // add todo button
    const todoBtn = document.createElement("button");
    todoBtn.classList.add("todo__btn");
    todoBtn.textContent = "+";
    content.appendChild(todoBtn);
  }

  static renderModal(container, modalName) {
    const { class: modalClass, content } =
      DOMController.createModalConfig(modalName);

    // modal overlay
    if (!DOMController.overlayModal) {
      DOMController.overlayModal = document.createElement("div");
      DOMController.overlayModal.classList.add("modal__overlay");
      container.appendChild(DOMController.overlayModal);
      DOMController.overlayModal.style.display = "none"; // Ensure it is initially hidden
    }

    const modal = document.createElement("div");
    modal.classList.add(modalClass);
    modal.innerHTML = content;

    container.appendChild(modal);
    modal.style.display = "none";

    if (modalName === "project") {
      DOMController.projectModal = modal;
    } else if (modalName === "todo") {
      DOMController.todoModal = modal;
    }
  }

  static toggleModal(targetModal) {
    // Check if the targetModal is being shown or hidden
    const isShowing = targetModal && targetModal.style.display === "block";

    // toggle overlay first
    this.overlayModal.style.display = isShowing ? "none" : "block";

    // toggle target modal
    if (targetModal) {
      targetModal.style.display = isShowing ? "none" : "block";

      // update activeModal ref
      this.activeModal = isShowing ? null : targetModal;
    }
  }

  static initEventListeners() {
    // button event listeners
    const projectBtn = document.querySelector(".project__btn");
    // toggle project modal
    projectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleModal(DOMController.projectModal);
    });

    const todoBtn = document.querySelector(".todo__btn");
    // toggle todo modal
    todoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleModal(DOMController.todoModal);
    });

    // overlay modal event listener
    DOMController.overlayModal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("modal__overlay") &&
        DOMController.activeModal
      ) {
        DOMController.toggleModal(DOMController.activeModal);
      }
    });
  }

  static acceptForm(callback, formSelector, modal) {
    const form = document.querySelector(formSelector);
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {};
      new FormData(form).forEach((value, key) => {
        formData[key] = value;
      });

      if (Object.keys(formData).length > 0) {
        callback(formData);
        DOMController.toggleModal(modal);
      }
      form.reset();
    });
  }

  // render all projects
  static renderProjects(projectsInstance) {
    const projectsContainer = document.querySelector(".nav__projects");
    projectsContainer.innerHTML = ""; // reset projects list

    const projectsArr = projectsInstance.getProjects();
    projectsArr.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `<h3>${project.name}</h3>`;
      projectDiv.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(project.id);
        DOMController.selectedProjectId = project.id;
        DOMController.renderTodosForProject(project.id, projectsInstance);
      });
      projectsContainer.appendChild(projectDiv);
    });
  }

  static renderTodosForProject(selectedProjectId, projectsInstance) {
    console.log(selectedProjectId);
    const selectedProject = projectsInstance.findProjectById(selectedProjectId);
    const todosContainer = document.querySelector(".todos__container");
    todosContainer.innerHTML = ""; // reset todos list

    if (selectedProject) {
      selectedProject.todos.forEach((todo) => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("todo");
        todoElement.innerHTML = `
          <h4>${todo.title}</h4>
          <p>${todo.description}</p>
          <p>Due: ${todo.dueDate}</p>
          <p>Priority: ${todo.priority}</p>
          <!-- add more -->
        `;
        todosContainer.appendChild(todoElement);
      });
    }
  }
}

// Step 3: Add Todo Form Handling
// Step 4: Adjust the Todo Form Submission Logic


/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/classes/Todo.js");


class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    if (todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo) {
      this.todos.push(todo); // this is to the project object
      // save to local storage;
      Project.saveProjectsToLocalStorage(this);
    } else {
      console.log("Not a valid todo");
    }
  }

  // save to local storage;
  static saveProjectsToLocalStorage(projectInstance) {
    // get existing projects from localStorage, else []
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

    // check if proejct exists in localStorage
    const projectIndex = existingProjects.findIndex(
      (project) => project.id === projectInstance.id
    );

    if (projectIndex !== -1) {
      // update existing project
      existingProjects[projectIndex] = projectInstance; // do I need to stringify?
    } else {
      // Add new project
      existingProjects.push(projectInstance);
    }

    localStorage.setItem("projects", JSON.stringify(existingProjects));
  }

  removeTodoById(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id);
  }
}


/***/ }),

/***/ "./src/classes/Projects.js":
/*!*********************************!*\
  !*** ./src/classes/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/classes/Util.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Util__WEBPACK_IMPORTED_MODULE_0__);


class Projects {
  constructor() {
    this.projects = this.loadFromLocalStorage() || [];
  }

  // should addProject be here?
  addProject(project) {
    this.projects.push(project);
    this.saveToLocalStorage();
  }

  getProjects() {
    return this.projects;
  }

  findProjectById(id) {
    return this.projects.find((project) => project.id === id);
  }

  removeProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("projects");

    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
}


/***/ }),

/***/ "./src/classes/Todo.js":
/*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete
  ) {
    this.id = id;
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // orderby priority
    this.notes = notes;
    this.isComplete = isComplete;
    // this.checkList = [];
  }

  // edit title
  setTitle(title) {
    this.title = title;
  }

  // edit description
  setDescription(description) {
    this.description = description;
  }

  // edit dueDate
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  // edit priority
  setPriority(priority) {
    this.priority = priority;
  }

  // edit notes
  setNotes(notes) {
    this.notes = notes;
  }

  // edit isComplete
  setIsComplete(isComplete) {
    this.isComplete = isComplete;
  }

  // should i add checklist class?

  // add checklist item
  addChecklistItem(checklistItem) {
    this.checkList.push(checklistItem);
  }

  // edit checklist item

  // remove checklist item
}


/***/ }),

/***/ "./src/classes/Util.js":
/*!*****************************!*\
  !*** ./src/classes/Util.js ***!
  \*****************************/
/***/ (() => {

// export class Util {
//   static saveToLocalStorage(prop) {
//     localStorage.setItem(prop, JSON.stringify(this[prop]));
//   }

//   //   // FIXME: I don't think this is working // Uncaught SyntaxError: "undefined" is not valid JSON
//   static getFromLocalStorage(prop) {
//     const data = localStorage.getItem(prop);
//     if (data) {
//       this[prop] = JSON.parse(data);
//       // console.log(this.prop);
//     }
//   }
// }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Projects */ "./src/classes/Projects.js");
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project */ "./src/classes/Project.js");
/* harmony import */ var _classes_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Todo */ "./src/classes/Todo.js");
/* harmony import */ var _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/DOMController */ "./src/classes/DOMController.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







// defining projects
const projects = new _classes_Projects__WEBPACK_IMPORTED_MODULE_0__.Projects();
// const project = new Project

if (projects.getProjects().length === 0) {
  const project1 = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(uniqid__WEBPACK_IMPORTED_MODULE_4___default()(), "Project 1");
  console.log(projects);
  // example todo
  const todo1 = new _classes_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
    uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
    "Todo 1",
    "Description 1",
    Date.now(), // date to something more readable
    10,
    "Notes... 1",
    false
  );

  // adding todo/project to project/projects
  projects.addProject(project1);
  project1.addTodo(todo1);
}

// render page
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderPage();
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(projects);

// add project
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.acceptForm(
  (formData) => {
    const newProject = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(uniqid__WEBPACK_IMPORTED_MODULE_4___default()(), formData.project__name);
    projects.addProject(newProject);
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderProjects(projects);
  },
  ".project__form",
  _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.projectModal
);

// add todo
_classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.acceptForm(
  (formData) => {
    // if (!DOMController.selectedProjectId) {
    //   console.log("No project selected");
    //   return;
    // }
    const newTodo = new _classes_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
      uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
      formData.todo__name,
      formData.todo__description,
      formData.todo__dueDate,
      formData.todo__priority,
      formData.todo__notes,
      false
    );

    const projectData = projects.findProjectById(
      _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.selectedProjectId
    );
    const project = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(projectData.id, projectData.name);
    project.todos = projectData.todos;

    console.log(project);
    console.log(project instanceof _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project);
    project.addTodo(newTodo);
    _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.renderTodosForProject(
      _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.selectedProjectId,
      projects
    );
  },
  ".todo__form",
  _classes_DOMController__WEBPACK_IMPORTED_MODULE_3__.DOMController.todoModal
);

// TODO: remove project

// TODO: remove todo

// TODO: styling

// TODO: Currently I can only add Todos when a project is clicked on..
// if I don't click on the project beforehand, it doesn't work
// to fix this, when I add new project, the project should be selected
// and the todos should be rendered for that project

// Upon first load, the page should render the projects and the first project's todos.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2QkFBNkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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NkNBQU07QUFDckM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBSTtBQUN4QixJQUFJLDZDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFhO0FBQ2IsaUVBQWE7QUFDYjtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBLDJCQUEyQixxREFBTyxDQUFDLDZDQUFNO0FBQ3pDO0FBQ0EsSUFBSSxpRUFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSxFQUFFLGlFQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFJO0FBQzVCLE1BQU0sNkNBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFhO0FBQ25CO0FBQ0Esd0JBQXdCLHFEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBTztBQUMxQztBQUNBLElBQUksaUVBQWE7QUFDakIsTUFBTSxpRUFBYTtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxpRUFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9jbGFzc2VzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2NsYXNzZXMvVXRpbC5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzMzMztcclxufVxyXG5cclxuLyogUHJvamVjdCBNb2RhbCAqL1xyXG4ucHJvamVjdF9fbW9kYWwsXHJcbi50b2RvX19tb2RhbCB7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0NSU7IC8qIGluaXQ6IDUwJSAqL1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvKiBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cclxufVxyXG5cclxuLm1vZGFsX19vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5wcm9qZWN0X19mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdF9fY2xvc2Uge1xyXG4gIHdpZHRoOiBtaW4tY29udGVudDtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQSxrQkFBa0I7QUFDbEI7O0VBRUUsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixRQUFRLEVBQUUsY0FBYztFQUN4QixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiOzZDQUMyQztBQUM3Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3QgTW9kYWwgKi9cXHJcXG4ucHJvamVjdF9fbW9kYWwsXFxyXFxuLnRvZG9fX21vZGFsIHtcXHJcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDQ1JTsgLyogaW5pdDogNTAlICovXFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X19mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X19jbG9zZSB7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiZXhwb3J0IGNsYXNzIERPTUNvbnRyb2xsZXIge1xyXG4gIC8vIHN0YXRpYyBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG4gIC8vIHN0YXRpYyB2YXJpYWJsZXNcclxuICBzdGF0aWMgb3ZlcmxheU1vZGFsID0gbnVsbDtcclxuICBzdGF0aWMgcHJvamVjdE1vZGFsID0gbnVsbDtcclxuICBzdGF0aWMgdG9kb01vZGFsID0gbnVsbDtcclxuICBzdGF0aWMgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBzdGF0aWMgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgc3RhdGljIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gIHN0YXRpYyBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcclxuICBzdGF0aWMgYWN0aXZlTW9kYWwgPSBudWxsO1xyXG4gIHN0YXRpYyBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XHJcblxyXG4gIC8vIHJlbmRlciBwYWdlIHN0cnVjdHVyZVxyXG4gIHN0YXRpYyByZW5kZXJQYWdlKCkge1xyXG4gICAgLy8gcmVzZXQgY29udGVudFxyXG4gICAgRE9NQ29udHJvbGxlci5uYXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDI+UHJvamVjdHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2X19wcm9qZWN0c1wiPjwvZGl2PlxyXG4gICAgYDtcclxuICAgIERPTUNvbnRyb2xsZXIuY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxoMj5Ub2RvczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvc19fY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoRE9NQ29udHJvbGxlci5jb250YWluZXIsIFwicHJvamVjdFwiKTsgLy8gdGhpcyBjcmVhdGVzIHRoZSBwcm9qZWN0IG1vZGFsXHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlck1vZGFsKERPTUNvbnRyb2xsZXIuY29udGFpbmVyLCBcInRvZG9cIik7IC8vIHRoaXMgY3JlYXRlcyB0aGUgcHJvamVjdCBtb2RhbFxyXG5cclxuICAgIERPTUNvbnRyb2xsZXIuYWRkQnV0dG9ucygpO1xyXG5cclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIERPTUNvbnRyb2xsZXIuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkQnV0dG9ucygpIHtcclxuICAgIC8vIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19idG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBET01Db250cm9sbGVyLmhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHByb2plY3QgYnV0dG9uXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIHRvZG8gYnV0dG9uXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9fX2J0blwiKTtcclxuICAgIHRvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0J0bik7XHJcbiAgICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVNb2RhbENvbmZpZyhtb2RhbE5hbWUpIHtcclxuICAgIGNvbnN0IG1vZGFsQ29uZmlncyA9IHtcclxuICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgIGNsYXNzOiBcInByb2plY3RfX21vZGFsXCIsXHJcbiAgICAgICAgY29udGVudDogYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHJvamVjdF9fZm9ybVwiPlxyXG4gICAgICAgICAgPGgyPkFkZCBQcm9qZWN0PC9oMj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwicHJvamVjdF9fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0X19uYW1lXCIgbmFtZSA9XCJwcm9qZWN0X19uYW1lXCIgY2xhc3M9XCJwcm9qZWN0X19uYW1lXCIgcGxhY2VIb2xkZXI9XCJQcm9qZWN0IE5hbWU6XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0X19zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSxcclxuICAgICAgdG9kbzoge1xyXG4gICAgICAgIGNsYXNzOiBcInRvZG9fX21vZGFsXCIsXHJcbiAgICAgICAgY29udGVudDogYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwidG9kb19fZm9ybVwiPlxyXG4gICAgICAgICAgPGgyPkFkZCBUb2RvPC9oMj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwidG9kb19fY2xvc2VcIj4mdGltZXM7PC9hPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19uYW1lXCIgbmFtZSA9XCJ0b2RvX19uYW1lXCIgY2xhc3M9XCJ0b2RvX19uYW1lXCIgcGxhY2VIb2xkZXI9XCJUb2RvIE5hbWU6XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kb19fZGVzY3JpcHRpb25cIiBuYW1lID1cInRvZG9fX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJ0b2RvX19kZXNjcmlwdGlvblwiIHBsYWNlSG9sZGVyPVwiRGVzY3JpcHRpb246XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG9kb19fZHVlRGF0ZVwiIG5hbWUgPVwidG9kb19fZHVlRGF0ZVwiIGNsYXNzPVwidG9kb19fZHVlRGF0ZVwiIHBsYWNlSG9sZGVyPVwiRHVlIERhdGU6XCIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0b2RvX19wcmlvcml0eVwiIG5hbWUgPVwidG9kb19fcHJpb3JpdHlcIiBjbGFzcz1cInRvZG9fX3ByaW9yaXR5XCIgcGxhY2VIb2xkZXI9XCJQcmlvcml0eTpcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvX19ub3Rlc1wiIG5hbWUgPVwidG9kb19fbm90ZXNcIiBjbGFzcz1cInRvZG9fX25vdGVzXCIgcGxhY2VIb2xkZXI9XCJOb3RlczpcIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kb19fc3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG1vZGFsQ29uZmlnc1ttb2RhbE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZEJ1dHRvbigpIHtcclxuICAgIC8vIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X19idG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XHJcblxyXG4gICAgLy8gYWRkIHRvZG8gYnV0dG9uXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRvZG9CdG4uY2xhc3NMaXN0LmFkZChcInRvZG9fX2J0blwiKTtcclxuICAgIHRvZG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0J0bik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyTW9kYWwoY29udGFpbmVyLCBtb2RhbE5hbWUpIHtcclxuICAgIGNvbnN0IHsgY2xhc3M6IG1vZGFsQ2xhc3MsIGNvbnRlbnQgfSA9XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuY3JlYXRlTW9kYWxDb25maWcobW9kYWxOYW1lKTtcclxuXHJcbiAgICAvLyBtb2RhbCBvdmVybGF5XHJcbiAgICBpZiAoIURPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19vdmVybGF5XCIpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NQ29udHJvbGxlci5vdmVybGF5TW9kYWwpO1xyXG4gICAgICBET01Db250cm9sbGVyLm92ZXJsYXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEVuc3VyZSBpdCBpcyBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChtb2RhbENsYXNzKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBpZiAobW9kYWxOYW1lID09PSBcInByb2plY3RcIikge1xyXG4gICAgICBET01Db250cm9sbGVyLnByb2plY3RNb2RhbCA9IG1vZGFsO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbE5hbWUgPT09IFwidG9kb1wiKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIudG9kb01vZGFsID0gbW9kYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9nZ2xlTW9kYWwodGFyZ2V0TW9kYWwpIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXRNb2RhbCBpcyBiZWluZyBzaG93biBvciBoaWRkZW5cclxuICAgIGNvbnN0IGlzU2hvd2luZyA9IHRhcmdldE1vZGFsICYmIHRhcmdldE1vZGFsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIjtcclxuXHJcbiAgICAvLyB0b2dnbGUgb3ZlcmxheSBmaXJzdFxyXG4gICAgdGhpcy5vdmVybGF5TW9kYWwuc3R5bGUuZGlzcGxheSA9IGlzU2hvd2luZyA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG5cclxuICAgIC8vIHRvZ2dsZSB0YXJnZXQgbW9kYWxcclxuICAgIGlmICh0YXJnZXRNb2RhbCkge1xyXG4gICAgICB0YXJnZXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gaXNTaG93aW5nID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgYWN0aXZlTW9kYWwgcmVmXHJcbiAgICAgIHRoaXMuYWN0aXZlTW9kYWwgPSBpc1Nob3dpbmcgPyBudWxsIDogdGFyZ2V0TW9kYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9fYnRuXCIpO1xyXG4gICAgLy8gdG9nZ2xlIHByb2plY3QgbW9kYWxcclxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy50b2dnbGVNb2RhbChET01Db250cm9sbGVyLnByb2plY3RNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX19idG5cIik7XHJcbiAgICAvLyB0b2dnbGUgdG9kbyBtb2RhbFxyXG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKERPTUNvbnRyb2xsZXIudG9kb01vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG92ZXJsYXkgbW9kYWwgZXZlbnQgbGlzdGVuZXJcclxuICAgIERPTUNvbnRyb2xsZXIub3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX292ZXJsYXlcIikgJiZcclxuICAgICAgICBET01Db250cm9sbGVyLmFjdGl2ZU1vZGFsXHJcbiAgICAgICkge1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlTW9kYWwoRE9NQ29udHJvbGxlci5hY3RpdmVNb2RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFjY2VwdEZvcm0oY2FsbGJhY2ssIGZvcm1TZWxlY3RvciwgbW9kYWwpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1TZWxlY3Rvcik7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSB7fTtcclxuICAgICAgbmV3IEZvcm1EYXRhKGZvcm0pLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICBmb3JtRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1EYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZm9ybURhdGEpO1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlTW9kYWwobW9kYWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVuZGVyIGFsbCBwcm9qZWN0c1xyXG4gIHN0YXRpYyByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0luc3RhbmNlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19wcm9qZWN0c1wiKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIHJlc2V0IHByb2plY3RzIGxpc3RcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0FyciA9IHByb2plY3RzSW5zdGFuY2UuZ2V0UHJvamVjdHMoKTtcclxuICAgIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gYDxoMz4ke3Byb2plY3QubmFtZX08L2gzPmA7XHJcbiAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QuaWQpO1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyVG9kb3NGb3JQcm9qZWN0KHByb2plY3QuaWQsIHByb2plY3RzSW5zdGFuY2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJUb2Rvc0ZvclByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0SWQsIHByb2plY3RzSW5zdGFuY2UpIHtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzSW5zdGFuY2UuZmluZFByb2plY3RCeUlkKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc19fY29udGFpbmVyXCIpO1xyXG4gICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gcmVzZXQgdG9kb3MgbGlzdFxyXG5cclxuICAgIGlmIChzZWxlY3RlZFByb2plY3QpIHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XHJcbiAgICAgICAgdG9kb0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGg0PiR7dG9kby50aXRsZX08L2g0PlxyXG4gICAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxwPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgPHA+UHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX08L3A+XHJcbiAgICAgICAgICA8IS0tIGFkZCBtb3JlIC0tPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFN0ZXAgMzogQWRkIFRvZG8gRm9ybSBIYW5kbGluZ1xyXG4vLyBTdGVwIDQ6IEFkanVzdCB0aGUgVG9kbyBGb3JtIFN1Ym1pc3Npb24gTG9naWNcclxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgaWYgKHRvZG8gaW5zdGFuY2VvZiBUb2RvKSB7XHJcbiAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTsgLy8gdGhpcyBpcyB0byB0aGUgcHJvamVjdCBvYmplY3RcclxuICAgICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlO1xyXG4gICAgICBQcm9qZWN0LnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCB0b2RvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlO1xyXG4gIHN0YXRpYyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0SW5zdGFuY2UpIHtcclxuICAgIC8vIGdldCBleGlzdGluZyBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZSwgZWxzZSBbXVxyXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgcHJvZWpjdCBleGlzdHMgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBleGlzdGluZ1Byb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJbnN0YW5jZS5pZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcHJvamVjdFxyXG4gICAgICBleGlzdGluZ1Byb2plY3RzW3Byb2plY3RJbmRleF0gPSBwcm9qZWN0SW5zdGFuY2U7IC8vIGRvIEkgbmVlZCB0byBzdHJpbmdpZnk/XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZGQgbmV3IHByb2plY3RcclxuICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3RJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvQnlJZChpZCkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb0J5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGFkZFByb2plY3QgYmUgaGVyZT9cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZmluZFByb2plY3RCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KGlkKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IGlkKTtcclxuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICBwcm9qZWN0SWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5LFxyXG4gICAgbm90ZXMsXHJcbiAgICBpc0NvbXBsZXRlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7IC8vIG9yZGVyYnkgcHJpb3JpdHlcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgICAvLyB0aGlzLmNoZWNrTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCB0aXRsZVxyXG4gIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGRlc2NyaXB0aW9uXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgZHVlRGF0ZVxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgcHJpb3JpdHlcclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgLy8gZWRpdCBub3Rlc1xyXG4gIHNldE5vdGVzKG5vdGVzKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGlzQ29tcGxldGVcclxuICBzZXRJc0NvbXBsZXRlKGlzQ29tcGxldGUpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XHJcbiAgfVxyXG5cclxuICAvLyBzaG91bGQgaSBhZGQgY2hlY2tsaXN0IGNsYXNzP1xyXG5cclxuICAvLyBhZGQgY2hlY2tsaXN0IGl0ZW1cclxuICBhZGRDaGVja2xpc3RJdGVtKGNoZWNrbGlzdEl0ZW0pIHtcclxuICAgIHRoaXMuY2hlY2tMaXN0LnB1c2goY2hlY2tsaXN0SXRlbSk7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGNoZWNrbGlzdCBpdGVtXHJcblxyXG4gIC8vIHJlbW92ZSBjaGVja2xpc3QgaXRlbVxyXG59XHJcbiIsIi8vIGV4cG9ydCBjbGFzcyBVdGlsIHtcclxuLy8gICBzdGF0aWMgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb3ApIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb3AsIEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcF0pKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vICAgLy8gRklYTUU6IEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyB3b3JraW5nIC8vIFVuY2F1Z2h0IFN5bnRheEVycm9yOiBcInVuZGVmaW5lZFwiIGlzIG5vdCB2YWxpZCBKU09OXHJcbi8vICAgc3RhdGljIGdldEZyb21Mb2NhbFN0b3JhZ2UocHJvcCkge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb3ApO1xyXG4vLyAgICAgaWYgKGRhdGEpIHtcclxuLy8gICAgICAgdGhpc1twcm9wXSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcCk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzL1RvZG9cIjtcclxuaW1wb3J0IHsgRE9NQ29udHJvbGxlciB9IGZyb20gXCIuL2NsYXNzZXMvRE9NQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4vLyBkZWZpbmluZyBwcm9qZWN0c1xyXG5jb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG4vLyBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RcclxuXHJcbmlmIChwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QodW5pcWlkKCksIFwiUHJvamVjdCAxXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAvLyBleGFtcGxlIHRvZG9cclxuICBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKFxyXG4gICAgdW5pcWlkKCksXHJcbiAgICBcIlRvZG8gMVwiLFxyXG4gICAgXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICBEYXRlLm5vdygpLCAvLyBkYXRlIHRvIHNvbWV0aGluZyBtb3JlIHJlYWRhYmxlXHJcbiAgICAxMCxcclxuICAgIFwiTm90ZXMuLi4gMVwiLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvLyBhZGRpbmcgdG9kby9wcm9qZWN0IHRvIHByb2plY3QvcHJvamVjdHNcclxuICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QxKTtcclxuICBwcm9qZWN0MS5hZGRUb2RvKHRvZG8xKTtcclxufVxyXG5cclxuLy8gcmVuZGVyIHBhZ2VcclxuRE9NQ29udHJvbGxlci5yZW5kZXJQYWdlKCk7XHJcbkRPTUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xyXG5cclxuLy8gYWRkIHByb2plY3RcclxuRE9NQ29udHJvbGxlci5hY2NlcHRGb3JtKFxyXG4gIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHVuaXFpZCgpLCBmb3JtRGF0YS5wcm9qZWN0X19uYW1lKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBET01Db250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcclxuICB9LFxyXG4gIFwiLnByb2plY3RfX2Zvcm1cIixcclxuICBET01Db250cm9sbGVyLnByb2plY3RNb2RhbFxyXG4pO1xyXG5cclxuLy8gYWRkIHRvZG9cclxuRE9NQ29udHJvbGxlci5hY2NlcHRGb3JtKFxyXG4gIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgLy8gaWYgKCFET01Db250cm9sbGVyLnNlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiTm8gcHJvamVjdCBzZWxlY3RlZFwiKTtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICB1bmlxaWQoKSxcclxuICAgICAgZm9ybURhdGEudG9kb19fbmFtZSxcclxuICAgICAgZm9ybURhdGEudG9kb19fZGVzY3JpcHRpb24sXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX2R1ZURhdGUsXHJcbiAgICAgIGZvcm1EYXRhLnRvZG9fX3ByaW9yaXR5LFxyXG4gICAgICBmb3JtRGF0YS50b2RvX19ub3RlcyxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0cy5maW5kUHJvamVjdEJ5SWQoXHJcbiAgICAgIERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWRcclxuICAgICk7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEuaWQsIHByb2plY3REYXRhLm5hbWUpO1xyXG4gICAgcHJvamVjdC50b2RvcyA9IHByb2plY3REYXRhLnRvZG9zO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpO1xyXG4gICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJUb2Rvc0ZvclByb2plY3QoXHJcbiAgICAgIERPTUNvbnRyb2xsZXIuc2VsZWN0ZWRQcm9qZWN0SWQsXHJcbiAgICAgIHByb2plY3RzXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXCIudG9kb19fZm9ybVwiLFxyXG4gIERPTUNvbnRyb2xsZXIudG9kb01vZGFsXHJcbik7XHJcblxyXG4vLyBUT0RPOiByZW1vdmUgcHJvamVjdFxyXG5cclxuLy8gVE9ETzogcmVtb3ZlIHRvZG9cclxuXHJcbi8vIFRPRE86IHN0eWxpbmdcclxuXHJcbi8vIFRPRE86IEN1cnJlbnRseSBJIGNhbiBvbmx5IGFkZCBUb2RvcyB3aGVuIGEgcHJvamVjdCBpcyBjbGlja2VkIG9uLi5cclxuLy8gaWYgSSBkb24ndCBjbGljayBvbiB0aGUgcHJvamVjdCBiZWZvcmVoYW5kLCBpdCBkb2Vzbid0IHdvcmtcclxuLy8gdG8gZml4IHRoaXMsIHdoZW4gSSBhZGQgbmV3IHByb2plY3QsIHRoZSBwcm9qZWN0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4vLyBhbmQgdGhlIHRvZG9zIHNob3VsZCBiZSByZW5kZXJlZCBmb3IgdGhhdCBwcm9qZWN0XHJcblxyXG4vLyBVcG9uIGZpcnN0IGxvYWQsIHRoZSBwYWdlIHNob3VsZCByZW5kZXIgdGhlIHByb2plY3RzIGFuZCB0aGUgZmlyc3QgcHJvamVjdCdzIHRvZG9zLlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=