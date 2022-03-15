import { cuadrado } from '../assets/tools/cuadrado.js';

export const crearElInicio = () => {
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

	contenedor = cuadrado('Links sin 2', contenedor, 'green');
	contenedor.append(lista);

	footer.appendChild(contenedor);
};
