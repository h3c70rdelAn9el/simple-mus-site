// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Musician Gridsome',
  plugins: [
   { 
    use: 'gridsome-plugin-tailwindcss',
    options: {
      shouldPurge: false
    }
  }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
}
