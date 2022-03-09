import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import shopCart from './shopCart'
import user from './user'
import trade from './trade'

Vue.use(Vuex)

//模块化
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopCart,
        user,
        trade,
    }
})