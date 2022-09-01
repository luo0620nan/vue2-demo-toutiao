// 这个文件是 vue-cli 创建出来的项目配置文件
// 在 vue.config.js 这个配置文件中，可以对整个项目的打包，构建进行全局性的配置
// const { defineConfig } = require('@vue/cli-service')

// webpack 在进行打包的时候，底层用到了 node.js
// 因此，在 vue.config.js 配置文件中，可以导入并使用 node.js 中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 太麻烦，每次修改就要重新打包运行服务器
            // 'nav-bar-background-color': 'red',  <= 弃用
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // ../ ./ theme.less   是相对路径
            // 从盘符开始的路径，叫做绝对路径 C:\\Users\\75039\\theme.less
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
}
