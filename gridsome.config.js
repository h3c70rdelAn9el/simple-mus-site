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

// class TailwindExtractor {
//   static extract(content) {
//     return content.match(/[A-Za-z0-9-_:\/]+/g) || []
//   }
// }


module.exports = {
  siteName: 'Musician Gridsome',
  plugins: [
   { 
    use: 'gridsome-plugin-tailwindcss',
  }
  ],
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: 
  //         postcssPlugins,
  //         tailwindcss
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg')
  //   svgRule.uses.clear()
  //   svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  //   // if (process.env.NODE_ENV === 'production')
  //   //   postcssPlugins.push(purgecss(purgecssConfig))
  //   if (process.env.NODE_ENV === 'production') {
  //         options.plugins.push(...[
  //           require('@fullhuman/postcss-purgecss')({
  //             content: [
  //               'src/assets/**/*.css',
  //               'src/**/*.vue',
  //               'src/**/*.js'
  //             ],
  //             extractors: [
  //               {
  //                 extractor: TailwindExtractor,
  //                 extensions: ['css', 'vue', 'js']
  //               }
  //             ],
  //             whitelist: ['svg-inline--fa'],
  //             whitelistPatterns: [/shiki/, /fa-$/]
  //           })
  //         ])
  //       }
  //       return options
  //     }),
  // },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
    // config.module
    //   .rule('css')
    //   .oneOf('normal')
    //   .use('postcss-loader')
    //   .tap((options) => {
    //     options.plugins.unshift(
    //       ...[
    //         require('postcss-import'),
    //         require('postcss-nested'),
    //         require('tailwindcss'),
    //       ]
    //     )
    //     if (process.env.NODE_ENV === 'production')
    //     postcssPlugins.push(purgecss(purgecssConfig))

        // if (process.env.NODE_ENV === 'production') {
        //   options.plugins.push(
        //     ...[
        //       require('@fullhuman/postcss-purgecss')(
        //         {
        //           content: [
        //             'src/assets/**/*.css',
        //             'src/**/*.vue',
        //             'src/**/*.js',
        //           ],
        //           // extractors: [
        //           //   {
        //           //     extractor: TailwindExtractor,
        //           //     extensions: [
        //           //       'css',
        //           //       'vue',
        //           //       'js',
        //           //     ],
        //           //   },
        //           // ],
        //           // whitelist: [
        //           //   'svg-inline--fa',
        //           // ],
        //           // whitelistPatterns: [
        //           //   /shiki/,
        //           //   /fa-$/,
        //           // ],
        //         }
        //       ),
        //     ]
        //   )
        // }
        // return options
      // })
  }
}
