/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#body-container {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
  } // For old IE

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

/***/ "./src/assets/tools/cuadrado.js":
/*!**************************************!*\
  !*** ./src/assets/tools/cuadrado.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cuadrado": () => (/* binding */ cuadrado)
/* harmony export */ });
const cuadrado = (title, contenedor, color) => {
	contenedor.style.width = '500px';
	contenedor.style.heght = '500px';
	contenedor.style.backgroundColor = color;
	contenedor.innerHTML = title;
	contenedor.style.border = '1px solid black';

	return contenedor;
};


/***/ }),

/***/ "./src/pages/añosDeDepre.js":
/*!**********************************!*\
  !*** ./src/pages/añosDeDepre.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


let footer = document.getElementById('footer');
let contenedor = document.createElement('div');
let lista = document.createElement('ol');

let opcion = document.createElement('li');
let a1 = document.createElement('a');
a1.href = '../index.html';
a1.innerHTML = 'Inicio';
opcion.appendChild(a1);

let opcion2 = document.createElement('li');
let a2 = document.createElement('a');
a2.href = 'elInicio.html';
a2.innerHTML = '¿De donde vino TANTO amor a los Huskies?';
opcion2.appendChild(a2);

let opcion3 = document.createElement('li');
let a3 = document.createElement('a');
a3.href = 'negacion.html';
a3.innerHTML = 'Inicio de la tristeza...';
opcion3.appendChild(a3);

let opcion4 = document.createElement('li');
let a4 = document.createElement('a');
a4.href = 'loPeor.html';
a4.innerHTML = '¿Y lo peor que fue?';
opcion4.value = '5';
opcion4.appendChild(a4);

let opcion5 = document.createElement('li');
let a5 = document.createElement('a');
a5.href = 'laSorpresa.html';
a5.innerHTML = 'Una sopresita';
opcion5.appendChild(a5);

let opcion6 = document.createElement('li');
let a6 = document.createElement('a');
a6.href = 'estres.html';
a6.innerHTML = 'Sin embargo...';
opcion6.appendChild(a6);

let opcion7 = document.createElement('li');
let a7 = document.createElement('a');
a7.href = 'queHacer.html';
a7.innerHTML = 'PERO otra vez';
opcion7.appendChild(a7);

let opcion8 = document.createElement('li');
let a8 = document.createElement('a');
a8.href = 'elTioGoat.html';
a8.innerHTML = 'Pero mas que mis hermanas...';
opcion8.appendChild(a8);

let opcion9 = document.createElement('li');
let a9 = document.createElement('a');
a9.href = 'felicidadPura.html';
a9.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO';
opcion9.appendChild(a9);

lista.appendChild(opcion);
lista.appendChild(opcion2);
lista.appendChild(opcion3);
lista.appendChild(opcion4);
lista.appendChild(opcion5);
lista.appendChild(opcion6);
lista.appendChild(opcion7);
lista.appendChild(opcion8);
lista.appendChild(opcion9);

contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 4', contenedor, 'green');
contenedor.append(lista);

footer.appendChild(contenedor);


/***/ }),

/***/ "./src/pages/elInicio.js":
/*!*******************************!*\
  !*** ./src/pages/elInicio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


let footer = document.getElementById('footer');
let contenedor = document.createElement('div');
let lista = document.createElement('ol');

let opcion = document.createElement('li');
let a1 = document.createElement('a');
a1.href = '../index.html';
a1.innerHTML = 'Inicio';
opcion.appendChild(a1);

let opcion2 = document.createElement('li');
let a2 = document.createElement('a');
a2.href = 'negacion.html';
a2.innerHTML = 'Inicio de la tristeza...';
opcion2.value = '3';
opcion2.appendChild(a2);

let opcion3 = document.createElement('li');
let a3 = document.createElement('a');
a3.href = 'añosDeDepre.html';
a3.innerHTML = '¿Entonces que pasó?';
opcion3.appendChild(a3);

let opcion4 = document.createElement('li');
let a4 = document.createElement('a');
a4.href = 'loPeor.html';
a4.innerHTML = '¿Y lo peor que fue?';
opcion4.appendChild(a4);

let opcion5 = document.createElement('li');
let a5 = document.createElement('a');
a5.href = 'laSorpresa.html';
a5.innerHTML = 'Una sopresita';
opcion5.appendChild(a5);

let opcion6 = document.createElement('li');
let a6 = document.createElement('a');
a6.href = 'estres.html';
a6.innerHTML = 'Sin embargo...';
opcion6.appendChild(a6);

let opcion7 = document.createElement('li');
let a7 = document.createElement('a');
a7.href = 'queHacer.html';
a7.innerHTML = 'PERO otra vez';
opcion7.appendChild(a7);

let opcion8 = document.createElement('li');
let a8 = document.createElement('a');
a8.href = 'elTioGoat.html';
a8.innerHTML = 'Pero mas que mis hermanas...';
opcion8.appendChild(a8);

let opcion9 = document.createElement('li');
let a9 = document.createElement('a');
a9.href = 'felicidadPura.html';
a9.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO';
opcion9.appendChild(a9);

lista.appendChild(opcion);
lista.appendChild(opcion2);
lista.appendChild(opcion3);
lista.appendChild(opcion4);
lista.appendChild(opcion5);
lista.appendChild(opcion6);
lista.appendChild(opcion7);
lista.appendChild(opcion8);
lista.appendChild(opcion9);

contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 2', contenedor, 'green');
contenedor.append(lista);

footer.appendChild(contenedor);


/***/ }),

