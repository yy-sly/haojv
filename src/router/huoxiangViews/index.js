const routers = [
    {
        path: '/computingPowerDenter',
        name: 'computingPowerDenter',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/computingPowerDenter/computingPowerDenter.vue')
    },
    {
        path: '/userDetails',
        name: 'userDetails',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/userDetails/userDetails.vue')
    },{
        path: '/shopCar',
        name: 'shopCar',
        component: () => import(/* webpackChunkName: "about" */ '../../views/huoxingViews/shopCar/shopCar.vue')
    },
]
export default routers