module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    {
      content: ['/src/**/*.vue'],
      options: {
        whitelist: ['my-special-class', 'other-class'],
        whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
      },
    },
  ],
  theme: {
    fontFamily: {
      sans: ['Niramit', 'Sans-serif'],
      title: ['David Libre', 'serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
