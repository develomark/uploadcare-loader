var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'entry.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: '../../index.js',
        query: {
          publicKey: 'demopublickey',
          privateKey: 'demoprivatekey',
          statsFilePath: path.join(__dirname, 'public', 'uploadcare.json'),
          resourcePathDivider: 'src',
        },
      },
    ],
  },
};
