import { getToken } from '../ajax'
import {justifyToken} from '@/utils/userabout.js'
const state = {
    token:justifyToken()
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
}

const mutations = {
    GETTOKEN(state,response){        
        localStorage.setItem('token',response.data.token)
        state.token=response.data.token
    }
}

const getters = {
    
}

export default {
    state,
    actions,
    mutations,
    getters
}