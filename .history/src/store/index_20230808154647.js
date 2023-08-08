/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 15:37:21
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-08 15:46:44
 * @FilePath: \my-app\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

// 创建vuex实例
export default new Vuex.Store({
    modules: {
        tab
    }
})