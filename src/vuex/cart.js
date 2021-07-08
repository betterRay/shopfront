import { getShopcart,deleteItem,changeChecked } from '../ajax'
const state = {
    cartList: []
}

const actions = {
    async getShopcart({ commit }) {
        const response = await getShopcart()
        if (response.code === 200) {
            commit('GETSHOPCART', response.data)
        }
    },
    async deleteItem({ commit }, skuId) {
        const response = await deleteItem(skuId)
        if (response.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    },
    async changeChecked({ commit }, {skuId,isChecked}) {
        const response = await changeChecked(skuId,isChecked)
        if (response.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(() => { return "失败了" })
        }
    }
}
const mutations = {
    GETSHOPCART(state, value) {
        state.cartList = value
    }
}

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}