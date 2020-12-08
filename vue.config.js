module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/__index.scss";`
      }
    }
  },
  publicPath: ""
};
