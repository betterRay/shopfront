import VueRouter from 'vue-router'
import Vue from 'vue'
import Search from '@/Page/Search'
import Login from '@/Page/Login'
// import Home from '@/Page/Home'
const Home =()=>import('@/Page/Home')
import Register from '@/Page/Register'
import Cart from '@/Page/Cart'
import Detail from '@/Page/Detail'
import AddCart from '@/Page/AddCart'
import store from '../vuex'
import Trade from '@/Page/Trade'
import Pay from '@/Page/Pay'
import Paysuccess from '@/Page/Paysuccess'
import MyOrder from '@/Page/myOrder'
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



const router=new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/trade',
            name:'trade',
            component:Trade,
            beforeEnter: (to, from, next) => {
                if (from.path === '/cart') {
                    next()
                } else {
                    alert('请先确认购物车商品再结算')
                    next('/')
                }
            }
        },
        {
            path:'/myOrder',
            name:'myOrder',
            component:MyOrder
        },
        {
            path:'/pay',
            name:'pay',
            component:Pay,
            beforeEnter: (to, from, next) => {
                if (from.path === '/trade') {
                    next()
                } else {
                    alert('请先确认提交订单！')
                    next('/')
                }
            }
        },
        {
            path:'/paysuccess',
            name:'paysuccess',
            component:Paysuccess,
            beforeEnter: (to, from, next) => {
                if (from.path === '/pay') {
                    next()
                } else {
                    alert('请先确认支付成功！')
                    next('/')
                }
            }
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
            component:AddCart,
            beforeEnter:(to, from, next)=>{
                let skuNum=to.query.skuNum
                let skuInfo=sessionStorage.getItem('addShopcart')
                if(skuInfo&&skuNum){
                    next()
                }
              }
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

router.beforeEach(async(to, from, next) => {
    let token=store.state.login.token
    let userinfo=store.state.login.userinfo.name
    if(token){
        if(to.path==='/login'){
            next('/')
            //如果token存在且还是去的登录页，转而去home页
        }else{
            //如果token存在且不是去的登录页，判断用户信息是否存在
            if(userinfo){
                //存在，直接去
                next()
            }else{
                //不存在，发请求获取用户信息
                try {
                    //请求成功，直接去
                    await store.dispatch('getUserinfo')
                    next()
                } catch (error) {
                    //请求失败，认为token已失效，需重置token,重新登录
                    token=0
                    localStorage.removeItem('token')
                    next('/login')
                }
            }
            
        }
    }else{
        //去交易页等时如果没token则去登录页登录
        if(to.path==='/trade'||to.path==='/pay'||to.path==='/paysuccess'||to.path.indexOf('/myOrder')!==-1){
            let path=to.path
            next(`/login?path=${path}`)
        }
        next()
    }
  })

export default router