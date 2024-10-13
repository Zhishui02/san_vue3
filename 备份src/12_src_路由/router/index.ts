import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //确定路由工作模式
  routes: [
    {
      path:'/',
      redirect:'/home',
    },
    {
      name:'home',
      path:'/home',
      component:()=>import('@/views/Home.vue')
    },
    {
      name:'news',
      path:'/news',
      component:()=>import('@/views/News.vue'),
      children:[
        {
          name:'detail',
          path:'detail',
          component:()=>import('@/views/Detail.vue'),

          // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
          // props:true

          // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
          /*props(route){
            // console.log(route)
            return route.query
          }*/
        }
      ]
    },
    {
      name:'about',
      path:'/about',
      component:()=>import('@/views/About.vue')
    },
  ]
})

export default router
