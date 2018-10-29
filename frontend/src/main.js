import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFlashMessage from "vue-flash-message";
import { flashOptions } from "./helpers/helpers";
import "vue-flash-message/dist/vue-flash-message.min.css";
import "semantic-ui-css/semantic.css";

Vue.config.productionTip = false;
Vue.use(VueFlashMessage, { messageOptions: flashOptions });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
