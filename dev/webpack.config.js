const path = require('path')
const webpack = require('webpack')
var copyWebpackPlugin = require('copy-webpack-plugin')
const bundleOutputDir = '../'

module.exports = (env) => {
    const isDevBuild = !(env && env.prod)

    return [{
        entry: './src/main.js',
        output: {
            filename: 'widget.js',
            path: path.resolve(bundleOutputDir),
		},
		optimization: isDevBuild
			? { minimize: false }
			: { minimize: true },
        devServer: {
            contentBase: bundleOutputDir
        },
		plugins: [
			new webpack.SourceMapDevToolPlugin(), 
			new copyWebpackPlugin({
				patterns: [
					{ from: 'demo', to: './' },
				],
				options: {
					concurrency: 100,
				},
		})],
        module: {
            rules: [
                { test: /\.html$/i, use: 'html-loader' },
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.js$/i, exclude: /node_modules/, use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/env', {
                                'targets': {
                                    'browsers': ['ie 6', 'safari 7']
                                }
                            }]]
                        }
                    }
                }
            ]
        }
    }]
}