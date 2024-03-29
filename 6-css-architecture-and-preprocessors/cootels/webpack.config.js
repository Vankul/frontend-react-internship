const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');  

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './scripts/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        hot: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), 
                to: path.resolve(__dirname, 'dist/assets/images') },
            ],
        }),
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                } 
            }
        ]
    }
}