const path = require('path');

module.exports = {
  entry: {
    index: './publique/index.js',
    search: './publique/search.js',
    movie: './publique/movie.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
