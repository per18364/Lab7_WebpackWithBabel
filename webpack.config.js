const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development', //development {nomin}, prod{min}
	devtool: false, //permite ver mejor el codigo de nuestro output
	entry: './src/index.js', //ubicacion de codigo fuente, donde inicia todo
	output: {
		filename: 'main.[hash].bundle.js', //nombre del archivo que queremos generar para el bundle
		path: path.resolve(__dirname, 'bundle') //almacenemos el output en un nuevo directorio dentro de nuestro root path
	},
	plugins: [ new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: 'main.[hash].bundle.css' }) ],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			}
		]
	}
};
