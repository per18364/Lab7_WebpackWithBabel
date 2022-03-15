import { cuadrado } from '../assets/tools/cuadrado.js';

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

contenedor = cuadrado('Links sin 3', contenedor, 'yellow');
contenedor.append(lista);

footer.appendChild(contenedor);
