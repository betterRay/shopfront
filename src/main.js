import Vue from 'vue'
import {MessageBox,Message,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue'
import 'swiper/css/swiper.min.css'
import store from './vuex'
import router from './vue-router'
import Pager from './components/Pager'
import * as API from '@/ajax'
import SearchNav from './components/searchNav'
import '@/utils/pic-lazyload'
import '@/utils/vee-validate'

Vue.config.productionTip = false


Vue.component('SearchNav',SearchNav)
Vue.component('Pager',Pager)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$API=API
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
Vue.use(Button)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
    
  },//安装全局事件总线
  store,
  router,
  render: h => h(App),
}).$mount('#app')


