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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav__project,
.todo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.nav__project:hover,
.todo-container:hover {
  background-color: bisque;
  cursor: pointer;
}

.nav__project:active,
.todo-container:active {
  background-color: rgb(212, 188, 159);
}

.nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  flex-direction: column;
}

/* STRUCTURE */
.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 16px;
  min-height: 100vh;
}

.content {
  background-color: green;
  display: flex;
  flex-direction: column;
}

/* MODAL */
.modal-hidden {
  display: none;
}

/* .modal-overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
} */

/* TODOS */
.todos-container {
  padding-top: 1rem;
}

.todo-header {
  padding-bottom: 0.5rem;
  padding-left: 8px;
}

/* BTNS */
.btn {
  cursor: pointer;
}

#add-todo-btn {
  order: 1;
  margin-top: auto;
}

.add-project-btn {
  order: 1;
  margin-top: auto;
}

/* DETAIL MODAL */
.detail-todo-container {
  display: flex;
  flex-direction: column;
}

.overlay {
  /*display: none;*/
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /*overflow: auto;*/
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.detail-todo-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;
}

.close {
  color: #333;
  position: absolute;
  right: 16px;
  top: 0;
  font-size: 28px;
  font-weight: 700;
}

.close:hover,
.close:focus {
  color: #aaa;
  text-decoration: none;
  cursor: pointer;
}

.close:active {
  color: #ff5454;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;AACf;;AAEA;;;;;;;;;GASG;;AAEH,UAAU;AACV;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,SAAS;AACT;EACE,eAAe;AACjB;;AAEA;EACE,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,QAAQ;EACR,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.nav__project,\r\n.todo-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n}\r\n\r\n.nav__project:hover,\r\n.todo-container:hover {\r\n  background-color: bisque;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav__project:active,\r\n.todo-container:active {\r\n  background-color: rgb(212, 188, 159);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* STRUCTURE */\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  gap: 16px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content {\r\n  background-color: green;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* MODAL */\r\n.modal-hidden {\r\n  display: none;\r\n}\r\n\r\n/* .modal-overlay {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n} */\r\n\r\n/* TODOS */\r\n.todos-container {\r\n  padding-top: 1rem;\r\n}\r\n\r\n.todo-header {\r\n  padding-bottom: 0.5rem;\r\n  padding-left: 8px;\r\n}\r\n\r\n/* BTNS */\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n\r\n#add-todo-btn {\r\n  order: 1;\r\n  margin-top: auto;\r\n}\r\n\r\n.add-project-btn {\r\n  order: 1;\r\n  margin-top: auto;\r\n}\r\n\r\n/* DETAIL MODAL */\r\n.detail-todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.overlay {\r\n  /*display: none;*/\r\n  position: fixed;\r\n  z-index: 10;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  /*overflow: auto;*/\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.detail-todo-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  position: relative;\r\n}\r\n\r\n.close {\r\n  color: #333;\r\n  position: absolute;\r\n  right: 16px;\r\n  top: 0;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #aaa;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.close:active {\r\n  color: #ff5454;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/controllers/AppController.js":
/*!**************************************************!*\
  !*** ./src/modules/controllers/AppController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppController: () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _TodoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Todo */ "./src/modules/models/Todo.js");
/* harmony import */ var _views_UIController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/UIController */ "./src/modules/views/UIController.js");





////////////////////////////////////////////


class AppController {
  constructor() {
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_0__.StorageController();
    this.ProjectController = new _ProjectController__WEBPACK_IMPORTED_MODULE_1__.ProjectController();
    this.TodoController = new _TodoController__WEBPACK_IMPORTED_MODULE_2__.TodoController();
    this.UIController = new _views_UIController__WEBPACK_IMPORTED_MODULE_5__.UIController();
  }

  init() {
    console.log("AppController init() called");

    // init new sample project
    let mySampleProj = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project("Hello");
    let mySampleProj1 = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project("Hello1");

    let currentExistingProjects = this.ProjectController.getProjects();

    if (currentExistingProjects.length > 0) {
      // do nothing
    } else {
      ///////////////////////////////////////////
      // add sample project
      this.ProjectController.addProject(mySampleProj); // projectObj
      this.ProjectController.addProject(mySampleProj1);
    }

    ///////////////////////////////////////////
    // delete sample project
    // this.ProjectController.deleteProject(currentExistingProjects[1].id); // projectId

    ///////////////////////////////////////////
    // edit sample project (ltshu1yz, "Hello")
    this.ProjectController.editProject("ltshu1yz", "HAHAsHA"); // projectId, newName

    ///////////////////////////////////////////
    // init new todo item
    const mySampleTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("Hey", "ltw6p5j1");
    const mySampleTodo2 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("todo1", "ltw6p5j1");
    const mySampleTodo3 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to123do213", "ltw9kuc8");
    const mySampleTodo4 = new _models_Todo__WEBPACK_IMPORTED_MODULE_4__.Todo("to8949do213", "ltw6p5j0");

    ///////////////////////////////////////////
    // Get All Todos (SEPARATE LOCAL STORAGE)
    // console.log(this.TodoController.getTodos());

    ///////////////////////////////////////////
    // Add Todo (SEPARATE LOCAL STORAGE)

    // this.TodoController.addTodo(mySampleTodo);
    // this.TodoController.addTodo(mySampleTodo2);
    // this.TodoController.addTodo(mySampleTodo3);
    // this.TodoController.addTodo(mySampleTodo4);
    ///////////////////////////////////////////
    // Get single todo
    // console.log(this.TodoController.getSingleTodo("ltswy9gs"));

    ///////////////////////////////////////////
    // delete(ltswx8it)
    // this.TodoController.removeTodoById("ltsxdltq");

    ///////////////////////////////////////////
    // update
    // this.TodoController.editTodoName("ltsxdltt", "this is EDITED");

    /* SEPARATOR */

    ///////////////////////////////////////////
    // Add Todo obj
    // this.TodoController.addTodoToProject(mySampleTodo, "ltshu1yz"); // todoObj, projectId

    ///////////////////////////////////////////
    // edit todo name
    // this.TodoController.editTodoName("THIS IS NEW! ", "ltshu1yz", "ltsj76av"); // newName, projectId, todoId

    ///////////////////////////////////////////
    // get todos with certain projectId
    // this.TodoController.getTodosFromProject("ltshu1yz"); // projectId

    ///////////////////////////////////////////
    // get single todo ("ltsj76av")
    // this.TodoController.getSingleTodoFromProject("ltshu1yz", "ltsj76av"); // projectId, todoId

    ///////////////////////////////////////////
    // delete todo from project
    // this.TodoController.deleteTodoFromProject("ltshu1yz", "ltsj76av");

    //https://chat.openai.com/c/d3b38d3d-66a3-4f04-8bcd-ceeb6ef0d054

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    ////////////////////////////////////////////
    // UI

    this.UIController.init(currentExistingProjects);
  }
}

// TODO: data tightly coupled with ui in UIController


/***/ }),

/***/ "./src/modules/controllers/ProjectController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/ProjectController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectController: () => (/* binding */ ProjectController)
/* harmony export */ });
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");



class ProjectController {
  constructor() {
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_0__.StorageController();
  }

  getProjects() {
    const projectsJSON = this.StorageController.get("projects");
    if (!projectsJSON) {
      return []; // return empty arr if no data in localStorage
    }
    try {
      // try because error might occur in parse
      const parsedProjects = JSON.parse(projectsJSON);

      // the below assures that it is an array
      return Array.isArray(parsedProjects)
        ? parsedProjects
        : parsedProjects
        ? [parsedProjects]
        : [];
    } catch (e) {
      // if error, return an array
      return [];
    }
  }

  getProject(projectId) {
    let projectArr = this.getProjects();
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].id === projectId) {
        return projectArr[i];
      }
    }
  }

  addProject(projectObj) {
    let projectsArr = this.getProjects();
    projectsArr.push(projectObj); // push received argument to projectsArr

    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    ); // overwrite projects with updatedArr in localStorage
  }

  editProject(projectId, name) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectsArr[i].id === projectId) {
        projectsArr[i].name = name;
      }
    }

    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    );
  }

  deleteProject(projectId) {
    let projectsArr = this.getProjects();
    for (let i = 0; i < projectsArr.length; i++) {
      if (projectId === projectsArr[i].id) {
        projectsArr.splice(i, 1);
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage(
      "projects",
      projectsArr
    );
  }

  getName(projectId) {
    let project = this.getProject(projectId);
    return project.name;
  }
}


/***/ }),

/***/ "./src/modules/controllers/StorageController.js":
/*!******************************************************!*\
  !*** ./src/modules/controllers/StorageController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageController: () => (/* binding */ StorageController)
/* harmony export */ });
class StorageController {
  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    return this.storage.setItem(key, value);
  }

  saveCurrentArrayToLocalStorage(key, arrayToSave) {
    this.set(key, JSON.stringify(arrayToSave));
  }
}


/***/ }),

/***/ "./src/modules/controllers/TodoController.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/TodoController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoController: () => (/* binding */ TodoController)
/* harmony export */ });
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _StorageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageController */ "./src/modules/controllers/StorageController.js");


class TodoController {
  constructor() {
    this.ProjectController = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__.ProjectController();
    this.StorageController = new _StorageController__WEBPACK_IMPORTED_MODULE_1__.StorageController();
    // this.StorageController = new StorageController();
  }

  getTodos() {
    const todosJSON = this.StorageController.get("todos");
    if (!todosJSON) {
      return [];
    }

    try {
      const parsedTodos = JSON.parse(todosJSON);
      // return array form no matter what
      return Array.isArray(parsedTodos)
        ? parsedTodos
        : parsedTodos
        ? [parsedTodos]
        : [];
    } catch (e) {
      return [];
    }
  }

  getTodosWithProjectId(projectId) {
    const todosArr = this.getTodos();
    let matchingArr = [];
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].projectId === projectId) {
        matchingArr.push(todosArr[i]);
      }
    }

    return matchingArr;
  }

  getSingleTodo(todoId) {
    const todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        return todosArr[i];
      }
    }
  }

  addTodo(todoObj) {
    let todosArr = this.getTodos();
    todosArr.push(todoObj);

    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  removeTodoById(todoId) {
    let todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr.splice(i, 1);
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editTodoName(todoId, name) {
    let todosArr = this.getTodos();

    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].name = name;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  // TODO: projId needed?
  editTodoWithValues(
    todoId,
    todoName,
    projId,
    description,
    dueDate,
    prio,
    isFinished
  ) {
    let todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].name = todoName;
        todosArr[i].description = description;
        todosArr[i].dueDate = dueDate;
        todosArr[i].priority = prio ?? "";
        todosArr[i].isFinished = isFinished;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }

  editIsFinished(todoId, checkedStatus) {
    let todosArr = this.getTodos();
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        todosArr[i].isFinished = checkedStatus;
        break;
      }
    }
    this.StorageController.saveCurrentArrayToLocalStorage("todos", todosArr);
  }
}


