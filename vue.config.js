module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/stylesheets/_variables.scss";`,
      },
    },
  },
};