/***/ "./src/pages/negacion.js":
/*!*******************************!*\
  !*** ./src/pages/negacion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


let footer = document.getElementById('footer');
let contenedor = document.createElement('div');
let lista = document.createElement('ol');

let opcion = document.createElement('li');
let a1 = document.createElement('a');
a1.href = '../index.html';
a1.innerHTML = 'Inicio';
opcion.appendChild(a1);

let opcion2 = document.createElement('li');
let a2 = document.createElement('a');
a2.href = 'elInicio.html';
a2.innerHTML = '¿De donde vino TANTO amor a los Huskies?';
opcion2.appendChild(a2);

let opcion3 = document.createElement('li');
let a3 = document.createElement('a');
a3.href = 'añosDeDepre.html';
a3.innerHTML = '¿Entonces que pasó?';
opcion3.value = '4';
opcion3.appendChild(a3);

let opcion4 = document.createElement('li');
let a4 = document.createElement('a');
a4.href = 'loPeor.html';
a4.innerHTML = '¿Y lo peor que fue?<';
opcion4.appendChild(a4);

let opcion5 = document.createElement('li');
let a5 = document.createElement('a');
a5.href = 'laSorpresa.html';
a5.innerHTML = 'Una sopresita';
opcion5.appendChild(a5);

let opcion6 = document.createElement('li');
let a6 = document.createElement('a');
a6.href = 'estres.html';
a6.innerHTML = 'Sin embargo...';
opcion6.appendChild(a6);

let opcion7 = document.createElement('li');
let a7 = document.createElement('a');
a7.href = 'queHacer.html';
a7.innerHTML = 'PERO otra vez';
opcion7.appendChild(a7);

let opcion8 = document.createElement('li');
let a8 = document.createElement('a');
a8.href = 'elTioGoat.html';
a8.innerHTML = 'Pero mas que mis hermanas...';
opcion8.appendChild(a8);

let opcion9 = document.createElement('li');
let a9 = document.createElement('a');
a9.href = 'felicidadPura.html';
a9.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO';
opcion9.appendChild(a9);

lista.appendChild(opcion);
lista.appendChild(opcion2);
lista.appendChild(opcion3);
lista.appendChild(opcion4);
lista.appendChild(opcion5);
lista.appendChild(opcion6);
lista.appendChild(opcion7);
lista.appendChild(opcion8);
lista.appendChild(opcion9);

contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 3', contenedor, 'yellow');
contenedor.append(lista);

footer.appendChild(contenedor);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_elInicio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/elInicio.js */ "./src/pages/elInicio.js");
/* harmony import */ var _pages_negacion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/negacion.js */ "./src/pages/negacion.js");
/* harmony import */ var _pages_a_osDeDepre_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/añosDeDepre.js */ "./src/pages/añosDeDepre.js");
/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css");





let footer = document.getElementById('footer');
let lista = document.createElement('ol');
lista.start = '2';

let opcion = document.createElement('li');
let a1 = document.createElement('a');
a1.href = './pages/elInicio.html';
a1.innerHTML = '¿De donde vino TANTO amor a los Huskies?';
opcion.appendChild(a1);

let opcion2 = document.createElement('li');
let a2 = document.createElement('a');
a2.href = './pages/negacion.html';
a2.innerHTML = 'Inicio de la tristeza...';
opcion2.appendChild(a2);

let opcion3 = document.createElement('li');
let a3 = document.createElement('a');
a3.href = './pages/añosDeDepre.html';
a3.innerHTML = '¿Entonces que pasó?';
opcion3.appendChild(a3);

let opcion4 = document.createElement('li');
let a4 = document.createElement('a');
a4.href = './pages/loPeor.html';
a4.innerHTML = '¿Y lo peor que fue?<';
opcion4.appendChild(a4);

let opcion5 = document.createElement('li');
let a5 = document.createElement('a');
a5.href = './pages/laSorpresa.html';
a5.innerHTML = 'Una sopresita';
opcion5.appendChild(a5);

let opcion6 = document.createElement('li');
let a6 = document.createElement('a');
a6.href = './pages/estres.html';
a6.innerHTML = 'Sin embargo...';
opcion6.appendChild(a6);

let opcion7 = document.createElement('li');
let a7 = document.createElement('a');
a7.href = './pages/queHacer.html';
a7.innerHTML = 'PERO otra vez';
opcion7.appendChild(a7);

let opcion8 = document.createElement('li');
let a8 = document.createElement('a');
a8.href = './pages/elTioGoat.html';
a8.innerHTML = 'Pero mas que mis hermanas...';
opcion8.appendChild(a8);

let opcion9 = document.createElement('li');
let a9 = document.createElement('a');
a9.href = './pages/felicidadPura.html';
a9.innerHTML = 'SOY LA PERSONA MAS FELIZ DEL MUNDO';
opcion9.appendChild(a9);

lista.appendChild(opcion);
lista.appendChild(opcion2);
lista.appendChild(opcion3);
lista.appendChild(opcion4);
lista.appendChild(opcion5);
lista.appendChild(opcion6);
lista.appendChild(opcion7);
lista.appendChild(opcion8);
lista.appendChild(opcion9);

footer.appendChild(lista);

})();

/******/ })()
;