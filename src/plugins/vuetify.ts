import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#4f5d75",
        secondary: "#2d3142",
        info: "#ffffff",
        error: "#c24343",
        success: "#ef8354"
      }
    }
  }
});
