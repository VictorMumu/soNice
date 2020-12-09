<template>
  <div class="block" style="text-align:center">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in img" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item.url" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
  <video src="https://v.youku.com/v_show/id_XNDA3Nzg5NzUzNg==.html" class="liveShow" controls="controls"> 您的浏览器不支持 video 标签。 </video>
  </div>
  
</template>

<script>
export default {
  name: 'soMain',
  data () {
    return {
      img:[
        {url:"components/poster/bombJam.png"},
        {url:"components/poster/dww.png"}
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .liveShow{
   width:60%;
 }
</style>
