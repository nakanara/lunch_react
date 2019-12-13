const path = require('path');


module.exports = {
  entry: [
    './web/src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/web',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './web'
  }
};