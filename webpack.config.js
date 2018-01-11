const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  context: path.resolve("assets"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve("public"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader", options: { importLoaders: 1 } }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "bundle.css" }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true
    // })
  ]
};

module.exports = config;
