const routers = [
    {
        path: '/computingPowerDenter',
        name: 'computingPowerDenter',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/computingPowerDenter/computingPowerDenter.vue')
    },
    {
        path: '/userDetails',
        name: 'userDetails',
        redirect: '/userDetails/details',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/userDetails.vue'),
        children: [{
            path: 'dashBoard',
            name: 'dashBoard',
            component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/detailPages/dashBoard.vue'),
        }, {
            path: 'details',
            name: 'details',
            component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/detailPages/details.vue'),
        }, {
            path: 'myPay',
            name: 'myPay',
            component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/detailPages/myPay.vue'),
        }, {
            path: 'orderForm',
            name: 'orderForm',
            component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/detailPages/orderForm.vue'),
        }, {
            path: 'quit',
            name: 'quit',
            component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/detailPages/quitLogin.vue'),
        }]
    }, {
        path: '/shopCar',
        name: 'shopCar',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/shopCar/shopCar.vue')
    },
]
export default routers