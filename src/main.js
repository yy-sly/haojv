import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/style/style.css'
import App from './App.vue'
import Common from './common/common'


let Vue = createApp(App)

Vue.provide('Common',Common)

Vue.use(store).use(router).mount('#app')
Vue.config.globalProperties.$GLOBAL = Common//conmon里面定义的常量

