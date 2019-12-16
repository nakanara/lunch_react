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
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
  /* https://webpack.js.org/configuration/dev-server/ */
  devServer: {
    contentBase: './web',
    historyApiFallback: true
  }
};