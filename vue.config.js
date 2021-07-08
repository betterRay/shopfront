let path = require('path')
function resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
            .set('_p', resolve('src/page'))
    },
    lintOnSave: false,
    devServer: {
        proxy: {
          '/api':{
            target: 'http://123.57.205.78'
          }
        },
      },
    
}


