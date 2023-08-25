<!--
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-08 10:43:43
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-24 09:51:38
 * @FilePath: \my-app\src\views\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div>
    <el-container>
      <el-aside width="auto"><common-aside /></el-aside>
      <el-container>
        <el-header><common-header /></el-header>
        <common-tag />
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";

export default {
  components: { CommonAside, CommonHeader, CommonTag },
  return: {},
};
</script>

<style>
.el-header {
  padding: 0;
}
</style>