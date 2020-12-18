import path from 'path'
import webpack, { web } from 'webpack'
import webpackDevServer from 'webpack-dev-server' // provides .Configuration type
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import dotenv from 'dotenv'

const env = dotenv.config({path: path.resolve(__dirname, ".env.development.local")})

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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
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
      favicon: './src/images/favicon.ico',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public']
    }),
    new WebpackManifestPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env.parsed)
    })
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