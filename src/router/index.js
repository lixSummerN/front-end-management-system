/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 10:17:36
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-25 13:26:59
 * @FilePath: \my-app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

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
        name: 'main',
        redirect: '/home',
        children: [
            // //子路由
            // {
            //     path: 'home',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: 'user',
            //     name: 'user',
            //     component: User
            // },
            // {
            //     path: 'mall',
            //     name: 'mall',
            //     component: Mall
            // },
            // {
            //     path: 'page1',
            //     name: 'page1',
            //     component: PageOne
            // },
            // {
            //     path: 'page2',
            //     name: 'page2',
            //     component: PageTwo
            // },
        ]
    },
    // 登陆
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
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