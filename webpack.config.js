'use strict';

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: [
    './src/app.js',
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
