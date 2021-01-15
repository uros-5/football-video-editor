import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

let VueCookie = require("vue-cookie")
Vue.use(VueCookie)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
