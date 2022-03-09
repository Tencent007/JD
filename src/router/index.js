import Vue from "vue";
import VueRouter from "vue-router";
import routers from './routers'
import store from '../store'

Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写VueRouter的原型对象的push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

//重写VueRouter的原型对象的replace方法
VueRouter.prototype.replace = function (location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    } else {
        originReplace.call(this,location,()=>{},()=>{});
    }
}

let router = new VueRouter({
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

//前置路由守卫，用来验证用户是否已经登陆并做相应处理
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //token存在证明用户登录了
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            //如果名字存在则放行去其他页面,否则发送请求获取用户信息
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效过期，清除过期的token，返回登录页
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        //如果没token则得去登录页
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath)
        } else {
            next();
        }
    }
})

export default router;