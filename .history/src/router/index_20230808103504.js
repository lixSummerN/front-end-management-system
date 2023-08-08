/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 10:17:36
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-08 10:31:33
 * @FilePath: \my-app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

// 1.创建路由组件
// 2.路由映射组件
// 3.创建router实例

const routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/user',
        component: User
    }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)