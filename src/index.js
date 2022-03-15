//importar css
import './assets/index.css';
import './pages/elInicio.css';
import './pages/negacion.css';
import './pages/añosDeDepre.css';

//import otros js
import { crearElInicio } from './pages/elInicio.js';
import { crearNegacion } from './pages/negacion.js';
import { crearAñosDeDepre } from './pages/añosDeDepre.js';

//crear links pagina inicial

function elInicio() {
	crearElInicio();
}
function negacion() {
	crearNegacion();
}
function añosDeDepre() {
	crearAñosDeDepre();
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
