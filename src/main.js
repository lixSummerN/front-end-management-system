/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 09:27:25
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-25 15:43:50
 * @FilePath: \my-app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    // 判断token是否存在
    const token = Cookie.get('token')
    // token不存在说明未登录跳转至登录页
    if (!token && to.name !== 'login') {
        next({
            name: 'login'
        })
    } else if (token && to.name == 'login') {
        next({
            name: 'home'
        })
    } else {
        next()
    }
})

new Vue({
    render: h => h(App),
    router,
    store,
    // 初始化时添加菜单
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')