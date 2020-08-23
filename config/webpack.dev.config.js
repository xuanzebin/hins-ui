const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./paths')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    index: paths.appHomeJs
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|eot|ttf|woff|woff2)$/,
        loader: require.resolve('file-loader'),
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    })
  ]
})
