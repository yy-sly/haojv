const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  pwa: {
    iconPaths: {
      favicon32: './icon.png',
      favicon16: './icon.png',
      appleTouchIcon: './icon.png',
      maskIcon: './icon.png',
      msTileImage: './icon.png'
    }
  }
})
