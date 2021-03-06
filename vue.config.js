/* eslint-disable prefer-destructuring */
const path = require('path')

module.exports = {
  // devServer: {
  //   proxy: {
  //     '/v1': {
  //       target: 'https://dex.ceo/', // 线上环境
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/style/global.scss')
      ]
    }
  }
};
