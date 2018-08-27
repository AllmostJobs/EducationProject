const path = require('path');
const webpack = require('webpack');

const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        bundle: "./app/appController.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use:{ 
                    loader: 'babel-loader',
                    query: {
                        presets: ['env'] 
                    }
                },
                exclude: /node_modules/
            },
        ]
    }
}

module.exports = config;