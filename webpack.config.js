const convPaths = require('convert-tsconfig-paths-to-webpack-aliases').default;

const tsconfig = require('./tsconfig.json');

const aliases = convPaths(tsconfig);

module.exports = {
  resolve: {
    alias: aliases,
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}