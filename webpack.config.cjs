let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js')
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    watch: true,
    devtool: false
}
