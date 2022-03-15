import { cuadrado } from '../assets/tools/cuadrado.js';

export const crearAñosDeDepre = () => {
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

	contenedor = cuadrado('Links sin 4', contenedor, 'green');
	contenedor.append(lista);

	footer.appendChild(contenedor);
};
