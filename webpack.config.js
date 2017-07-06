var path = require('path');

module.exports = {
    entry: {
        index: './src/scripts/index.js',
        demo: './src/scripts/demo.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/scripts')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};



// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('[name].css');
//
// module.exports = {
//     entry: [
//         './src/js/index.js',
//         './src/scss/style.scss'
//     ],
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'index.min.js'
//     },
//     watch: true,
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         },{
//             test: /\.scss$/,
//             use: ExtractTextPlugin.extract({
//                 fallback: "style-loader",
//                 loader: "css-loader!sass-loader",
//             }),
//         }]
//     },
//     plugins: [ extractCSS ]
// };