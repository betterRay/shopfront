import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import loading from '@/assets/images/loading.jpg'
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
    loading,  // 指定未加载得到图片之前的loading图片
  })