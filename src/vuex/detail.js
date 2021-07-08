import {reqGoodsDetail,addShopcart} from '../ajax'
const state={
    goodsDetail:{}
}

const actions = {
    async getGoodsDetail({ commit }, skuId) {
        const response = await reqGoodsDetail(skuId)
        if (response.code === 200) {
            commit('GETGOODSDETAIL', response.data)
        }
    },
    async addShopcart({ commit }, { skuId, skuNum }) {
        const response = await addShopcart(skuId, skuNum)
        if (response.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    }
}

const mutations={
    GETGOODSDETAIL(state,value){
        state.goodsDetail=value
    }
}

const getters={
    categoryView(state){
        return state.goodsDetail.categoryView || {}
    },
    spuSaleAttrList(state){
        return state.goodsDetail.spuSaleAttrList || []
    },
    skuInfo(state){
        return state.goodsDetail.skuInfo || {}
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}