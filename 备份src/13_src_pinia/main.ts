import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 1.引入pinia
import {createPinia} from 'pinia'

//创建一个应用
const app = createApp(App)

// 2.创建pinia
const pinia = createPinia()
// 3.使用pinia
app.use(pinia)
app.use(router)

// 挂载整个应用到app容器中
app.mount('#app')
