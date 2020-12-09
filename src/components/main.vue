<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24" style="align-content: left">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">soNice</template>
              <el-menu-item index="event">活动日历</el-menu-item>
              <el-menu-item index="aboutUs">关于我们</el-menu-item>
              <el-menu-item index="firstPage">主页</el-menu-item>
            </el-submenu>
          </el-menu>
          <!-- <el-dropdown trigger="click">
            <span class="el-dropdown-link"><i class="el-icon-setting el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-switch-button" @click.native="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </el-col>
      </el-row>
    </el-header>
    <el-container style="height: 100%">
      <el-main>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import soHeader from "@/components/common/header.vue";
import soMain from "@/components/common/main.vue";
import soFooter from "@/components/common/footer.vue";
export default {
  name: 'soMain',
  components: {
    'so-header':soHeader,
    'so-main':soMain,
    'so-footer':soFooter,

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex2:'/firstPage',
    }
  },
  mounted(){
    this.$router.push('firstPage');
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

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0;
  }
</style>
