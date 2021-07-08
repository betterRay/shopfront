import {reqSearchInfo} from '../ajax'
const state={
    searchInfo:{}
}

const actions={
   async getsearchInfo({commit},info){
        const response=await reqSearchInfo(info)
        if(response.code===200){
            commit('GETSEARCHINFO',response.data)
        }
    }
}
const mutations={
    GETSEARCHINFO(state,value){
        state.searchInfo=value
    }
}

const getters={
    attrsList(state){
        return state.searchInfo.attrsList || []
    },
    goodsList(state){
        return state.searchInfo.goodsList || []
    },
    trademarkList(state){
        return state.searchInfo.trademarkList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}