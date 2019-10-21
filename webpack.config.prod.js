const baseConfig = require('./webpack.config.js')

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10
        },
      }
    },
  }
})
