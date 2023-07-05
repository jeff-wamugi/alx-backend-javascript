const path = require('path');

module.exports = {
  entry: './js/subjects/main.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    // create a bundle in the dist folder
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}
