import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server' // needed to use .config
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
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
        options: {
          transpileOnly: true
        }
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
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public']
    }),
    new WebpackManifestPlugin()
  ] : [],
  devtool: isDevelopment ? 'eval-source-map': false,
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