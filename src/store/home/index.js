import {reqCategoryList,reqBannerList,reqFloorList} from '@/api/index'

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const actions = {
    async categoryList({commit}){
        const result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },

    async getBannerList({commit}){
        const result = await reqBannerList();
        if(result.code == 200){
            commit('BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        const result = await reqFloorList();
        if(result.code == 200){
            commit('FLOORLIST',result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const getters = {}

export default ({
    state,
    actions,
    mutations,
    getters
})