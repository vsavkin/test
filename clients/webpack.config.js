const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './main.ts',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js",
    libraryTarget: 'commonjs'
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: './main.ts'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
