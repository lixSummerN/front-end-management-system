<!--
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 09:27:25
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-08 16:19:36
 * @FilePath: \my-app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">


<!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='less'>
    html,body,h3 {
        margin: 0;
        padding: 0;
    }
</style>