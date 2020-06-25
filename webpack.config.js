const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    mode:'development',
    output: {
        filename: "bundle-[hash].js",
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        extensions: ['.js','.json','.png'],
    },
    devServer: {
        open:true,
        historyApiFallback: true
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'main-[hash:8].css'
        }),
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:  {
        rules: [
            {
                test:/\.css$/,
                use:[MiniCSSExtractPlugin.loader, {loader : 'css-loader'}],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                test:/\.s[ca]ss$/,
                use:[MiniCSSExtractPlugin.loader, {loader : 'css-loader'},{loader : 'sass-loader'}],
            },
            {
                test: /\.(png|jpeg|svg|gif|jpg)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        outputPath:'images',
                        name:'[name]-[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        outputPath:'fonts',
                        name:'[name].[ext]'
                    }
                }
            },
        ]
    }
}