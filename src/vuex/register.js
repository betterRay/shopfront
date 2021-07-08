import { register,getCode } from '../ajax'
const state = {
    code:''
}

const actions = {
    async getCode({ commit },phone) {
        const response = await getCode(phone)
        if (response.code === 200) {
            commit('GETCODE',response)
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    },//获取验证码
    async register({ commit }, info) {
        const response = await register(info)
        if (response.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    },//注册账号
}

const mutations = {
    GETCODE(state,response){
        state.code=response.data
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