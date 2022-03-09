import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入三级联动全局组件
import TypeNav from '@/components/TypeNav'
//引入轮播图全局组件
import Carousel from '@/components/Carousel'
//引入分页器全局组件
import Pagination from '@/components/Pagination'
//引入store仓库数据
import store from './store'
//引入商品数据
import {reqCategoryList} from './api'
//引入虚拟的mock数据
import '@/mock/mockServer'
//引入轮播图数据
import 'swiper/css/swiper.css'
import * as API from '@/api'
import {MessageBox} from 'element-ui'
import jd from '@/asset/jd.jpg'
import VueLazyload from 'vue-lazyload'
//引入表单校验插件
import "@/plugins/validate";
Vue.use(VueLazyload,{
  loading:jd
})
reqCategoryList();
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$api = API;
  },
  router,
  store
}).$mount('#app')
