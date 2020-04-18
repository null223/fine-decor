const path = require('path');

module.exports = {
  entry: {
    content: "./src/content/index.js",
    page: "./src/page/index.js"
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]/main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    openPage: "page/index.html",
    watchContentBase: true,
    open: true,
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}