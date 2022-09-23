const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].min.css",
  chunkFilename: "[id].css",
});

module.exports = {
  entry: {
    "arc-advanced-analytics": "./src/index.jsx",
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "react-spring$": "react-spring/web.cjs",
      "react-spring/renderprops$": "react-spring/renderprops.cjs",
    },
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractSass,
    new NodePolyfillPlugin(),
  ],
};
