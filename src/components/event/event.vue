<template>
  <el-row>
  <el-col :span="8" v-for="item in event" :key="item.key">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="item.url" class="image">
      <div style="padding: 14px;">
        <span>{{ item.name }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.time }}</time><br>
          <el-button type="text" class="button" @click.native="goDetail">查看详情</el-button>
        </div>
      </div>
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
      event:[
        {
          url: require("@/components/poster/bombJam.png"),
          name:"炸舞阵线",
          time:"2020/10/16-17-18",
          key:'bombJam'
        }
      ],
      
    }
  },
  methods: {
      goDetail() {
        this.$router.push('/detail');
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
