var webpack = require("webpack");
module.exports = {
  entry: {
    entry: __dirname + "./assets/js/main.js",
  },
  output: {
    path: __dirname,
    filename: "./bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
    ],
  },
};
