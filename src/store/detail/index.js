import {reqGoodsList,reqAddOrUpdateShopCar} from '@/api/index'
import {getUUID} from '@/utils/uuid_token'

const state = {
    goodInfo:{},
    uuid_token:getUUID()
}
const actions = {
    //获取产品信息
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsList(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    //将产品添加到购物车
    async addOrUpdateShopCar({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCar(skuId,skuNum);
        if(result.code == 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default ({
    state,
    actions,
    mutations,
    getters
})