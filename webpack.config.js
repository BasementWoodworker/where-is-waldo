const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Where's Waldo?" })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  devServer: {
    static: "./dist"
  },
  optimization: {
    runtimeChunk: "single"
  }
}