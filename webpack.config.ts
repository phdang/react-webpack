const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx', // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.resolve(__dirname, './build'), // Thư mục chứa file được build ra
    filename: 'bundle.js', // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ['babel-loader'],
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
  },
};
