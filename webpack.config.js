const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    new MiniCssExtractPlugin({
      filename: 'app.bundle.[contenthash].css'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: 'global', sourceMap: true } }, 'sass-loader']
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader', options: { configFile: 'tsconfig.webpack.json' } },
      },
    ]
  },
  resolve: {
    alias: {
      Services: path.resolve(__dirname, 'src/services/')
    }
  }
}

module.exports = config
