const path = require('path');

module.exports = {
	mode: 'development', //development {nomin}, prod{min}
	devtool: false, //permite ver mejor el codigo de nuestro output
	entry: './src/index.js', //ubicacion de codigo fuente, donde inicia todo
	output: {
		filename: 'main.js', //nombre del archivo que queremos generar para el bundle
		path: path.resolve(__dirname, 'bundle') //almacenemos el output en un nuevo directorio dentro de nuestro root path
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
