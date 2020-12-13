import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server' // needed to use .config
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const isDevelopment = process.env.NODE_ENV !== 'production'
const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: isDevelopment ? [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public', 'public/!manifest.json'],
      cleanStaleWebpackAssets: false
    })
  ] : [],
  devtool: isDevelopment ? 'eval-source-map': undefined,
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 4000,
    open: true,
    hot: true
  }
}

export default config;