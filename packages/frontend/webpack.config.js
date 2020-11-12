const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const mode = "development";

const webpackModule = {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
    },
    {
      test: /\.js$/,
      use: ["babel-loader"],
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash]",
          },
        },
      ],
    },
  ],
};

const webApp = {
  mode,
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: webpackModule,
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};

const browserExtension = {
  mode,
  devtool: "inline-source-map",
  entry: {
    popup: path.join(__dirname, "browser-extension/popup.js"),
  },
  output: {
    publicPath: ".",
    path: path.join(__dirname, "browser-extension-dist"),
    filename: "[name].js",
  },
  module: webpackModule,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "./browser-extension/static"),
          to: ".",
        },
      ],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "popup.html",
    }),
  ],
};

module.exports = [webApp, browserExtension];
