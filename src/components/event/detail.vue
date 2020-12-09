<template>
  <el-row>
  <el-col :span="24">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>{{form.name}}</span>
       
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动海报">
          <img :src="form.url" class="image">
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-input v-model="form.time" readonly></el-input>
        </el-form-item>
      </el-form>
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

      form:{
          url: require("@/components/poster/bombJam.png"),
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
