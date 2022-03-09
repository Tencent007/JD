import { reqGetCode, reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from "@/api"

const state = {
    code: '',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const actions = {
    async getPhoneCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETPHONECODE', result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({ commit }, data) {
        let result = await reqUserRegister(data)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code == 200){
            commit('USERLOGIN',result.data.token)
            localStorage.setItem('TOKEN',result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('GETUSERINFO',result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code == 200){
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETPHONECODE(state, phone) {
        state.code = phone;
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = '',
        state.userInfo = {},
        localStorage.removeItem('TOKEN')
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}