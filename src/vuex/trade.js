import {gettradeinfo,getUserAddress} from '../ajax'
const state={
    tradeInfo:{},
    userAddress:[]
}

const actions={
    async gettradeinfo({ commit }) {
        const response = await gettradeinfo()
        if (response.code === 200) {
            commit('GETTRADEINFO', response.data)
        }
    },//发请求获取商品交易页信息
    async getUserAddress({ commit }) {
        const response = await getUserAddress()
        if (response.code === 200) {
            commit('GETUSERADDRESS', response.data)
        }
    },//发请求获取用户地址信息
}
const mutations={
    GETTRADEINFO(state,value){
        state.tradeInfo=value
    },
    GETUSERADDRESS(state,value){
        state.userAddress=value
    },
}

const getters={
    userAddress(state){
        return state.userAddress || []
    },
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    tradeInfo(state){
        return state.tradeInfo || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}