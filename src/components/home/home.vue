<template>
  <!-- 轮播 -->
  <div>
    <mt-swipe class="swipeBox" :auto="2000">
      <mt-swipe-item v-for="item in lunboArray" :key="item.url">
        <a :href="item.url">
          <img :src="item.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/goods/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<style scoped>
.swipeBox {
  width: 100%;
  height: 250px;
}

img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:0;
}
.mui-icon{
  width: 50px;
  height: 50px;
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
  content: '';
}
 .mui-icon-home{
  background-image: url(../../statics/images/menu3.png);
  background-size:cover;
} 
.mui-icon-email{
 background-image: url(../../statics/images/menu4.png);
  background-size:cover;
}
.mui-icon-chatbubble{
 background-image: url(../../statics/images/menu5.png);
  background-size:cover;
}
.mui-icon-location{
 background-image: url(../../statics/images/menu6.png);
  background-size:cover;
}
.mui-icon-search{
 background-image: url(../../statics/images/menu9.png);
  background-size:cover;
}
.mui-icon-phone{
 background-image: url(../../statics/images/menu10.png);
  background-size:cover;
}
</style>




<script>
import common from '../common/common.js'
export default {
  data: function() {
    return {
      lunboArray: []
    }
  },
  created() {
    this.getLunBoData()

  },
  methods: {
    getLunBoData: function() {
      const url = common.apihost + 'api/getlunbo'
      this.$http.get(url).then(function(response) {
        // console.log(response.data)
        this.lunboArray = response.body.message
      }, function(error) {

      })
    }
  }
}
</script>
