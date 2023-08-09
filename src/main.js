import { createApp } from 'vue'
import router from './router'
import store from './store'
import './assets/style/style.css'
import App from './App.vue'
import Common from './common/common'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import animated from 'animate.css'

let Vue = createApp(App)

Vue.provide('Common', Common)

Vue.use(store).use(router).use(animated).use(ElementPlus).mount('#app')

