const path = require('path')
const dist = path.join(__dirname, 'dist')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new (require('html-webpack-plugin'))({
      template: 'index.html',
    }),
  ]
}