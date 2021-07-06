const path = require('path')

module.exports = {
  entry: './renderer.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'build.js'
  },
  mode: 'development'
}