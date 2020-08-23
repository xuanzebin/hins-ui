const path = require('path')

const babelLoader = require.resolve('babel-loader')
const tsLoader = require.resolve('ts-loader')

const paths = require('./paths')

module.exports = {
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
        test: /\.tsx?$/,
        exclude: /(node_modules|dist)/,
        use: [babelLoader, tsLoader],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        use: [babelLoader],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
}
  