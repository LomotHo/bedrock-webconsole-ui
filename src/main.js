import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import config from "../config"
import VueSocketIO from 'vue-socket.io'

config.serverUrl = window.location.host;

Vue.prototype.customConfig = config
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(new VueSocketIO({
  debug: false,
  connection: config.serverUrl,
  // connection: "192.168.8.30:3000",
  vuex: {
  }
}))


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
