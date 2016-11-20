const baseConfig = {
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				test: /\.mcss$/,
				loader: 'style-loader!css-loader!mcss-loader!postcss-loader',
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader!postcss-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015' ]
				}
			},
			{
				test: /\.(ttf|woff|eot|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10240&name=[name].[ext]?[hash:8]'
			},
		]
	},
	postcss: [
		require( 'autoprefixer' ),
	],
	resolve: {
		extensions: [ '', '.js' ]
	},
	externals: {},
};

module.exports = baseConfig;
