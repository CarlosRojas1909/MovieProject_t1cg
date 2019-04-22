const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');//not installed with npm it comes with webpack, require it here bc we overwritten it when using OptimizeCssAssetsPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [ 
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/template.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
         new MiniCssExtractPlugin({ filename: '[name].[contentHash].css'}),
         new CleanWebpackPlugin()
   ],
   module: {
       rules: [
        {   
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,//3. extract css into files
                  'css-loader', // 2. Turns css into common js
                  'sass-loader' // 1. Turns sass into css
                ]
        },
       ]
   }
});