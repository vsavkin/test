const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app.module.ts',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js",
    libraryTarget: 'commonjs'
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
      skipCodeGeneration: true,
      entryModule: './app.module.ts#AppModule'
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
