module.exports = {
  publicPath: process.env.BASE_URL,
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096,
        name: 'fonts/[name].[ext]'
      })
  },
  devServer: {
    disableHostCheck: true
  }
}
