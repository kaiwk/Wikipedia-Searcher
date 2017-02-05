var path = require('path');

var config = {
    entry: {
        main: path.join(__dirname, 'main.js')
    },

    output: {
        path: path.join(__dirname, './'),
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.join(__dirname, 'node_modules'),
                loader: 'babel-loader',

                options: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
