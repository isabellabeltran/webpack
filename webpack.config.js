const path = require('path'); 

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }, 
  module: {
    preloaders: [
      {
        test: /\.js$/, 
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.coffee$/, 
        loader: 'coffee-loader', 
        exclude: /node_modules/ 
      },
      {
        // the question mark makes the a optional cause sometimes people spell yaml without the a
        test: /\.ya?ml$/, 
        loader: ['json-loader', 'yaml-loader'], 
        include: path.resolve(__dirname, 'config') 
      },
      {
        test: /\.ts$/, 
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'ts')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/, 
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}