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