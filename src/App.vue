<template>
  <div id="app">
    <!--  -->
    <mt-header fixed title="淘宝"></mt-header>
    <div v-show="isShowBack" @click="goBack" class="backStyle">&lt;返回</div>
    <!--  -->
    <router-view class="centerContent"></router-view>

    <!--  -->
    <mt-tabbar :class="isHideTabBar? 'hideTabBarStyle':''" fixed>
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcart">
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/mine">
          <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>



<style scoped>
.centerContent {
  margin-top: 40px;
}

.mint-tabbar {
  background-color: #fff;
}

.mint-tabbar>.mint-tab-item.is-selected {
  background-color: #fff;
}

img {
  width: 42px;
  height: 35px;
}

.backStyle {
  position: fixed;
  left: 8px;
  top: 8px;
  color: #fff;
  z-index: 2;
  font-size: 12px;
}

.hideTabBarStyle {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      isShowBack: false,
      isHideTabBar: false
    }
  },
  created() {
    this.isShowOrHide(this.$route.path)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    isShowOrHide(path) {
      if (path != '/home') {
        this.isShowBack = true
        this.isHideTabBar = true
      } else {
        this.isShowBack = false
        this.isHideTabBar = false
      }
    }
  },
  watch: {
    $route: function(newVal, oldVal) {
        this.isShowOrHide(newVal.path)
    }
  }
}

</script>
   