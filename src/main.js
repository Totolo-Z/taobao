import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'


Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePreview)



import './statics/mui/css/mui.css'
import 'mint-ui/lib/style.css'
import './statics/css/site.css'


Vue.filter('dateFmt', (input, dataFmtString) => {
  const lastFmtString = dataFmtString || 'YYYY-MM-DD HH:mm:ss'
  return moment(input).format(lastFmtString)
  return moment(input).format(dataFmtString || 'YYYY-MM-DD HH:mm:ss');

})


import App from './App.vue'



import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'
import mine from './components/mine/mine.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/gooslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', component: home },
    { path: '/category', component: category },
    { path: '/shotcart', component: shopcart },
    { path: '/mine', component: mine },
    { path: '/news/newslist', component: newslist },
    { path: '/news/newsinfo/:newsId', component: newsinfo },
    { path: '/photo/photolist', component: photolist },
    { path: '/photo/photoinfo/:photoId', component: photoinfo },
    { path: '/goods/goodslist', component: goodslist },
    { path: '/goods/goodsinfo/:goodsId', component: goodsinfo }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
