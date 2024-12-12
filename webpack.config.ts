import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { config } from 'dotenv'

config()

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.APP_NAME,
    }),
  ],
}
