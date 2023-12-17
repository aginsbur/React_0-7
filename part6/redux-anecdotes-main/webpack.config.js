const path = require('path')

const config = () => {
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    }
  }
}

module.exports = config