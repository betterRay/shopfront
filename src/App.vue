<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  mounted() {
        this.$store.dispatch('getBaseCategoryList')
        //挂载时发请求获取数据
  },
  components: {
    Header,Footer
  }
}
</script>

<style>

</style>
