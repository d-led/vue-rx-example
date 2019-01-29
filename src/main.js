import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

Vue.config.productionTip = false

Vue.use(VueRx, Rx);

new Vue({
  render: h => h(App)
}).$mount('#app')
