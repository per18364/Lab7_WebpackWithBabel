export const cuadrado = (title, contenedor, color) => {
	contenedor.style.width = '500px';
	contenedor.style.heght = '500px';
	contenedor.style.backgroundColor = color;
	contenedor.innerHTML = title;
	contenedor.style.border = '1px solid black';

	return contenedor;
};
