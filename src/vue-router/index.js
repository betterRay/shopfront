import VueRouter from 'vue-router'
import Vue from 'vue'
import Search from '@/Page/Search'
import Login from '@/Page/Login'
import Home from '@/Page/Home'
import Register from '@/Page/Register'
import Cart from '@/Page/Cart'
import Detail from '@/Page/Detail'
import AddCart from '@/Page/AddCart'
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
VueRouter.prototype.push=function(location, onResolved, onRejected){
    if (onRejected == undefined && onResolved == undefined) {
        return originPush.call(this, location).catch(() => { })
    }
    else
        return originPush.call(this, location, onResolved, onRejected)
}


const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace=function(location, onResolved, onRejected){
    if (onRejected == undefined && onResolved == undefined) {
        return originReplace.call(this, location).catch(() => { })
    }
    else
        return originReplace.call(this, location, onResolved, onRejected)
}


export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/search/:keyword?',
            name:'search',
            component:Search
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },{
            path:'/addCart',
            name:'AddCart',
            component:AddCart
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/detail/:skuId?',
            name:'detail',
            component:Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
})