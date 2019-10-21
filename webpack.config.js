const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg?$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.scss$/,
        loader: [process.env.NODE_ENV ==='development' ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader
        },'css-loader', {
          loader: "sass-loader",
          options: {
            includePaths: [path.resolve(__dirname, 'src')]
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'demo',
      template: 'public/index.html',
    })
  ]
}