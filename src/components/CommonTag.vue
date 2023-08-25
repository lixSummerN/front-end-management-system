<!--
 * @Author: lix lix@wujinbao.net
 * @Date: 2023-08-24 09:42:55
 * @LastEditors: lix lix@wujinbao.net
 * @LastEditTime: 2023-08-24 10:44:24
 * @FilePath: \my-app\src\components\CommonTag.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.label"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size='small'
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations(["closeTag"]),
    // 点击tags跳转的功能
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    // 点击tags删除的功能
    handleClose(item, index) {
      // 调用state中mutation
      this.closeTag(item);
      const length = this.tags.length;
      // 删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
      // 如果删除最后一项，删除完需跳转到前一项，否则跳转到后一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
    .tabs {
        padding: 20px;
        .el-tag {
            margin-right: 15px;
            cursor: pointer
        }
    }
</style>