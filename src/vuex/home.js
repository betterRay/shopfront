import {allGoodsType,logout} from '../ajax'
const state={
    categoryList:{}
}

const actions={
    async getBaseCategoryList({ commit }) {
        const response = await allGoodsType()
        if (response.code === 200) {
            commit('GETBASECATEGORYLIST', response.data)
        }
    },
    async logout({ commit }) {
        const response = await logout()
        if (response.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    }
}
const mutations={
    GETBASECATEGORYLIST(state,value){
        state.categoryList=value
    }
}

export default {
    state,
    actions,
    mutations
}