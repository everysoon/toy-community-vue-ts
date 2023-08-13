import Vue from "vue";
// import Vuetify from "vuetify/lib/framework";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        gray: "#bbbbbb",
        error: "#FF7A00",
        blue: "#349EFF",
        "light-gray": "#dfdfdf",
        "g-f3": "#f3f3f3",
        "g-f5": "#f5f5f5",
        "g-f7": "#f7f7f7",
        "g-9": "#999999",
        "g-7": "#777777",
        "g-8": "#888888",
        "g-d": "#dddddd",
        "g-6": "#666666",
        black: "#222222",
        black3: "#333333",
        red: "#FF3333",
        "red-light": "#ffeeee"
      }
    }
  }
});
