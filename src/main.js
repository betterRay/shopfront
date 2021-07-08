import Vue from 'vue'
import App from '@/App.vue'
import 'swiper/css/swiper.min.css'
import store from './vuex'
import router from './vue-router'
import Pager from './components/Pager'

Vue.config.productionTip = false

import SearchNav from './components/searchNav'

Vue.component('SearchNav',SearchNav)
Vue.component('Pager',Pager)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
  },//安装全局事件总线
  store,
  router,
  render: h => h(App),
}).$mount('#app')


