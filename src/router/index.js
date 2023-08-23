
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

Vue.use(VueRouter)

// 1.创建路由组件
// 2.路由映射组件
// 3.创建router实例
// 4.在main.js上挂载路由

const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            //子路由
            {
                path: 'home',
                component: Home
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'mall',
                component: Mall
            },
            {
                path: 'page1',
                component: PageOne
            },
            {
                path: 'page2',
                component: PageTwo
            },
        ]
    },
]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    routes
})

export default router