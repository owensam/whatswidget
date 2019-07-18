const path = require('path')
const webpack = require('webpack')
var copyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const bundleOutputDir = '../js'

module.exports = (env) => {
    const isDevBuild = !(env && env.prod)

    return [{
        mode: isDevBuild ? 'development' : 'production',
        entry: './src/main.js',
        output: {
            filename: 'widget.js',
            path: path.resolve(bundleOutputDir),
        },
        devServer: {
            contentBase: bundleOutputDir
        },
        optimization: {
            minimizer: [
              // we specify a custom UglifyJsPlugin here to get source maps in production
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                  compress: true,
                  ecma: 6,
                  mangle: true
                },
                sourceMap: true
              })
            ]
        },
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