/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 15:41:10
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-25 15:33:59
 * @FilePath: \my-app\src\store\tab.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Cookie from "js-cookie"
export default {
    state: {
        isCollapse: false, // 控制菜单的展开收起
        tabsList: [{
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        }], // 面包屑数据
        // 菜单数据
        menu: []
    },
    mutations: {
        // 修改菜单展开收起方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            console.log(val, 'val')
            // 判断添加的数据是否为首页
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name) // 此方法可判断数值位于list中的索引位置，不存在就是-1
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        // 删除指定的tags数据
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        // 设置menu得数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由，防止从url进入未获取权限的页面
        addMenu(state, router) {
            // 判断缓存中是否有数据
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // 组装动态路由数据
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            // 路由动态添加
            menuArray.forEach(item => {
                router.addRoute('main', item)
            })
        }
    }
}