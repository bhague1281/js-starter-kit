// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  eslint: {
    configFile: './.eslintrc',
    fix: true
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],

  entry: [
    './src/main'
  ],

  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/',
    filename: 'dist/bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        exclude: /node_modules/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      }, {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }, {
        loader: 'style-loader!css-loader!sass-loader!postcss-loader',
        test: /\.scss$/
      }
    ]
  }
};
