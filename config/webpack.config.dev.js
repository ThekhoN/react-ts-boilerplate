const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = require("./paths");
const path = require("path");
const express = require("express");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.static, "/index.html"),
  filename: "index.html",
  inject: "body"
});

// set ENVIRON CONFIG
const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  development: JSON.stringify(true),
  production: JSON.stringify(false)
});

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    app: PATHS.entry
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          name: "[name]-[hash:8].[ext]",
          outputPath: "images/",
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // IE9 & IE9+
                  ],
                  flexbox: "no-2009"
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              // make global scss varibles available to all .scss without manually importing
              resources: [
                path.join(PATHS.src, "/styles-global/global-variables.scss")
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: PATHS.dist,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    WebpackDefinePluginConfig,
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 12345,
    publicPath: "/",
    hot: true,
    contentBase: PATHS.static,
    historyApiFallback: true
  }
};
