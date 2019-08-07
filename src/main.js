import Vue from "vue";
import "./plugins/axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Select, Table, Pagination, Card } from "element-ui";

Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Card);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
