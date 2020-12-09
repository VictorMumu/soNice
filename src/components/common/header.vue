<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">处理中心</template>
    <el-menu-item index="/event">活动日历</el-menu-item>
    <el-menu-item index="2-2">关于我们</el-menu-item>
  </el-submenu>
</el-menu>
</template>

<script>
export default {
  name: 'soHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex2:'/event',
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-button{
    color: #606266;
    float:right;
    line-height: 30px;
    background: url('/src/assets/contect/soNice.png');
  }
</style>
