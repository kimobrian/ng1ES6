'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

function setDevTool() {
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}

module.exports = function makeConfig(){
    const config = {};
    config.entry = './src/app/app.js';
    config.output = {
        path: __dirname + '/dist',
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    };
    config.devtool = setDevTool();
    config.module = {
      rules: [
              {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                  /node_modules/,
                  /\.spec\.js$/
                ]
              },
              {
                test: /\.html$/,
                use: 'raw-loader'
              },
              {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: 'file-loader'
              },
              {
                  test: /\.css$/,
                  use: isTest ? 'null-loader' : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      { loader: 'css-loader'},
                      { loader: 'postcss-loader'}
                    ],
                  })
              },
              {
                test: /\.(sass|scss)$/,
                use: isTest ? 'null-loader' : ExtractTextPlugin.extract({
                    use: [
                        { loader:"css-loader" },
                        { loader:"sass-loader" },
                        { loader:"postcss-loader" }
                    ],
                    fallback: 'style-loader'
                })
              }
          ]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
          template: './src/public/index.html',
          inject: 'body'
        }),
        new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true}),
        new ngAnnotatePlugin({
            add: true
        })
    ];

    if(isProd) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin(),
            new CopyWebpackPlugin([{
              from: __dirname + '/src/public'
            }])
        );
    };

    config.devServer = {
      contentBase: './src/public',
      stats: 'minimal'
    };
    return config;
}();
