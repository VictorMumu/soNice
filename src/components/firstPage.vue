<template>
  <el-row>
  <el-col :span="24">
    
          <img :src="form.url" class="image">
        
  </el-col>
</el-row>
</template>

<script>

export default {
  name: 'event',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

      form:{
          url: require("@/components/contect/soNice.png"),
          name:"炸舞阵线",
          time:"2020/10/16-17-18"
        },
      
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
