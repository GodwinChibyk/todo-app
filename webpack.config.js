module.exports = {
    entry : `${__dirname}/ui/assets/js/app.js`,
    output: {
      path : `${__dirname}/dist`,
      filename: 'build.js',
      publicPath: '/'
    } ,
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
      devServer: {
        contentBase: './dist'
      }
  }