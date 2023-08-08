
<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu()" icon="el-icon-menu"></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <img class="user" src="../assets/images/user.png">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    return: {
        
    },
    methods: {
      handleMenu() {
        this.$store.commit('collapseMenu')
      }  
    }
}
</script>

<style lang='less' scoped>
    .header-container {
        background-color: #333;
        height: 60px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content{
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
</style>