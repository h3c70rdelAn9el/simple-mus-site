// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const purgecssConfig = require('./purgecss.config')
const postcssPlugins = [
  tailwindcss(),
  autoprefixer(),
]

module.exports = {
  siteName: 'Musician Gridsome',
  // icon: 'src/favicon.png',
  plugins: [
   { 
    use: 'gridsome-plugin-tailwindcss',
  }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
