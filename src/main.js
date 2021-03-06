import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './progress'
import store from './store'
import './assets/styles/index.scss'
import * as dayjs from 'dayjs'
import request from './utils/request'
// import { $dayjs } from './provides'
import mitt from 'mitt'
import common from './assets/js/common'


const app = createApp(App)
// 挂载Vue全局属性(不推荐) 使用getCurrentInstance().appContext.config.globalProperties获取属性
app.config.globalProperties.$dayjs2 = dayjs

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(common)
// app.use(dayjs)
// 挂载Vue全局属性(推荐) 使用依赖，注入方式。 provide挂载， inject获取
app.provide('$dayjs', dayjs)
app.provide('request', request);
app.provide('$mitt', mitt());

console.log('当前Vue版本：' + app.version)
app.mount('#app')
