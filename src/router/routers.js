// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Search from '../pages/Search'
// import Register from '../pages/Register'
// import Detail from '../pages/Detail'
// import AddCartSuccess from '../pages/AddCartSuccess'
// import ShopCart from '../pages/ShopCart'
// import Trade from '../pages/Trade'
// import Pay from '../pages/Pay'
// import PaySuccess from '../pages/PaySuccess'
// import Center from '../pages/Center'
// import MyOrder from '../pages/Center/myOrder'
// import GroupOrder from '../pages/Center/groupOrder'

export default [
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: { show: true },
        children: [
            {
                name: 'myOrder',
                path: 'myOrder',
                component: () => import('@/pages/Center/myOrder'),
                meta: { show: true }
            },
            {
                name: 'groupOrder',
                path: 'groupOrder',
                component: () => import('@/pages/Center/groupOrder'),
                meta: { show: true }
            },
            {
                path: '',
                redirect: 'myOrder'
            }
        ]
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true }
    },
    {
        name: 'pay',
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false)
            }
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            } else {
                next(false)
            }
        }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: '/detail/:skuId',
        component: () => import('@/pages/Detail'),
        meta: { show: true }
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    {
        name: 'Search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: { show: true }
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: '*',
        redirect: '/home'
    }
]