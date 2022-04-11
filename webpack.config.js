const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    amfeFlexible: './src/amfeFlexible.js',
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(htm|html)$/i,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]'
        }
      },
      // 处理scss文件
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env'],
                  require('postcss-pxtorem')({
                    rootValue: 37.5,
                    // 使用px2rem的css选择器
                    // propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', '*border*']
                    propList: ['*', '!border']
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', //重命名输出的css文件，也可不写默认
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/library', to: 'library' },
        { from: 'src/css/index.scss', to: 'css/main.scss' }
      ]
    })
  ],
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
    compress: true, // gzip压缩
    port: 'auto', //
    open: false //自动打开浏览器
  }
}
