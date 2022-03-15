/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/añosDeDepre.css":
/*!***********************************!*\
  !*** ./src/pages/añosDeDepre.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/elInicio.css":
/*!********************************!*\
  !*** ./src/pages/elInicio.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/negacion.css":
/*!********************************!*\
  !*** ./src/pages/negacion.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearAñosDeDepre": () => (/* binding */ crearAñosDeDepre)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


const crearAñosDeDepre = () => {
	let footer = document.getElementById('footer-añosDeDepre');
	let contenedor = document.createElement('div');
	let lista = document.createElement('ol');

	let opcion = document.createElement('li');
	let a1 = document.createElement('a');
	a1.href = '../../bundle/index.html';
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

	lista.appendChild(opcion);
	lista.appendChild(opcion2);
	lista.appendChild(opcion3);

	contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 4', contenedor, 'green');
	contenedor.append(lista);

	footer.appendChild(contenedor);
};


/***/ }),

/***/ "./src/pages/elInicio.js":
/*!*******************************!*\
  !*** ./src/pages/elInicio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearElInicio": () => (/* binding */ crearElInicio)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


const crearElInicio = () => {
	let footer = document.getElementById('footer-elInicio');
	let contenedor = document.createElement('div');
	let lista = document.createElement('ol');

	let opcion = document.createElement('li');
	let a1 = document.createElement('a');
	a1.href = '../../bundle/index.html';
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

	lista.appendChild(opcion);
	lista.appendChild(opcion2);
	lista.appendChild(opcion3);

	contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 2', contenedor, 'green');
	contenedor.append(lista);

	footer.appendChild(contenedor);
};


/***/ }),

/***/ "./src/pages/negacion.js":
/*!*******************************!*\
  !*** ./src/pages/negacion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearNegacion": () => (/* binding */ crearNegacion)
/* harmony export */ });
/* harmony import */ var _assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/cuadrado.js */ "./src/assets/tools/cuadrado.js");


const crearNegacion = () => {
	let footer = document.getElementById('footer-negacion');
	let contenedor = document.createElement('div');
	let lista = document.createElement('ol');

	let opcion = document.createElement('li');
	let a1 = document.createElement('a');
	a1.href = '../../bundle/index.html';
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

	lista.appendChild(opcion);
	lista.appendChild(opcion2);
	lista.appendChild(opcion3);

	contenedor = (0,_assets_tools_cuadrado_js__WEBPACK_IMPORTED_MODULE_0__.cuadrado)('Links sin 3', contenedor, 'yellow');
	contenedor.append(lista);

	footer.appendChild(contenedor);
};


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
/******/ 			// no module.id needed
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
/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css");
/* harmony import */ var _pages_elInicio_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/elInicio.css */ "./src/pages/elInicio.css");
/* harmony import */ var _pages_negacion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/negacion.css */ "./src/pages/negacion.css");
/* harmony import */ var _pages_a_osDeDepre_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/añosDeDepre.css */ "./src/pages/añosDeDepre.css");
/* harmony import */ var _pages_elInicio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/elInicio.js */ "./src/pages/elInicio.js");
/* harmony import */ var _pages_negacion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/negacion.js */ "./src/pages/negacion.js");
/* harmony import */ var _pages_a_osDeDepre_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/añosDeDepre.js */ "./src/pages/añosDeDepre.js");
//importar css





//import otros js




//crear links pagina inicial

function elInicio() {
	(0,_pages_elInicio_js__WEBPACK_IMPORTED_MODULE_4__.crearElInicio)();
}
function negacion() {
	(0,_pages_negacion_js__WEBPACK_IMPORTED_MODULE_5__.crearNegacion)();
}
function añosDeDepre() {
	(0,_pages_a_osDeDepre_js__WEBPACK_IMPORTED_MODULE_6__["crearAñosDeDepre"])();
}

let footer = document.getElementById('footer');
let lista = document.createElement('ol');
lista.start = '2';

let opcion = document.createElement('li');
let a1 = document.createElement('a');
a1.addEventListener('click', elInicio);
// a1.href = '../src/pages/elInicio.html';
a1.innerHTML = '¿De donde vino TANTO amor a los Huskies?';
opcion.appendChild(a1);

let opcion2 = document.createElement('li');
let a2 = document.createElement('a');
a2.addEventListener('click', negacion);
// a2.href = '../src/pages/negacion.html';
a2.innerHTML = 'Inicio de la tristeza...';
opcion2.appendChild(a2);

let opcion3 = document.createElement('li');
let a3 = document.createElement('a');
a3.addEventListener('click', añosDeDepre);
// a3.href = '../src/pages/añosDeDepre.html';
a3.innerHTML = '¿Entonces que pasó?';
opcion3.appendChild(a3);

lista.appendChild(opcion);
lista.appendChild(opcion2);
lista.appendChild(opcion3);

footer.appendChild(lista);

})();

/******/ })()
;