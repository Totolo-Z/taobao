<template>
    <div>
        <div class="titleStyle">
            <h5>{{photoInfo.title}}</h5>
            <p>
                <span>{{photoInfo.add_time|dateFmt('YYYY-MM-DD HH:mm')}}</span>&nbsp;&nbsp;
                <span>第{{photoInfo.click}}次浏览</span>
            </p>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for='(item,index) in photoArr' :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <!-- <img :src="item.src"  height="100" class="preview-img"> -->
                    <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, photoArr)">
                </li>
            </ul>
        </div>
        <div class="contentStyle">
            <p v-html="photoInfo.content"></p>
        </div>

        <subcomponents :commentId="this.$route.params.photoId"></subcomponents>
    </div>
</template>
<style scoped>
h5 {
    color: #0094ff;
    font-size: 16px;
}

.titleStyle,
.contentStyle {
    padding: 8px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0px;
}
</style>
<script>
import common from '../common/common.js';
import subcomponents from '../subcomponents/subcomment.vue'
export default {
    data() {
        return {
            photoInfo: {},
            photoArr: []
        }
    },
    created() {
        this.getPhotoInfoData();
        this.getphoto();
    },
    methods: {
        getPhotoInfoData() {
            const url = common.apihost + 'api/getimageInfo/' + this.$route.params.photoId
            this.$http.get(url).then(response => {
                this.photoInfo = response.body.message[0]
                console.log(this.photoInfo)
            }, err => {
                console.log(err)
            })
        },
        getphoto() {
            const url = common.apihost + 'api/getthumimages/' + this.$route.params.photoId
            this.$http.get(url).then(response => {
                this.photoArr = response.body.message
                response.body.message.forEach(item => {
                    item.w = 400;
                    item.h = 400
                });
                console.log(this.photoInfo)
            }, err => {
                console.log(err)
            })
        }
    },
    components: {//注册
        subcomponents
    }
}
</script>

