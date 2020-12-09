<template>
  <el-row>
  <el-col :span="24">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>{{form.name}}</span>
      </div>
         <!-- <img :src="url" class="image"> -->
        
    </el-card>
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
      // url:require("@/components/contect/soNice.png"),
      // url2:require("@components/contect/soNice2.png"),
      // url3:require("@/components/contect/wechart.png"),
      // url4:require("@/components/contect/wechart2.png"),
      form:{
          name:"soNice",
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
