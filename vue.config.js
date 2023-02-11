const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer: { 
  //   proxy: { 
  //     '/api': { 
  //       target: 'http://localhost:3000/api',
  //       changeOrigin: true, 
  //       pathRewrite: { 
  //         '^/api': ''
  //       } 
  //     } 
  //   } 
  // },
  // outputDir: '../src/main/resources/static',
  outputDir: '../dists/static',
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/assets/style.scss";'
      }
    }
  }
})
