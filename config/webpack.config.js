const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

const PUBLIC_PATH = '/'

module.exports = {
  entry: {
    index: paths.appMainJs,
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    symlinks: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@app': path.join(__dirname, '../', './src/'),
      '@components': path.join(__dirname,'../', './src/components')
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
  ]
}
  