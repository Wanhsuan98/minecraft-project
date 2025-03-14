const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/minecraft-project/' // test20200915 為 repo 名稱
    : '/',
    filenameHashing: false,
}