import { getToken,getUserinfo} from '../ajax'
import {justifyToken} from '@/utils/userabout.js'
const state = {
    token:justifyToken(),
    userinfo:{}
}

const actions = {
    async getToken({ commit },info) {
        const response = await getToken(info)
        if (response.code === 200) {
            commit('GETTOKEN',response)
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    },//登录获取token
    async getUserinfo({ commit }) {
        const response = await getUserinfo()
        if (response.code === 200) {
            commit('GETUSERINFO',response.data)
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    },//根据token获取用户信息
}

const mutations = {
    GETTOKEN(state,response){        
        localStorage.setItem('token',response.data.token)
        state.token=response.data.token
    },//自动登陆
    GETUSERINFO(state,response){
        state.userinfo=response
    },//将获取的数据给userinfo
}

const getters = {
    
}

export default {
    state,
    actions,
    mutations,
    getters
}