/***/ }),

/***/ "./src/modules/models/Project.js":
/*!***************************************!*\
  !*** ./src/modules/models/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Project {
  constructor(name) {
    this.name = name;
    this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    // this.todos = []; // hmm,,
  }

  // TODO: encapsulate name, id, todos (?)
  // getId() {
  //   return this.id;
  // }

  // getName() {
  //   return this.name;
  // }

  // setName(name) {
  //   return (this.name = name);
  // }
}


/***/ }),

/***/ "./src/modules/models/Todo.js":
/*!************************************!*\
  !*** ./src/modules/models/Todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Todo {
  constructor(
    name,
    projectId,
    description = "",
    dueDate = "",
    priority = "",
    isFinished = false
  ) {
    this.id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
    this.name = name;
    this.projectId = projectId;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isFinished = isFinished;
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Button.js":
/*!************************************************!*\
  !*** ./src/modules/views/Components/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");

class Button extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(textContent, onClick = null, dataId = null) {
    super();
    this.textContent = textContent;
    this.onClick = onClick;
    this.dataId = dataId;
  }

  renderComponent() {
    const button = document.createElement("button");
    button.textContent = this.textContent;
    button.classList.add("btn");
    if (this.dataId) {
      button.setAttribute("data-id", this.dataId);
    }

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.onClick) {
        this.onClick(e);
      }
    });

    return button;
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Component.js":
/*!***************************************************!*\
  !*** ./src/modules/views/Components/Component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
class Component {
  constructor() {
    if (new.target === Component) {
      throw new TypeError("Cannot construct Component instances directly.");
    }
  }

  renderComponent() {
    throw new Error("Method 'renderComponent()' must be implemented.");
  }

  attachEvent(element) {
    element.addEventListener("click", (e) => {
      console.log(
        `ID: ${element.getAttribute("data-id") ?? "no id"} was clicked`
      );
    });
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Modal.js":
/*!***********************************************!*\
  !*** ./src/modules/views/Components/Modal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIController */ "./src/modules/views/UIController.js");



