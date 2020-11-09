// module.exports = {
//   content: [
//     "./src/**/*.vue",
//     "./src/**/*.js",
//     "./src/**/*.jsx",
//     "./src/**/*.html",
//     "./src/**/*.pug",
//     "./src/**/*.md",
//   ],
//   whitelist: [
//     "body",
//     "html",
//     "img",
//     "a",
//     "g-image",
//     "g-image--lazy",
//     "g-image--loaded",
//     "fa"
//   ],
//   extractors: [
//     {
//       extractor: (content) => content.match(/[A-z0-9-:\\/]+/g),
//       extensions: ["vue", "js", "jsx", "md", "html", "pug"],
//     },
//   ],
// };


// module.exports = {
//   content: [
//     './src/**/*.vue',
//     './src/**/*.js',
//     './src/**/*.jsx',
//     './src/**/*.html',
//     './src/**/*.pug',
//     './src/**/*.md',
//   ],
//   whitelist: ['svg:not(:root).svg-inline--fa'],
//   whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
//   whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// }
