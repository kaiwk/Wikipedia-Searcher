var path = require('path');

var config = {
  entry: {
    main: path.join(__dirname, 'src/js', 'main.js')
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: 'build/',
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
