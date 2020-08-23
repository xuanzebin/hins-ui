const { merge } = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssnanoDefaultPreset = require('cssnano-preset-default')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const paths = require('./paths')
const common = require('./webpack.config')

const PUBLIC_PATH = '/'
const babelLoader = require.resolve('babel-loader')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  entry: {
    index: paths.appMainJs,
  },
  output: {
    path: paths.appBuild,
    filename: '[name].js',
    publicPath: PUBLIC_PATH,
    libraryTarget: 'umd',
    library: 'HinsUI'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          warnings: false,
          compress: {
            drop_console: true,
          },
        },
        sourceMap: false,
        extractComments: false,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: {
            plugins: CssnanoDefaultPreset({
              colormin: {
                name: 'colormin',
              },
            }).plugins.filter(item => {
              const itemOptions = item[1] || {}
              return itemOptions.name !== 'colormin'
            }),
          },
        },
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 8192,
              outputPath: 'assets/img/',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [autoprefixer],
            },
          },
          {
            loader: require.resolve('sass-loader'),
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  externals: {
    react:{
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom':{
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
})
