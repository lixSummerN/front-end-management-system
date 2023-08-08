/*
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 09:27:25
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-08 10:37:51
 * @FilePath: \my-app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import {Row, Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Button)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