class Modal extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(projectCallback) {
    super();
    this.projectCallback = projectCallback;
  }

  renderComponent(projectId) {
    const projectModal = document.createElement("div");
    projectModal.innerHTML = `
      <div class="modal-content">
        <form id="editProjectForm">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" required>
          <input type="hidden" id="projectId" name="projectId" ${
            projectId ? `data-id="${projectId}"` : ""
          }>
          <button type="submit">${projectId ? "Save changes" : "Add"}</button>
        </form>
      </div>
      `;

    projectModal.classList.add("project-form-container");
    projectModal.classList.add("modal-hidden");
    const closeButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();
    projectModal.querySelector(".modal-content").appendChild(closeButton);

    let navElement = document.querySelector(".nav");

    navElement.appendChild(projectModal);

    document
      .querySelector("#editProjectForm")
      .addEventListener("submit", (e) => this.handleSubmit(e)); // FIXME:
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    const projectId = formData.get("projectId");
    this.projectCallback(projectId, projectName); // FIXME:
    this.closeModal();
  }

  handleCloseButtonClick(e) {
    // close modal
    this.closeModal();
  }

  closeModal() {
    const projectModal = document.querySelector(".project-form-container");
    const modalInput = document.querySelector("#projectName");
    if (modalInput) {
      modalInput.value = "";
    }
    const modalHiddenProjectId = document.querySelector("#projectId");
    if (modalHiddenProjectId) {
      modalHiddenProjectId.value = "";
    }
    if (projectModal) {
      projectModal.classList.add("modal-hidden");
    }

    _UIController__WEBPACK_IMPORTED_MODULE_2__.UIController.isProjectModalOpen = false;
  }

  showModal() {
    let projectModal = document.querySelector(".project-form-container");

    if (!projectModal) {
      this.renderComponent();
      projectModal = document.querySelector(".project-form-container");
    }
    projectModal.classList.add("modal-overlay");
    projectModal.classList.remove("modal-hidden");

    _UIController__WEBPACK_IMPORTED_MODULE_2__.UIController.isProjectModalOpen = true;

    // focus input
    const inputEl = document.querySelector("#projectName");
    inputEl.focus;
    // console.log(inputEl);

    // const navElement = document.querySelector(".nav");
    // navElement.appendChild(projectModal);
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Navbar.js":
/*!************************************************!*\
  !*** ./src/modules/views/Components/Navbar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _TodoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoModal */ "./src/modules/views/Components/TodoModal.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controllers/TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Todo */ "./src/modules/views/Components/Todo.js");








class Navbar extends _Component__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
    this.ProjectController = new _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__.ProjectController();
    this.Modal = new _Modal__WEBPACK_IMPORTED_MODULE_3__.Modal();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_5__.TodoController();
    this.TodoComponent = new _Todo__WEBPACK_IMPORTED_MODULE_6__.TodoComponent();
    this.TodoModal = new _TodoModal__WEBPACK_IMPORTED_MODULE_4__.TodoModal();

    // to counter this.Modal == undefined
    this.handleProjectAddClick = this.handleProjectAddClick.bind(this);
  }

  renderComponent(projectsArr) {
    const navEl = document.querySelector(".nav");
    navEl.innerHTML = "";
    projectsArr.forEach((project) => {
      const projectNavDiv = document.createElement("div");
      projectNavDiv.classList.add("nav__project");
      projectNavDiv.setAttribute("data-id", project.id);
      const projectText = document.createElement("h3");

      const projectEditButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
        "edit",
        (e) => this.handleProjectEditClick(e),
        project.id
      ).renderComponent();

      // button close
      const projectCloseButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
        "x",
        () => this.handleProjectCloseClick(project.id),
        project.id
      ).renderComponent();
      // this.attachEvent(projectCloseButton);

      const projectButtonsDiv = document.createElement("div");

      projectNavDiv.appendChild(projectText);
      projectButtonsDiv.appendChild(projectEditButton);
      projectButtonsDiv.appendChild(projectCloseButton);
      projectNavDiv.appendChild(projectButtonsDiv);
      projectText.textContent = project.name;

      // navDiv click handling
      projectNavDiv.addEventListener("click", (e) =>
        this.handleProjectDivClick(e)
      );

      navEl.appendChild(projectNavDiv);
    });
    const addProjectButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button(
      "New Project+",
      this.handleProjectAddClick
    ).renderComponent();
    addProjectButton.classList.add("add-project-btn");
    navEl.appendChild(addProjectButton);
  }

  handleProjectDivClick(e) {
    // render all todos with the data-id

    let targetElement = e.target;
    while (targetElement != null && !targetElement.hasAttribute("data-id")) {
      targetElement = targetElement.parentElement;
    }

    const projectId = targetElement.getAttribute("data-id");
    const hiddenTodoInput = document.querySelector("#todo-projectId");
    hiddenTodoInput.value = projectId;

    // todoHeader.textContent = projectObj.name;
    const myTodosArr = this.TodoController.getTodosWithProjectId(projectId);

    this.TodoComponent.renderComponent(myTodosArr);
    this.Modal.closeModal();
    this.TodoModal.closeModal();

    const todoHeader = document.querySelector(".todo-header");
    const projectName = this.ProjectController.getName(projectId);
    todoHeader.textContent = projectName;
  }

  handleProjectEditClick(e) {
    const projectId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#projectId");
    const formInput = document.querySelector("#projectName");
    hiddenInput.value = projectId;
    const selectedProjectName =
      this.ProjectController.getProject(projectId).name;
    formInput.value = selectedProjectName;
    this.Modal.showModal();
    formInput.focus();
  }

  handleProjectAddClick() {
    this.Modal.showModal();
  }

  handleProjectCloseClick(projectId) {
    // TODO: add modal to confirm

    // delete project
    try {
      this.ProjectController.deleteProject(projectId);
      // remove from ui
      document.querySelector(`[data-id="${projectId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/views/Components/Todo.js":
/*!**********************************************!*\
  !*** ./src/modules/views/Components/Todo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _TodoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoModal */ "./src/modules/views/Components/TodoModal.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _TodoDetailModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TodoDetailModal */ "./src/modules/views/Components/TodoDetailModal.js");
/* harmony import */ var _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controllers/ProjectController */ "./src/modules/controllers/ProjectController.js");







class TodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.Modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal();
    this.TodoModal = new _TodoModal__WEBPACK_IMPORTED_MODULE_3__.TodoModal();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__.TodoController();
    this.TodoDetailModal = new _TodoDetailModal__WEBPACK_IMPORTED_MODULE_5__.TodoDetailModal();
    this.ProjectModal = new _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal();
    this.ProjectController = new _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_6__.ProjectController();
  }

  renderComponent(todosArr) {
    const content = document.querySelector("#content");
    // content.innerHTML = "";

    let todosContainer = document.querySelector("#todos-container");

    if (!todosContainer) {
      todosContainer = document.createElement("div");
      todosContainer.id = "todos-container";
      todosContainer.classList.add("todos-container");
      content.insertBefore(todosContainer, content.firstChild);
    } else {
      todosContainer.innerHTML = "";
    }

    const todoHeader = document.createElement("h1");
    todoHeader.textContent = "";
    todoHeader.classList.add("todo-header");

    todosContainer.appendChild(todoHeader);
    todosArr.forEach((todo) => {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");
      todoContainer.setAttribute("data-id", todo.id);
      todoContainer.setAttribute("data-projectId", todo.projectId);

      // finished checkbox
      const isFinishedCheckbox = document.createElement("input");
      isFinishedCheckbox.type = "checkbox";
      isFinishedCheckbox.classList.add("todoIsFinished");
      isFinishedCheckbox.setAttribute("data-id", todo.id);
      isFinishedCheckbox.checked = todo.isFinished;

      const todoName = document.createElement("p");
      todoName.textContent = todo.name;

      const todoEditButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(
        "edit",
        (e) => this.handleTodoEditClick(e),
        todo.id
      ).renderComponent();

      // button close
      const todoCloseButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(
        "x",
        () => this.handleTodoCloseClick(todo.id),
        todo.id
      ).renderComponent();

      const todoButtonsDiv = document.createElement("div");
      todoButtonsDiv.appendChild(todoEditButton);
      todoButtonsDiv.appendChild(todoCloseButton);

      todoContainer.appendChild(isFinishedCheckbox);
      todoContainer.appendChild(todoName);
      todoContainer.appendChild(todoButtonsDiv);
      todosContainer.appendChild(todoContainer);

      todoContainer.addEventListener("click", (e) => {
        this.handleTodoElementClick(e);
      });
    });

    if (!document.querySelector("#add-todo-btn")) {
      const addTodoButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("New Todo +", (e) =>
        this.handleTodoAddClick(e)
      ).renderComponent();
      addTodoButton.id = "add-todo-btn";
      // content.appendChild(addTodoButton);
      let todoContainerElement = document.querySelector(".todo-form-container");
      content.insertBefore(addTodoButton, todoContainerElement);
    }
  }

  handleTodoElementClick(e) {
    if (e.target.type === "checkbox") {
      const todoId = e.target.getAttribute("data-id");
      const checkedStatus = e.target.checked;
      console.log(checkedStatus);
      this.TodoController.editIsFinished(todoId, checkedStatus);

      return;
    }

    let targetElement = e.target;
    while (targetElement != null && !targetElement.hasAttribute("data-id")) {
      targetElement = targetElement.parentElement;
    }

    const todoId = targetElement.getAttribute("data-id");

    const todoFromStorage = this.TodoController.getSingleTodo(todoId);

    // Populate the input fields for TodoDetailModal
    const nameInput = document.querySelector("#todoDetailName");
    nameInput.value = todoFromStorage.name;
    const idInput = document.querySelector("#todoDetailId");
    idInput.value = todoFromStorage.id;

    const projId = document.querySelector("#todoDetailProjId");
    projId.value = todoFromStorage.projectId;

    const dueDateInput = document.querySelector("#todoDetailDueDate");
    dueDateInput.value = todoFromStorage.dueDate;

    const descriptionInput = document.querySelector("#todoDetailDesc");
    descriptionInput.value = todoFromStorage.description ?? "";

    const prioInputNodes = document.querySelectorAll(
      'input[name="todoDetailPrio"]'
    );
    this.setCheckedPriority(prioInputNodes, todoFromStorage.priority);

    const isFinishedInput = document.querySelector("#todoDetailIsFinished");
    isFinishedInput.checked = todoFromStorage.isFinished;

    this.TodoDetailModal.showModal();
    this.TodoModal.closeModal();
    this.ProjectModal.closeModal();
  }

  setCheckedPriority(prioNodes, storedPriority) {
    prioNodes.forEach((node) => {
      node.checked = node.value === storedPriority;
    });
  }

  handleTodoAddClick(e) {
    this.TodoModal.showModal();
  }

  handleTodoEditClick(e) {
    const todoId = e.target.getAttribute("data-id");

    const hiddenInput = document.querySelector("#todoId"); //
    const formInput = document.querySelector("#todoName");
    hiddenInput.value = todoId;
    const selectedTodoName = this.TodoController.getSingleTodo(todoId).name;

    formInput.value = selectedTodoName;
    this.TodoModal.showModal();
    formInput.focus();
  }

  handleTodoCloseClick(todoId) {
    try {
      this.TodoController.removeTodoById(todoId);
      document.querySelector(`[data-id="${todoId}"]`).remove();
    } catch (error) {
      console.log(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/views/Components/TodoDetailModal.js":
/*!*********************************************************!*\
  !*** ./src/modules/views/Components/TodoDetailModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoDetailModal: () => (/* binding */ TodoDetailModal)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");


class TodoDetailModal extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(todoCallback) {
    super();
    this.todoCallback = todoCallback;
  }

  renderComponent(todoId, projId) {
    const detailedModal = document.createElement("div");
    detailedModal.innerHTML = `
        <div class="detail-todo-content">
        <span class="close">&times;</span>
          <form id="detailTodoForm">
            <div class="detail-todo-container">
              <label for="todoDetailName">Todo Name:</label>
              <input type="text" id="todoDetailName" name="todoDetailName" required></input>
              <label for="todoDetailDueDate">Due: </label>
              <input type="date" id="todoDetailDueDate" name="todoDetailDueDate"></input>
              <label for="todoDetailDesc">Details</label>
              <textarea id="todoDetailDesc" name="todoDetailDesc"></textarea>
              <fieldset>
                <legend>Priority</legend>
                <div>
                  <input type="radio" name="todoDetailPrio" id="urgent" value="urgent" />
                  <label for="urgent">Urgent</label>
                </div>
                <div>
                  <input type="radio" name="todoDetailPrio" id="medium" value="medium" />
                  <label for="medium">Medium</label>
                </div>
                <div>
                  <input type="radio" name="todoDetailPrio" id="chill" value="chill" />
                  <label for="chill">Chill</label>
                </div>
              </fieldset>
              <div>
                <label for="todoDetailIsFinished">Is finished: </label>
                <input type="checkbox" id="todoDetailIsFinished" name="todoDetailIsFinished"/>
              </div>
              <input type="hidden" id="todoDetailId" name="todoDetailId" ${
                todoId ? `value="${todoId}"` : ""
              }></input>
              <input type="hidden" id="todoDetailProjId" name="todoDetailProjId"  ${
                projId ? `value="${projId}"` : ""
              }></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    `;

    detailedModal.classList.add("overlay");
    detailedModal.classList.add("modal-hidden");

    const bodyElement = document.querySelector("body");
    bodyElement.appendChild(detailedModal);

    document
      .querySelector("#detailTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const todoId = formData.get("todoDetailId");
    const todoName = formData.get("todoDetailName");
    const projId = formData.get("todoDetailProjId");
    const dueDate = formData.get("todoDetailDueDate");
    const description = formData.get("todoDetailDesc");
    const prio = formData.get("todoDetailPrio");
    let isFinished = formData.get("todoDetailIsFinished"); // true: on, false: null
    isFinished = isFinished === "on" ? true : false;

    this.todoCallback(
      todoId,
      todoName,
      projId,
      description,
      dueDate,
      prio,
      isFinished
    );
    // console.log(todoName, todoId, dueDate, description, prio);
    this.closeModal();
  }

  closeModal() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("modal-hidden");
  }

  showModal() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("modal-hidden");
  }
}


/***/ }),

/***/ "./src/modules/views/Components/TodoModal.js":
/*!***************************************************!*\
  !*** ./src/modules/views/Components/TodoModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoModal: () => (/* binding */ TodoModal)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/modules/views/Components/Component.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/modules/views/Components/Button.js");
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIController */ "./src/modules/views/UIController.js");



class TodoModal extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(todoCallback) {
    super();
    this.todoCallback = todoCallback;
  }

  renderComponent(todoId) {
    const todoModal = document.createElement("div");
    todoModal.innerHTML = `
      <div class="todoModal-content">
        <form id="editTodoForm">
          <label for="todoName">Todo Name:</label>
          <input type="text" id="todoName" name="todoName" required>
          <input type="hidden" id="todoId" name="todoId" ${
            todoId ? `value="${todoId}"` : ""
          }>
          <input type="hidden" id="todo-projectId" name="todo-projectId" ${
            projectId ? `value="${projectId}"` : ""
          }>
          <button type="submit">${todoId ? "Save changes" : "Add"}</button>
          
        </form>
      </div>
    `;
    todoModal.classList.add("todo-form-container");

    todoModal.classList.add("modal-hidden");

    const closeButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button("x", (e) =>
      this.handleCloseButtonClick(e)
    ).renderComponent();

    todoModal.querySelector(".todoModal-content").appendChild(closeButton);

    let contentElement = document.querySelector("#content");
    contentElement.appendChild(todoModal);

    document
      .querySelector("#editTodoForm")
      .addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("todoCallback is: ", this.todoCallback);
    const formData = new FormData(e.target);
    const todoName = formData.get("todoName");
    const todoId = formData.get("todoId");
    this.todoCallback(todoId, todoName);
    this.closeModal();
  }

  handleCloseButtonClick(e) {
    e.preventDefault();
    this.closeModal();
  }

  closeModal() {
    const todoModal = document.querySelector(".todo-form-container"); //
    const modalInput = document.querySelector("#todoName");
    if (modalInput) {
      modalInput.value = "";
    }
    const modalHiddenTodoId = document.querySelector("#todoId");
    if (modalHiddenTodoId) {
      modalHiddenTodoId.value = "";
    }

    if (todoModal) {
      todoModal.classList.add("modal-hidden");
      todoModal.classList.remove("modal-overlay");
    }

    _UIController__WEBPACK_IMPORTED_MODULE_2__.UIController.isTodoModalOpen = false;
  }

  showModal() {
    let todoModal = document.querySelector(".todo-form-container");

    if (!todoModal) {
      this.renderComponent();
      todoModal = document.querySelector(".todo-form-container");
    }

    todoModal.classList.add("modal-overlay");
    todoModal.classList.remove("modal-hidden");

    _UIController__WEBPACK_IMPORTED_MODULE_2__.UIController.isTodoModalOpen = true;
  }
}


/***/ }),

/***/ "./src/modules/views/UIController.js":
/*!*******************************************!*\
  !*** ./src/modules/views/UIController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIController: () => (/* binding */ UIController)
/* harmony export */ });
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Navbar */ "./src/modules/views/Components/Navbar.js");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Modal */ "./src/modules/views/Components/Modal.js");
/* harmony import */ var _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/ProjectController */ "./src/modules/controllers/ProjectController.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Project */ "./src/modules/models/Project.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/TodoController */ "./src/modules/controllers/TodoController.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Todo */ "./src/modules/models/Todo.js");
/* harmony import */ var _Components_TodoModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/TodoModal */ "./src/modules/views/Components/TodoModal.js");
/* harmony import */ var _Components_Todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Todo */ "./src/modules/views/Components/Todo.js");
/* harmony import */ var _Components_TodoDetailModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/TodoDetailModal */ "./src/modules/views/Components/TodoDetailModal.js");


// import projectController here?







class UIController {
  static isTodoModalOpen = false;
  static isProjectModalOpen = false;

  constructor() {
    this.Navbar = new _Components_Navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar();
    this.Modal = new _Components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal();
    this.ProjectController = new _controllers_ProjectController__WEBPACK_IMPORTED_MODULE_2__.ProjectController();
    this.TodoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_4__.TodoController();
    this.Todo = new _models_Todo__WEBPACK_IMPORTED_MODULE_5__.Todo();
    this.TodoModal = new _Components_TodoModal__WEBPACK_IMPORTED_MODULE_6__.TodoModal();
    this.TodoDetailModal = new _Components_TodoDetailModal__WEBPACK_IMPORTED_MODULE_8__.TodoDetailModal();
    this.TodoComponent = new _Components_Todo__WEBPACK_IMPORTED_MODULE_7__.TodoComponent();
  }

  init(projectsArr) {
    this.Navbar.renderComponent(projectsArr);
    this.initProjectModal();
    this.initTodoModal();
    this.initFirstDivClick();
    this.initTodoDetailModal();
    document.addEventListener("DOMContentLoaded", (e) => {
      this.initContentClickBehavior();
      this.initHeaderClickBehavior();
      this.initOverlayClickBehavior();
    });
  }

  initTodoDetailModal() {
    const todoDetailModal = new _Components_TodoDetailModal__WEBPACK_IMPORTED_MODULE_8__.TodoDetailModal(
      this.todoDetailCallback.bind(this)
    );
    todoDetailModal.renderComponent();
  }

  initProjectModal() {
    // render modal
    const modal = new _Components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal(this.projectModalCallback.bind(this));

    modal.renderComponent();
  }

  initOverlayClickBehavior() {
    const overlay = document.querySelector(".overlay");
    const detailModalContent = document.querySelector(".detail-todo-content");
    const closeBtn = document.querySelector(".close");
    overlay.addEventListener("click", (e) => {
      if (
        !detailModalContent.contains(e.target) ||
        closeBtn.contains(e.target)
      ) {
        this.closeTodoDetailModal();
      }
    });
  }

  closeTodoDetailModal() {
    this.TodoDetailModal.closeModal();
  }

  initHeaderClickBehavior() {
    const headerElement = document.querySelector(".header");
    // const navContainer = document.querySelector(".nav");
    const navItemElements = document.querySelectorAll(".nav__project");

    const projectFormContainer = document.querySelector(
      ".project-form-container"
    );

    // modal
    headerElement.addEventListener("click", (e) => {
      let isClickInsideNavItem = Array.from(navItemElements).some((element) =>
        element.contains(e.target)
      );
      if (
        // !navItemElement.contains(e.target) &&
        !isClickInsideNavItem &&
        !projectFormContainer.contains(e.target)
      ) {
        if (!UIController.isProjectModalOpen) {
          this.showProjectModal();
          const projectNameElement = document.querySelector("#projectName");
          projectNameElement.focus();
        } else {
          this.closeProjectModal();
        }
      }
    });
  }

  initContentClickBehavior() {
    const contentElement = document.querySelector("#content");
    const todosContainer = document.querySelector(".todos-container");
    const todoFormContainer = document.querySelector(".todo-form-container");

    contentElement.addEventListener("click", (e) => {
      if (
        !todosContainer.contains(e.target) &&
        !todoFormContainer.contains(e.target)
      ) {
        if (!UIController.isTodoModalOpen) {
          this.showTodoModal();
          const todoNameElement = document.querySelector("#todoName");
          todoNameElement.focus();
        } else {
          this.closeTodoModal();
        }
      }
    });
  }

  closeTodoModal() {
    this.TodoModal.closeModal();
  }
  closeProjectModal() {
    this.Modal.closeModal();
  }

  showTodoModal() {
    this.TodoModal.showModal();
    this.Modal.closeModal();
  }

  showProjectModal() {
    this.Modal.showModal();
    this.TodoModal.closeModal();
  }
  initTodoModal() {
    // render todoModal
    const todoModal = new _Components_TodoModal__WEBPACK_IMPORTED_MODULE_6__.TodoModal(this.todoModalCallback.bind(this));

    todoModal.renderComponent();
  }

  initFirstDivClick() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const myFirstNavDiv = document.querySelector(".nav__project");
      if (myFirstNavDiv) {
        myFirstNavDiv.click();
      }
    });
  }

  todoDetailCallback(
    todoId,
    todoName,
    projId,
    description,
    dueDate,
    prio,
    isFinished
  ) {
    this.TodoController.editTodoWithValues(
      todoId,
      todoName,
      projId,
      description,
      dueDate,
      prio,
      isFinished
    );
    const newTodoArr = this.TodoController.getTodosWithProjectId(projId);
    this.TodoComponent.renderComponent(newTodoArr);
  }

  projectModalCallback(projectId, projectName) {
    if (projectId === "") {
      const newProject = new _models_Project__WEBPACK_IMPORTED_MODULE_3__.Project(projectName);
      this.ProjectController.addProject(newProject);

      // rerender navbar
      const newProjectsArr = this.ProjectController.getProjects();
      this.Navbar.renderComponent(newProjectsArr);
    } else {
      this.ProjectController.editProject(projectId, projectName);

      // rerender navbar
      const newProjectsArr = this.ProjectController.getProjects();
      this.Navbar.renderComponent(newProjectsArr);
    }
  }

  todoModalCallback(todoId, todoName) {
    const projectId = document.querySelector("#todo-projectId").value;
    if (todoId === "") {
      // create new todo
      const newTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_5__.Todo(todoName, projectId);
      this.TodoController.addTodo(newTodo);

      // rerender todos
      const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
      this.TodoComponent.renderComponent(newTodoArr);
    } else {
      this.TodoController.editTodoName(todoId, todoName);

      // rerender todos
      const newTodoArr = this.TodoController.getTodosWithProjectId(projectId);
      this.TodoComponent.renderComponent(newTodoArr);
    }
  }
}


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
/* harmony import */ var _modules_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/controllers/AppController */ "./src/modules/controllers/AppController.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let app = new _modules_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__.AppController();
app.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkNBQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS3dDO0FBQ3hDO0FBQ08sOEJBQThCLGlEQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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YnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9TdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL1RvZG9Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvbW9kZWxzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9tb2RlbHMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL3ZpZXdzL0NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy92aWV3cy9Db21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvQ29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy92aWV3cy9Db21wb25lbnRzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy92aWV3cy9Db21wb25lbnRzL1RvZG9EZXRhaWxNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL3ZpZXdzL0NvbXBvbmVudHMvVG9kb01vZGFsLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvdmlld3MvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubmF2X19wcm9qZWN0LFxyXG4udG9kby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ubmF2X19wcm9qZWN0OmhvdmVyLFxyXG4udG9kby1jb250YWluZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZfX3Byb2plY3Q6YWN0aXZlLFxyXG4udG9kby1jb250YWluZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxODgsIDE1OSk7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogU1RSVUNUVVJFICovXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gIGdhcDogMTZweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogTU9EQUwgKi9cclxuLm1vZGFsLWhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogLm1vZGFsLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn0gKi9cclxuXHJcbi8qIFRPRE9TICovXHJcbi50b2Rvcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udG9kby1oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi8qIEJUTlMgKi9cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYWRkLXRvZG8tYnRuIHtcclxuICBvcmRlcjogMTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3QtYnRuIHtcclxuICBvcmRlcjogMTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4vKiBERVRBSUwgTU9EQUwgKi9cclxuLmRldGFpbC10b2RvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgLypkaXNwbGF5OiBub25lOyovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKm92ZXJmbG93OiBhdXRvOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLmRldGFpbC10b2RvLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiAxNSUgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZmY1NDU0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUgsVUFBVTtBQUNWO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19wcm9qZWN0LFxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9fcHJvamVjdDpob3ZlcixcXHJcXG4udG9kby1jb250YWluZXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19wcm9qZWN0OmFjdGl2ZSxcXHJcXG4udG9kby1jb250YWluZXI6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDE4OCwgMTU5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU1RSVUNUVVJFICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qIE1PREFMICovXFxyXFxuLm1vZGFsLWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubW9kYWwtb3ZlcmxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIFRPRE9TICovXFxyXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQlROUyAqL1xcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIERFVEFJTCBNT0RBTCAqL1xcclxcbi5kZXRhaWwtdG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIC8qZGlzcGxheTogbm9uZTsqL1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAvKm92ZXJmbG93OiBhdXRvOyovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtdG9kby1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTZweDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTphY3RpdmUge1xcclxcbiAgY29sb3I6ICNmZjU0NTQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiaW1wb3J0IHsgU3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9TdG9yYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuL1Byb2plY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSBcIi4vVG9kb0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL21vZGVscy9Ub2RvXCI7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gXCIuLi92aWV3cy9VSUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIgPSBuZXcgU3RvcmFnZUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVUlDb250cm9sbGVyID0gbmV3IFVJQ29udHJvbGxlcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXBwQ29udHJvbGxlciBpbml0KCkgY2FsbGVkXCIpO1xyXG5cclxuICAgIC8vIGluaXQgbmV3IHNhbXBsZSBwcm9qZWN0XHJcbiAgICBsZXQgbXlTYW1wbGVQcm9qID0gbmV3IFByb2plY3QoXCJIZWxsb1wiKTtcclxuICAgIGxldCBteVNhbXBsZVByb2oxID0gbmV3IFByb2plY3QoXCJIZWxsbzFcIik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRFeGlzdGluZ1Byb2plY3RzID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG5cclxuICAgIGlmIChjdXJyZW50RXhpc3RpbmdQcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgLy8gYWRkIHNhbXBsZSBwcm9qZWN0XHJcbiAgICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChteVNhbXBsZVByb2opOyAvLyBwcm9qZWN0T2JqXHJcbiAgICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChteVNhbXBsZVByb2oxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBkZWxldGUgc2FtcGxlIHByb2plY3RcclxuICAgIC8vIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZGVsZXRlUHJvamVjdChjdXJyZW50RXhpc3RpbmdQcm9qZWN0c1sxXS5pZCk7IC8vIHByb2plY3RJZFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGVkaXQgc2FtcGxlIHByb2plY3QgKGx0c2h1MXl6LCBcIkhlbGxvXCIpXHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmVkaXRQcm9qZWN0KFwibHRzaHUxeXpcIiwgXCJIQUhBc0hBXCIpOyAvLyBwcm9qZWN0SWQsIG5ld05hbWVcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBpbml0IG5ldyB0b2RvIGl0ZW1cclxuICAgIGNvbnN0IG15U2FtcGxlVG9kbyA9IG5ldyBUb2RvKFwiSGV5XCIsIFwibHR3NnA1ajFcIik7XHJcbiAgICBjb25zdCBteVNhbXBsZVRvZG8yID0gbmV3IFRvZG8oXCJ0b2RvMVwiLCBcImx0dzZwNWoxXCIpO1xyXG4gICAgY29uc3QgbXlTYW1wbGVUb2RvMyA9IG5ldyBUb2RvKFwidG8xMjNkbzIxM1wiLCBcImx0dzlrdWM4XCIpO1xyXG4gICAgY29uc3QgbXlTYW1wbGVUb2RvNCA9IG5ldyBUb2RvKFwidG84OTQ5ZG8yMTNcIiwgXCJsdHc2cDVqMFwiKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBHZXQgQWxsIFRvZG9zIChTRVBBUkFURSBMT0NBTCBTVE9SQUdFKVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5Ub2RvQ29udHJvbGxlci5nZXRUb2RvcygpKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBBZGQgVG9kbyAoU0VQQVJBVEUgTE9DQUwgU1RPUkFHRSlcclxuXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmFkZFRvZG8obXlTYW1wbGVUb2RvKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG8yKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG8zKTtcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhteVNhbXBsZVRvZG80KTtcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEdldCBzaW5nbGUgdG9kb1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5Ub2RvQ29udHJvbGxlci5nZXRTaW5nbGVUb2RvKFwibHRzd3k5Z3NcIikpO1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGRlbGV0ZShsdHN3eDhpdClcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIucmVtb3ZlVG9kb0J5SWQoXCJsdHN4ZGx0cVwiKTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyB1cGRhdGVcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuZWRpdFRvZG9OYW1lKFwibHRzeGRsdHRcIiwgXCJ0aGlzIGlzIEVESVRFRFwiKTtcclxuXHJcbiAgICAvKiBTRVBBUkFUT1IgKi9cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBBZGQgVG9kbyBvYmpcclxuICAgIC8vIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kb1RvUHJvamVjdChteVNhbXBsZVRvZG8sIFwibHRzaHUxeXpcIik7IC8vIHRvZG9PYmosIHByb2plY3RJZFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGVkaXQgdG9kbyBuYW1lXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmVkaXRUb2RvTmFtZShcIlRISVMgSVMgTkVXISBcIiwgXCJsdHNodTF5elwiLCBcImx0c2o3NmF2XCIpOyAvLyBuZXdOYW1lLCBwcm9qZWN0SWQsIHRvZG9JZFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGdldCB0b2RvcyB3aXRoIGNlcnRhaW4gcHJvamVjdElkXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zRnJvbVByb2plY3QoXCJsdHNodTF5elwiKTsgLy8gcHJvamVjdElkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZ2V0IHNpbmdsZSB0b2RvIChcImx0c2o3NmF2XCIpXHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG9Gcm9tUHJvamVjdChcImx0c2h1MXl6XCIsIFwibHRzajc2YXZcIik7IC8vIHByb2plY3RJZCwgdG9kb0lkXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZGVsZXRlIHRvZG8gZnJvbSBwcm9qZWN0XHJcbiAgICAvLyB0aGlzLlRvZG9Db250cm9sbGVyLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdChcImx0c2h1MXl6XCIsIFwibHRzajc2YXZcIik7XHJcblxyXG4gICAgLy9odHRwczovL2NoYXQub3BlbmFpLmNvbS9jL2QzYjM4ZDNkLTY2YTMtNGYwNC04YmNkLWNlZWI2ZWYwZDA1NFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIFVJXHJcblxyXG4gICAgdGhpcy5VSUNvbnRyb2xsZXIuaW5pdChjdXJyZW50RXhpc3RpbmdQcm9qZWN0cyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUT0RPOiBkYXRhIHRpZ2h0bHkgY291cGxlZCB3aXRoIHVpIGluIFVJQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgeyBTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL1N0b3JhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vbW9kZWxzL1Byb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyID0gbmV3IFN0b3JhZ2VDb250cm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuZ2V0KFwicHJvamVjdHNcIik7XHJcbiAgICBpZiAoIXByb2plY3RzSlNPTikge1xyXG4gICAgICByZXR1cm4gW107IC8vIHJldHVybiBlbXB0eSBhcnIgaWYgbm8gZGF0YSBpbiBsb2NhbFN0b3JhZ2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIHRyeSBiZWNhdXNlIGVycm9yIG1pZ2h0IG9jY3VyIGluIHBhcnNlXHJcbiAgICAgIGNvbnN0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShwcm9qZWN0c0pTT04pO1xyXG5cclxuICAgICAgLy8gdGhlIGJlbG93IGFzc3VyZXMgdGhhdCBpdCBpcyBhbiBhcnJheVxyXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWRQcm9qZWN0cylcclxuICAgICAgICA/IHBhcnNlZFByb2plY3RzXHJcbiAgICAgICAgOiBwYXJzZWRQcm9qZWN0c1xyXG4gICAgICAgID8gW3BhcnNlZFByb2plY3RzXVxyXG4gICAgICAgIDogW107XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIGlmIGVycm9yLCByZXR1cm4gYW4gYXJyYXlcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgIGxldCBwcm9qZWN0QXJyID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0QXJyW2ldLmlkID09PSBwcm9qZWN0SWQpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdEFycltpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0T2JqKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnIgPSB0aGlzLmdldFByb2plY3RzKCk7XHJcbiAgICBwcm9qZWN0c0Fyci5wdXNoKHByb2plY3RPYmopOyAvLyBwdXNoIHJlY2VpdmVkIGFyZ3VtZW50IHRvIHByb2plY3RzQXJyXHJcblxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXHJcbiAgICAgIFwicHJvamVjdHNcIixcclxuICAgICAgcHJvamVjdHNBcnJcclxuICAgICk7IC8vIG92ZXJ3cml0ZSBwcm9qZWN0cyB3aXRoIHVwZGF0ZWRBcnIgaW4gbG9jYWxTdG9yYWdlXHJcbiAgfVxyXG5cclxuICBlZGl0UHJvamVjdChwcm9qZWN0SWQsIG5hbWUpIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RzQXJyW2ldLmlkID09PSBwcm9qZWN0SWQpIHtcclxuICAgICAgICBwcm9qZWN0c0FycltpXS5uYW1lID0gbmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKFxyXG4gICAgICBcInByb2plY3RzXCIsXHJcbiAgICAgIHByb2plY3RzQXJyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgIGxldCBwcm9qZWN0c0FyciA9IHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHByb2plY3RJZCA9PT0gcHJvamVjdHNBcnJbaV0uaWQpIHtcclxuICAgICAgICBwcm9qZWN0c0Fyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKFxyXG4gICAgICBcInByb2plY3RzXCIsXHJcbiAgICAgIHByb2plY3RzQXJyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZShwcm9qZWN0SWQpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgICByZXR1cm4gcHJvamVjdC5uYW1lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3RvcmFnZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuICB9XHJcblxyXG4gIGdldChrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gIH1cclxuXHJcbiAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShrZXksIGFycmF5VG9TYXZlKSB7XHJcbiAgICB0aGlzLnNldChrZXksIEpTT04uc3RyaW5naWZ5KGFycmF5VG9TYXZlKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgU3RvcmFnZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9TdG9yYWdlQ29udHJvbGxlclwiO1xyXG5leHBvcnQgY2xhc3MgVG9kb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlciA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlciA9IG5ldyBTdG9yYWdlQ29udHJvbGxlcigpO1xyXG4gICAgLy8gdGhpcy5TdG9yYWdlQ29udHJvbGxlciA9IG5ldyBTdG9yYWdlQ29udHJvbGxlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICBjb25zdCB0b2Rvc0pTT04gPSB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLmdldChcInRvZG9zXCIpO1xyXG4gICAgaWYgKCF0b2Rvc0pTT04pIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFRvZG9zID0gSlNPTi5wYXJzZSh0b2Rvc0pTT04pO1xyXG4gICAgICAvLyByZXR1cm4gYXJyYXkgZm9ybSBubyBtYXR0ZXIgd2hhdFxyXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWRUb2RvcylcclxuICAgICAgICA/IHBhcnNlZFRvZG9zXHJcbiAgICAgICAgOiBwYXJzZWRUb2Rvc1xyXG4gICAgICAgID8gW3BhcnNlZFRvZG9zXVxyXG4gICAgICAgIDogW107XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgbGV0IG1hdGNoaW5nQXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0b2Rvc0FycltpXS5wcm9qZWN0SWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgIG1hdGNoaW5nQXJyLnB1c2godG9kb3NBcnJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoaW5nQXJyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlVG9kbyh0b2RvSWQpIHtcclxuICAgIGNvbnN0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIHJldHVybiB0b2Rvc0FycltpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvT2JqKSB7XHJcbiAgICBsZXQgdG9kb3NBcnIgPSB0aGlzLmdldFRvZG9zKCk7XHJcbiAgICB0b2Rvc0Fyci5wdXNoKHRvZG9PYmopO1xyXG5cclxuICAgIHRoaXMuU3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUN1cnJlbnRBcnJheVRvTG9jYWxTdG9yYWdlKFwidG9kb3NcIiwgdG9kb3NBcnIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG9kb0J5SWQodG9kb0lkKSB7XHJcbiAgICBsZXQgdG9kb3NBcnIgPSB0aGlzLmdldFRvZG9zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIHRvZG9zQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5TdG9yYWdlQ29udHJvbGxlci5zYXZlQ3VycmVudEFycmF5VG9Mb2NhbFN0b3JhZ2UoXCJ0b2Rvc1wiLCB0b2Rvc0Fycik7XHJcbiAgfVxyXG5cclxuICBlZGl0VG9kb05hbWUodG9kb0lkLCBuYW1lKSB7XHJcbiAgICBsZXQgdG9kb3NBcnIgPSB0aGlzLmdldFRvZG9zKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcInRvZG9zXCIsIHRvZG9zQXJyKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHByb2pJZCBuZWVkZWQ/XHJcbiAgZWRpdFRvZG9XaXRoVmFsdWVzKFxyXG4gICAgdG9kb0lkLFxyXG4gICAgdG9kb05hbWUsXHJcbiAgICBwcm9qSWQsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvLFxyXG4gICAgaXNGaW5pc2hlZFxyXG4gICkge1xyXG4gICAgbGV0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLm5hbWUgPSB0b2RvTmFtZTtcclxuICAgICAgICB0b2Rvc0FycltpXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLnByaW9yaXR5ID0gcHJpbyA/PyBcIlwiO1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLmlzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcInRvZG9zXCIsIHRvZG9zQXJyKTtcclxuICB9XHJcblxyXG4gIGVkaXRJc0ZpbmlzaGVkKHRvZG9JZCwgY2hlY2tlZFN0YXR1cykge1xyXG4gICAgbGV0IHRvZG9zQXJyID0gdGhpcy5nZXRUb2RvcygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodG9kb3NBcnJbaV0uaWQgPT09IHRvZG9JZCkge1xyXG4gICAgICAgIHRvZG9zQXJyW2ldLmlzRmluaXNoZWQgPSBjaGVja2VkU3RhdHVzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLlN0b3JhZ2VDb250cm9sbGVyLnNhdmVDdXJyZW50QXJyYXlUb0xvY2FsU3RvcmFnZShcInRvZG9zXCIsIHRvZG9zQXJyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaWQgPSB1bmlxaWQoKTtcclxuICAgIC8vIHRoaXMudG9kb3MgPSBbXTsgLy8gaG1tLCxcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGVuY2Fwc3VsYXRlIG5hbWUsIGlkLCB0b2RvcyAoPylcclxuICAvLyBnZXRJZCgpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmlkO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0TmFtZSgpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzZXROYW1lKG5hbWUpIHtcclxuICAvLyAgIHJldHVybiAodGhpcy5uYW1lID0gbmFtZSk7XHJcbiAgLy8gfVxyXG59XHJcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIHByb2plY3RJZCxcclxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcclxuICAgIGR1ZURhdGUgPSBcIlwiLFxyXG4gICAgcHJpb3JpdHkgPSBcIlwiLFxyXG4gICAgaXNGaW5pc2hlZCA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdW5pcWlkKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5pc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHRleHRDb250ZW50LCBvbkNsaWNrID0gbnVsbCwgZGF0YUlkID0gbnVsbCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICB0aGlzLmRhdGFJZCA9IGRhdGFJZDtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgICBpZiAodGhpcy5kYXRhSWQpIHtcclxuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGhpcy5kYXRhSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMub25DbGljaykge1xyXG4gICAgICAgIHRoaXMub25DbGljayhlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29uc3RydWN0IENvbXBvbmVudCBpbnN0YW5jZXMgZGlyZWN0bHkuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcG9uZW50KCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kICdyZW5kZXJDb21wb25lbnQoKScgbXVzdCBiZSBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hFdmVudChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgSUQ6ICR7ZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID8/IFwibm8gaWRcIn0gd2FzIGNsaWNrZWRgXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vVUlDb250cm9sbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvamVjdENhbGxiYWNrKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wcm9qZWN0Q2FsbGJhY2sgPSBwcm9qZWN0Q2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wb25lbnQocHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdE1vZGFsLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8Zm9ybSBpZD1cImVkaXRQcm9qZWN0Rm9ybVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwicHJvamVjdElkXCIgbmFtZT1cInByb2plY3RJZFwiICR7XHJcbiAgICAgICAgICAgIHByb2plY3RJZCA/IGBkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCJgIDogXCJcIlxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiR7cHJvamVjdElkID8gXCJTYXZlIGNoYW5nZXNcIiA6IFwiQWRkXCJ9PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybS1jb250YWluZXJcIik7XHJcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhpZGRlblwiKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihcInhcIiwgKGUpID0+XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2xvc2VCdXR0b25DbGljayhlKVxyXG4gICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgIHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICAgIGxldCBuYXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcblxyXG4gICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWwpO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQcm9qZWN0Rm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSkpOyAvLyBGSVhNRTpcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm1EYXRhLmdldChcInByb2plY3ROYW1lXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdElkID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdElkXCIpO1xyXG4gICAgdGhpcy5wcm9qZWN0Q2FsbGJhY2socHJvamVjdElkLCBwcm9qZWN0TmFtZSk7IC8vIEZJWE1FOlxyXG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKGUpIHtcclxuICAgIC8vIGNsb3NlIG1vZGFsXHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBtb2RhbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcclxuICAgIGlmIChtb2RhbElucHV0KSB7XHJcbiAgICAgIG1vZGFsSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbW9kYWxIaWRkZW5Qcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJZFwiKTtcclxuICAgIGlmIChtb2RhbEhpZGRlblByb2plY3RJZCkge1xyXG4gICAgICBtb2RhbEhpZGRlblByb2plY3RJZC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvamVjdE1vZGFsKSB7XHJcbiAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFVJQ29udHJvbGxlci5pc1Byb2plY3RNb2RhbE9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCgpIHtcclxuICAgIGxldCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jb250YWluZXJcIik7XHJcblxyXG4gICAgaWYgKCFwcm9qZWN0TW9kYWwpIHtcclxuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgICAgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1oaWRkZW5cIik7XHJcblxyXG4gICAgVUlDb250cm9sbGVyLmlzUHJvamVjdE1vZGFsT3BlbiA9IHRydWU7XHJcblxyXG4gICAgLy8gZm9jdXMgaW5wdXRcclxuICAgIGNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xyXG4gICAgaW5wdXRFbC5mb2N1cztcclxuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0RWwpO1xyXG5cclxuICAgIC8vIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgIC8vIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCB7IFRvZG9Nb2RhbCB9IGZyb20gXCIuL1RvZG9Nb2RhbFwiO1xyXG5pbXBvcnQgeyBUb2RvQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vVG9kb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlciA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5Nb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgdGhpcy5Ub2RvQ29udHJvbGxlciA9IG5ldyBUb2RvQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5Ub2RvQ29tcG9uZW50ID0gbmV3IFRvZG9Db21wb25lbnQoKTtcclxuICAgIHRoaXMuVG9kb01vZGFsID0gbmV3IFRvZG9Nb2RhbCgpO1xyXG5cclxuICAgIC8vIHRvIGNvdW50ZXIgdGhpcy5Nb2RhbCA9PSB1bmRlZmluZWRcclxuICAgIHRoaXMuaGFuZGxlUHJvamVjdEFkZENsaWNrID0gdGhpcy5oYW5kbGVQcm9qZWN0QWRkQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudChwcm9qZWN0c0Fycikge1xyXG4gICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgIG5hdkVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0TmF2RGl2LmNsYXNzTGlzdC5hZGQoXCJuYXZfX3Byb2plY3RcIik7XHJcbiAgICAgIHByb2plY3ROYXZEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkKTtcclxuICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RWRpdEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgXCJlZGl0XCIsXHJcbiAgICAgICAgKGUpID0+IHRoaXMuaGFuZGxlUHJvamVjdEVkaXRDbGljayhlKSxcclxuICAgICAgICBwcm9qZWN0LmlkXHJcbiAgICAgICkucmVuZGVyQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAvLyBidXR0b24gY2xvc2VcclxuICAgICAgY29uc3QgcHJvamVjdENsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICBcInhcIixcclxuICAgICAgICAoKSA9PiB0aGlzLmhhbmRsZVByb2plY3RDbG9zZUNsaWNrKHByb2plY3QuaWQpLFxyXG4gICAgICAgIHByb2plY3QuaWRcclxuICAgICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuICAgICAgLy8gdGhpcy5hdHRhY2hFdmVudChwcm9qZWN0Q2xvc2VCdXR0b24pO1xyXG5cclxuICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgcHJvamVjdE5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XHJcbiAgICAgIHByb2plY3RCdXR0b25zRGl2LmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnV0dG9uKTtcclxuICAgICAgcHJvamVjdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdENsb3NlQnV0dG9uKTtcclxuICAgICAgcHJvamVjdE5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uc0Rpdik7XHJcbiAgICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgICAgLy8gbmF2RGl2IGNsaWNrIGhhbmRsaW5nXHJcbiAgICAgIHByb2plY3ROYXZEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvamVjdERpdkNsaWNrKGUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBuYXZFbC5hcHBlbmRDaGlsZChwcm9qZWN0TmF2RGl2KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgIFwiTmV3IFByb2plY3QrXCIsXHJcbiAgICAgIHRoaXMuaGFuZGxlUHJvamVjdEFkZENsaWNrXHJcbiAgICApLnJlbmRlckNvbXBvbmVudCgpO1xyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gICAgbmF2RWwuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9qZWN0RGl2Q2xpY2soZSkge1xyXG4gICAgLy8gcmVuZGVyIGFsbCB0b2RvcyB3aXRoIHRoZSBkYXRhLWlkXHJcblxyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIHdoaWxlICh0YXJnZXRFbGVtZW50ICE9IG51bGwgJiYgIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1pZFwiKSkge1xyXG4gICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RJZCA9IHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgIGNvbnN0IGhpZGRlblRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcm9qZWN0SWRcIik7XHJcbiAgICBoaWRkZW5Ub2RvSW5wdXQudmFsdWUgPSBwcm9qZWN0SWQ7XHJcblxyXG4gICAgLy8gdG9kb0hlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RPYmoubmFtZTtcclxuICAgIGNvbnN0IG15VG9kb3NBcnIgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qZWN0SWQpO1xyXG5cclxuICAgIHRoaXMuVG9kb0NvbXBvbmVudC5yZW5kZXJDb21wb25lbnQobXlUb2Rvc0Fycik7XHJcbiAgICB0aGlzLk1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICAgIHRoaXMuVG9kb01vZGFsLmNsb3NlTW9kYWwoKTtcclxuXHJcbiAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXROYW1lKHByb2plY3RJZCk7XHJcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9qZWN0RWRpdENsaWNrKGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJZFwiKTtcclxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XHJcbiAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdE5hbWUgPVxyXG4gICAgICB0aGlzLlByb2plY3RDb250cm9sbGVyLmdldFByb2plY3QocHJvamVjdElkKS5uYW1lO1xyXG4gICAgZm9ybUlucHV0LnZhbHVlID0gc2VsZWN0ZWRQcm9qZWN0TmFtZTtcclxuICAgIHRoaXMuTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICBmb3JtSW5wdXQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByb2plY3RBZGRDbGljaygpIHtcclxuICAgIHRoaXMuTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcm9qZWN0Q2xvc2VDbGljayhwcm9qZWN0SWQpIHtcclxuICAgIC8vIFRPRE86IGFkZCBtb2RhbCB0byBjb25maXJtXHJcblxyXG4gICAgLy8gZGVsZXRlIHByb2plY3RcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgICAvLyByZW1vdmUgZnJvbSB1aVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cHJvamVjdElkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHsgVG9kb01vZGFsIH0gZnJvbSBcIi4vVG9kb01vZGFsXCI7XHJcbmltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL1RvZG9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRvZG9EZXRhaWxNb2RhbCB9IGZyb20gXCIuL1RvZG9EZXRhaWxNb2RhbFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5Nb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwgPSBuZXcgVG9kb01vZGFsKCk7XHJcbiAgICB0aGlzLlRvZG9Db250cm9sbGVyID0gbmV3IFRvZG9Db250cm9sbGVyKCk7XHJcbiAgICB0aGlzLlRvZG9EZXRhaWxNb2RhbCA9IG5ldyBUb2RvRGV0YWlsTW9kYWwoKTtcclxuICAgIHRoaXMuUHJvamVjdE1vZGFsID0gbmV3IE1vZGFsKCk7XHJcbiAgICB0aGlzLlByb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wb25lbnQodG9kb3NBcnIpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICAvLyBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvcy1jb250YWluZXJcIik7XHJcblxyXG4gICAgaWYgKCF0b2Rvc0NvbnRhaW5lcikge1xyXG4gICAgICB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9zQ29udGFpbmVyLmlkID0gXCJ0b2Rvcy1jb250YWluZXJcIjtcclxuICAgICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9zLWNvbnRhaW5lclwiKTtcclxuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUodG9kb3NDb250YWluZXIsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taGVhZGVyXCIpO1xyXG5cclxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xyXG4gICAgdG9kb3NBcnIuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XHJcbiAgICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0b2RvLmlkKTtcclxuICAgICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJZFwiLCB0b2RvLnByb2plY3RJZCk7XHJcblxyXG4gICAgICAvLyBmaW5pc2hlZCBjaGVja2JveFxyXG4gICAgICBjb25zdCBpc0ZpbmlzaGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlzRmluaXNoZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICBpc0ZpbmlzaGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRvZG9Jc0ZpbmlzaGVkXCIpO1xyXG4gICAgICBpc0ZpbmlzaGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0b2RvLmlkKTtcclxuICAgICAgaXNGaW5pc2hlZENoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmlzRmluaXNoZWQ7XHJcblxyXG4gICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICBcImVkaXRcIixcclxuICAgICAgICAoZSkgPT4gdGhpcy5oYW5kbGVUb2RvRWRpdENsaWNrKGUpLFxyXG4gICAgICAgIHRvZG8uaWRcclxuICAgICAgKS5yZW5kZXJDb21wb25lbnQoKTtcclxuXHJcbiAgICAgIC8vIGJ1dHRvbiBjbG9zZVxyXG4gICAgICBjb25zdCB0b2RvQ2xvc2VCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIFwieFwiLFxyXG4gICAgICAgICgpID0+IHRoaXMuaGFuZGxlVG9kb0Nsb3NlQ2xpY2sodG9kby5pZCksXHJcbiAgICAgICAgdG9kby5pZFxyXG4gICAgICApLnJlbmRlckNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgY29uc3QgdG9kb0J1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0b2RvQnV0dG9uc0Rpdi5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XHJcbiAgICAgIHRvZG9CdXR0b25zRGl2LmFwcGVuZENoaWxkKHRvZG9DbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGlzRmluaXNoZWRDaGVja2JveCk7XHJcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xyXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CdXR0b25zRGl2KTtcclxuICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XHJcblxyXG4gICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVG9kb0VsZW1lbnRDbGljayhlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tYnRuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBuZXcgQnV0dG9uKFwiTmV3IFRvZG8gK1wiLCAoZSkgPT5cclxuICAgICAgICB0aGlzLmhhbmRsZVRvZG9BZGRDbGljayhlKVxyXG4gICAgICApLnJlbmRlckNvbXBvbmVudCgpO1xyXG4gICAgICBhZGRUb2RvQnV0dG9uLmlkID0gXCJhZGQtdG9kby1idG5cIjtcclxuICAgICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcclxuICAgICAgbGV0IHRvZG9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWZvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICBjb250ZW50Lmluc2VydEJlZm9yZShhZGRUb2RvQnV0dG9uLCB0b2RvQ29udGFpbmVyRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvRWxlbWVudENsaWNrKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgICAgY29uc3QgY2hlY2tlZFN0YXR1cyA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWRTdGF0dXMpO1xyXG4gICAgICB0aGlzLlRvZG9Db250cm9sbGVyLmVkaXRJc0ZpbmlzaGVkKHRvZG9JZCwgY2hlY2tlZFN0YXR1cyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIHdoaWxlICh0YXJnZXRFbGVtZW50ICE9IG51bGwgJiYgIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1pZFwiKSkge1xyXG4gICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZG9JZCA9IHRhcmdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuXHJcbiAgICBjb25zdCB0b2RvRnJvbVN0b3JhZ2UgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG8odG9kb0lkKTtcclxuXHJcbiAgICAvLyBQb3B1bGF0ZSB0aGUgaW5wdXQgZmllbGRzIGZvciBUb2RvRGV0YWlsTW9kYWxcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0RldGFpbE5hbWVcIik7XHJcbiAgICBuYW1lSW5wdXQudmFsdWUgPSB0b2RvRnJvbVN0b3JhZ2UubmFtZTtcclxuICAgIGNvbnN0IGlkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXRhaWxJZFwiKTtcclxuICAgIGlkSW5wdXQudmFsdWUgPSB0b2RvRnJvbVN0b3JhZ2UuaWQ7XHJcblxyXG4gICAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGV0YWlsUHJvaklkXCIpO1xyXG4gICAgcHJvaklkLnZhbHVlID0gdG9kb0Zyb21TdG9yYWdlLnByb2plY3RJZDtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXRhaWxEdWVEYXRlXCIpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kb0Zyb21TdG9yYWdlLmR1ZURhdGU7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0RldGFpbERlc2NcIik7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kb0Zyb21TdG9yYWdlLmRlc2NyaXB0aW9uID8/IFwiXCI7XHJcblxyXG4gICAgY29uc3QgcHJpb0lucHV0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnaW5wdXRbbmFtZT1cInRvZG9EZXRhaWxQcmlvXCJdJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0Q2hlY2tlZFByaW9yaXR5KHByaW9JbnB1dE5vZGVzLCB0b2RvRnJvbVN0b3JhZ2UucHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IGlzRmluaXNoZWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0RldGFpbElzRmluaXNoZWRcIik7XHJcbiAgICBpc0ZpbmlzaGVkSW5wdXQuY2hlY2tlZCA9IHRvZG9Gcm9tU3RvcmFnZS5pc0ZpbmlzaGVkO1xyXG5cclxuICAgIHRoaXMuVG9kb0RldGFpbE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gICAgdGhpcy5Qcm9qZWN0TW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hlY2tlZFByaW9yaXR5KHByaW9Ob2Rlcywgc3RvcmVkUHJpb3JpdHkpIHtcclxuICAgIHByaW9Ob2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgIG5vZGUuY2hlY2tlZCA9IG5vZGUudmFsdWUgPT09IHN0b3JlZFByaW9yaXR5O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvQWRkQ2xpY2soZSkge1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2RvRWRpdENsaWNrKGUpIHtcclxuICAgIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9JZFwiKTsgLy9cclxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb05hbWVcIik7XHJcbiAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHRvZG9JZDtcclxuICAgIGNvbnN0IHNlbGVjdGVkVG9kb05hbWUgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFNpbmdsZVRvZG8odG9kb0lkKS5uYW1lO1xyXG5cclxuICAgIGZvcm1JbnB1dC52YWx1ZSA9IHNlbGVjdGVkVG9kb05hbWU7XHJcbiAgICB0aGlzLlRvZG9Nb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIGZvcm1JbnB1dC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVG9kb0Nsb3NlQ2xpY2sodG9kb0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLlRvZG9Db250cm9sbGVyLnJlbW92ZVRvZG9CeUlkKHRvZG9JZCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0b2RvSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9EZXRhaWxNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IodG9kb0NhbGxiYWNrKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50b2RvQ2FsbGJhY2sgPSB0b2RvQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wb25lbnQodG9kb0lkLCBwcm9qSWQpIHtcclxuICAgIGNvbnN0IGRldGFpbGVkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGV0YWlsZWRNb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC10b2RvLWNvbnRlbnRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgIDxmb3JtIGlkPVwiZGV0YWlsVG9kb0Zvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC10b2RvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvRGV0YWlsTmFtZVwiPlRvZG8gTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kb0RldGFpbE5hbWVcIiBuYW1lPVwidG9kb0RldGFpbE5hbWVcIiByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvRGV0YWlsRHVlRGF0ZVwiPkR1ZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRvZG9EZXRhaWxEdWVEYXRlXCIgbmFtZT1cInRvZG9EZXRhaWxEdWVEYXRlXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kb0RldGFpbERlc2NcIj5EZXRhaWxzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0b2RvRGV0YWlsRGVzY1wiIG5hbWU9XCJ0b2RvRGV0YWlsRGVzY1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5Qcmlvcml0eTwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0b2RvRGV0YWlsUHJpb1wiIGlkPVwidXJnZW50XCIgdmFsdWU9XCJ1cmdlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidXJnZW50XCI+VXJnZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0b2RvRGV0YWlsUHJpb1wiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0b2RvRGV0YWlsUHJpb1wiIGlkPVwiY2hpbGxcIiB2YWx1ZT1cImNoaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoaWxsXCI+Q2hpbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG9EZXRhaWxJc0ZpbmlzaGVkXCI+SXMgZmluaXNoZWQ6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvRGV0YWlsSXNGaW5pc2hlZFwiIG5hbWU9XCJ0b2RvRGV0YWlsSXNGaW5pc2hlZFwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidG9kb0RldGFpbElkXCIgbmFtZT1cInRvZG9EZXRhaWxJZFwiICR7XHJcbiAgICAgICAgICAgICAgICB0b2RvSWQgPyBgdmFsdWU9XCIke3RvZG9JZH1cImAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ0b2RvRGV0YWlsUHJvaklkXCIgbmFtZT1cInRvZG9EZXRhaWxQcm9qSWRcIiAgJHtcclxuICAgICAgICAgICAgICAgIHByb2pJZCA/IGB2YWx1ZT1cIiR7cHJvaklkfVwiYCA6IFwiXCJcclxuICAgICAgICAgICAgICB9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBkZXRhaWxlZE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gICAgZGV0YWlsZWRNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGlkZGVuXCIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChkZXRhaWxlZE1vZGFsKTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxUb2RvRm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBjb25zdCB0b2RvSWQgPSBmb3JtRGF0YS5nZXQoXCJ0b2RvRGV0YWlsSWRcIik7XHJcbiAgICBjb25zdCB0b2RvTmFtZSA9IGZvcm1EYXRhLmdldChcInRvZG9EZXRhaWxOYW1lXCIpO1xyXG4gICAgY29uc3QgcHJvaklkID0gZm9ybURhdGEuZ2V0KFwidG9kb0RldGFpbFByb2pJZFwiKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJ0b2RvRGV0YWlsRHVlRGF0ZVwiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwidG9kb0RldGFpbERlc2NcIik7XHJcbiAgICBjb25zdCBwcmlvID0gZm9ybURhdGEuZ2V0KFwidG9kb0RldGFpbFByaW9cIik7XHJcbiAgICBsZXQgaXNGaW5pc2hlZCA9IGZvcm1EYXRhLmdldChcInRvZG9EZXRhaWxJc0ZpbmlzaGVkXCIpOyAvLyB0cnVlOiBvbiwgZmFsc2U6IG51bGxcclxuICAgIGlzRmluaXNoZWQgPSBpc0ZpbmlzaGVkID09PSBcIm9uXCIgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgdGhpcy50b2RvQ2FsbGJhY2soXHJcbiAgICAgIHRvZG9JZCxcclxuICAgICAgdG9kb05hbWUsXHJcbiAgICAgIHByb2pJZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW8sXHJcbiAgICAgIGlzRmluaXNoZWRcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvTmFtZSwgdG9kb0lkLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpbyk7XHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwibW9kYWwtaGlkZGVuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsLWhpZGRlblwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vVUlDb250cm9sbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBUb2RvTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHRvZG9DYWxsYmFjaykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudG9kb0NhbGxiYWNrID0gdG9kb0NhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcG9uZW50KHRvZG9JZCkge1xyXG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZG9Nb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvTW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZWRpdFRvZG9Gb3JtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kb05hbWVcIj5Ub2RvIE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kb05hbWVcIiBuYW1lPVwidG9kb05hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ0b2RvSWRcIiBuYW1lPVwidG9kb0lkXCIgJHtcclxuICAgICAgICAgICAgdG9kb0lkID8gYHZhbHVlPVwiJHt0b2RvSWR9XCJgIDogXCJcIlxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ0b2RvLXByb2plY3RJZFwiIG5hbWU9XCJ0b2RvLXByb2plY3RJZFwiICR7XHJcbiAgICAgICAgICAgIHByb2plY3RJZCA/IGB2YWx1ZT1cIiR7cHJvamVjdElkfVwiYCA6IFwiXCJcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4ke3RvZG9JZCA/IFwiU2F2ZSBjaGFuZ2VzXCIgOiBcIkFkZFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XHJcblxyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oaWRkZW5cIik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBuZXcgQnV0dG9uKFwieFwiLCAoZSkgPT5cclxuICAgICAgdGhpcy5oYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKGUpXHJcbiAgICApLnJlbmRlckNvbXBvbmVudCgpO1xyXG5cclxuICAgIHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Nb2RhbC1jb250ZW50XCIpLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWwpO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUb2RvRm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidG9kb0NhbGxiYWNrIGlzOiBcIiwgdGhpcy50b2RvQ2FsbGJhY2spO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG4gICAgY29uc3QgdG9kb05hbWUgPSBmb3JtRGF0YS5nZXQoXCJ0b2RvTmFtZVwiKTtcclxuICAgIGNvbnN0IHRvZG9JZCA9IGZvcm1EYXRhLmdldChcInRvZG9JZFwiKTtcclxuICAgIHRoaXMudG9kb0NhbGxiYWNrKHRvZG9JZCwgdG9kb05hbWUpO1xyXG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtLWNvbnRhaW5lclwiKTsgLy9cclxuICAgIGNvbnN0IG1vZGFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9OYW1lXCIpO1xyXG4gICAgaWYgKG1vZGFsSW5wdXQpIHtcclxuICAgICAgbW9kYWxJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb2RhbEhpZGRlblRvZG9JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0lkXCIpO1xyXG4gICAgaWYgKG1vZGFsSGlkZGVuVG9kb0lkKSB7XHJcbiAgICAgIG1vZGFsSGlkZGVuVG9kb0lkLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kb01vZGFsKSB7XHJcbiAgICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGlkZGVuXCIpO1xyXG4gICAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW92ZXJsYXlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgVUlDb250cm9sbGVyLmlzVG9kb01vZGFsT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgbGV0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZG9Nb2RhbCkge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xyXG4gICAgICB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZm9ybS1jb250YWluZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1oaWRkZW5cIik7XHJcblxyXG4gICAgVUlDb250cm9sbGVyLmlzVG9kb01vZGFsT3BlbiA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL0NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9Nb2RhbFwiO1xyXG4vLyBpbXBvcnQgcHJvamVjdENvbnRyb2xsZXIgaGVyZT9cclxuaW1wb3J0IHsgUHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvUHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBUb2RvQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL21vZGVscy9Ub2RvXCI7XHJcbmltcG9ydCB7IFRvZG9Nb2RhbCB9IGZyb20gXCIuL0NvbXBvbmVudHMvVG9kb01vZGFsXCI7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL1RvZG9cIjtcclxuaW1wb3J0IHsgVG9kb0RldGFpbE1vZGFsIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9Ub2RvRGV0YWlsTW9kYWxcIjtcclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciB7XHJcbiAgc3RhdGljIGlzVG9kb01vZGFsT3BlbiA9IGZhbHNlO1xyXG4gIHN0YXRpYyBpc1Byb2plY3RNb2RhbE9wZW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLk5hdmJhciA9IG5ldyBOYXZiYXIoKTtcclxuICAgIHRoaXMuTW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgIHRoaXMuUHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuVG9kbyA9IG5ldyBUb2RvKCk7XHJcbiAgICB0aGlzLlRvZG9Nb2RhbCA9IG5ldyBUb2RvTW9kYWwoKTtcclxuICAgIHRoaXMuVG9kb0RldGFpbE1vZGFsID0gbmV3IFRvZG9EZXRhaWxNb2RhbCgpO1xyXG4gICAgdGhpcy5Ub2RvQ29tcG9uZW50ID0gbmV3IFRvZG9Db21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXQocHJvamVjdHNBcnIpIHtcclxuICAgIHRoaXMuTmF2YmFyLnJlbmRlckNvbXBvbmVudChwcm9qZWN0c0Fycik7XHJcbiAgICB0aGlzLmluaXRQcm9qZWN0TW9kYWwoKTtcclxuICAgIHRoaXMuaW5pdFRvZG9Nb2RhbCgpO1xyXG4gICAgdGhpcy5pbml0Rmlyc3REaXZDbGljaygpO1xyXG4gICAgdGhpcy5pbml0VG9kb0RldGFpbE1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmluaXRDb250ZW50Q2xpY2tCZWhhdmlvcigpO1xyXG4gICAgICB0aGlzLmluaXRIZWFkZXJDbGlja0JlaGF2aW9yKCk7XHJcbiAgICAgIHRoaXMuaW5pdE92ZXJsYXlDbGlja0JlaGF2aW9yKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRUb2RvRGV0YWlsTW9kYWwoKSB7XHJcbiAgICBjb25zdCB0b2RvRGV0YWlsTW9kYWwgPSBuZXcgVG9kb0RldGFpbE1vZGFsKFxyXG4gICAgICB0aGlzLnRvZG9EZXRhaWxDYWxsYmFjay5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gICAgdG9kb0RldGFpbE1vZGFsLnJlbmRlckNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFByb2plY3RNb2RhbCgpIHtcclxuICAgIC8vIHJlbmRlciBtb2RhbFxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5wcm9qZWN0TW9kYWxDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBtb2RhbC5yZW5kZXJDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXRPdmVybGF5Q2xpY2tCZWhhdmlvcigpIHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICBjb25zdCBkZXRhaWxNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbC10b2RvLWNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWRldGFpbE1vZGFsQ29udGVudC5jb250YWlucyhlLnRhcmdldCkgfHxcclxuICAgICAgICBjbG9zZUJ0bi5jb250YWlucyhlLnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVRvZG9EZXRhaWxNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlVG9kb0RldGFpbE1vZGFsKCkge1xyXG4gICAgdGhpcy5Ub2RvRGV0YWlsTW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEhlYWRlckNsaWNrQmVoYXZpb3IoKSB7XHJcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICAvLyBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgIGNvbnN0IG5hdkl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19wcm9qZWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIucHJvamVjdC1mb3JtLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG1vZGFsXHJcbiAgICBoZWFkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgaXNDbGlja0luc2lkZU5hdkl0ZW0gPSBBcnJheS5mcm9tKG5hdkl0ZW1FbGVtZW50cykuc29tZSgoZWxlbWVudCkgPT5cclxuICAgICAgICBlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgLy8gIW5hdkl0ZW1FbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICFpc0NsaWNrSW5zaWRlTmF2SXRlbSAmJlxyXG4gICAgICAgICFwcm9qZWN0Rm9ybUNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKCFVSUNvbnRyb2xsZXIuaXNQcm9qZWN0TW9kYWxPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XHJcbiAgICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVByb2plY3RNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29udGVudENsaWNrQmVoYXZpb3IoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1mb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb250ZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0b2Rvc0NvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAhdG9kb0Zvcm1Db250YWluZXIuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICghVUlDb250cm9sbGVyLmlzVG9kb01vZGFsT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zaG93VG9kb01vZGFsKCk7XHJcbiAgICAgICAgICBjb25zdCB0b2RvTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9OYW1lXCIpO1xyXG4gICAgICAgICAgdG9kb05hbWVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VUb2RvTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VUb2RvTW9kYWwoKSB7XHJcbiAgICB0aGlzLlRvZG9Nb2RhbC5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG4gIGNsb3NlUHJvamVjdE1vZGFsKCkge1xyXG4gICAgdGhpcy5Nb2RhbC5jbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBzaG93VG9kb01vZGFsKCkge1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICB0aGlzLk1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIHNob3dQcm9qZWN0TW9kYWwoKSB7XHJcbiAgICB0aGlzLk1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgdGhpcy5Ub2RvTW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuICBpbml0VG9kb01vZGFsKCkge1xyXG4gICAgLy8gcmVuZGVyIHRvZG9Nb2RhbFxyXG4gICAgY29uc3QgdG9kb01vZGFsID0gbmV3IFRvZG9Nb2RhbCh0aGlzLnRvZG9Nb2RhbENhbGxiYWNrLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRvZG9Nb2RhbC5yZW5kZXJDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGluaXRGaXJzdERpdkNsaWNrKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgbXlGaXJzdE5hdkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19wcm9qZWN0XCIpO1xyXG4gICAgICBpZiAobXlGaXJzdE5hdkRpdikge1xyXG4gICAgICAgIG15Rmlyc3ROYXZEaXYuY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2RvRGV0YWlsQ2FsbGJhY2soXHJcbiAgICB0b2RvSWQsXHJcbiAgICB0b2RvTmFtZSxcclxuICAgIHByb2pJZCxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW8sXHJcbiAgICBpc0ZpbmlzaGVkXHJcbiAgKSB7XHJcbiAgICB0aGlzLlRvZG9Db250cm9sbGVyLmVkaXRUb2RvV2l0aFZhbHVlcyhcclxuICAgICAgdG9kb0lkLFxyXG4gICAgICB0b2RvTmFtZSxcclxuICAgICAgcHJvaklkLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpbyxcclxuICAgICAgaXNGaW5pc2hlZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5ld1RvZG9BcnIgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qSWQpO1xyXG4gICAgdGhpcy5Ub2RvQ29tcG9uZW50LnJlbmRlckNvbXBvbmVudChuZXdUb2RvQXJyKTtcclxuICB9XHJcblxyXG4gIHByb2plY3RNb2RhbENhbGxiYWNrKHByb2plY3RJZCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGlmIChwcm9qZWN0SWQgPT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgLy8gcmVyZW5kZXIgbmF2YmFyXHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RzQXJyID0gdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgICB0aGlzLk5hdmJhci5yZW5kZXJDb21wb25lbnQobmV3UHJvamVjdHNBcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5Qcm9qZWN0Q29udHJvbGxlci5lZGl0UHJvamVjdChwcm9qZWN0SWQsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgIC8vIHJlcmVuZGVyIG5hdmJhclxyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0c0FyciA9IHRoaXMuUHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgdGhpcy5OYXZiYXIucmVuZGVyQ29tcG9uZW50KG5ld1Byb2plY3RzQXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZG9Nb2RhbENhbGxiYWNrKHRvZG9JZCwgdG9kb05hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcm9qZWN0SWRcIikudmFsdWU7XHJcbiAgICBpZiAodG9kb0lkID09PSBcIlwiKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBuZXcgdG9kb1xyXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odG9kb05hbWUsIHByb2plY3RJZCk7XHJcbiAgICAgIHRoaXMuVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyhuZXdUb2RvKTtcclxuXHJcbiAgICAgIC8vIHJlcmVuZGVyIHRvZG9zXHJcbiAgICAgIGNvbnN0IG5ld1RvZG9BcnIgPSB0aGlzLlRvZG9Db250cm9sbGVyLmdldFRvZG9zV2l0aFByb2plY3RJZChwcm9qZWN0SWQpO1xyXG4gICAgICB0aGlzLlRvZG9Db21wb25lbnQucmVuZGVyQ29tcG9uZW50KG5ld1RvZG9BcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5Ub2RvQ29udHJvbGxlci5lZGl0VG9kb05hbWUodG9kb0lkLCB0b2RvTmFtZSk7XHJcblxyXG4gICAgICAvLyByZXJlbmRlciB0b2Rvc1xyXG4gICAgICBjb25zdCBuZXdUb2RvQXJyID0gdGhpcy5Ub2RvQ29udHJvbGxlci5nZXRUb2Rvc1dpdGhQcm9qZWN0SWQocHJvamVjdElkKTtcclxuICAgICAgdGhpcy5Ub2RvQ29tcG9uZW50LnJlbmRlckNvbXBvbmVudChuZXdUb2RvQXJyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxubGV0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKCk7XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==