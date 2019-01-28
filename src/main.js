import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
Vue.use(VueRx, Rx)

new Vue({
  render: h => h(App),
  Rx,
  VueRx
}).$mount('#app')
