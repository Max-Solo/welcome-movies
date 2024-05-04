module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      propList:['*'],
      minPixelValue: 3
    }
  }
}
