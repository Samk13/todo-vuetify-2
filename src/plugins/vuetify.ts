import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

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
        error: "#bfc0c0",
        success: "#ef8354"
      }
    }
  }
});
