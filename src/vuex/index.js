import Vuex from 'vuex'
import Vue from 'vue'
import detail from './detail'
import home from './home'
import search from './search'
import cart from './cart'
import user from './user'
import register from './register'
import login from './login'
Vue.use(Vuex)

const state={
    
}

const actions={
   
}
const mutations={
    
}
const store=new Vuex.Store(
    {
        state,
        actions,
        mutations,
        modules:{
            home,search,detail,cart,user,register,login
        }
    }
)
export default store