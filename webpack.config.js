const path = require('path');

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example'),
    // libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'lib',
      'node_modules',
    ],
  },
  // watch: true,
};
