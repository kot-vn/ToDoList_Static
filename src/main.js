import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import * as bootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(bootstrapVue.IconsPlugin);
Vue.use(bootstrapVue.BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
