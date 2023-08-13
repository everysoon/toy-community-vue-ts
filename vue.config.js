const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      scss: { additionalData: ` @import "@/styles/_variables.scss"; ` }
    }
  }
});
