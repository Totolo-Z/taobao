<template>
    <div>
        <div class="imageCategoryStyle">
            <ul ref="ulRel">
                <li @click="getImageContentData(0)">全部</li>
                <li v-for="item in imageCategoryList" :key="item.id" @click="getImageContentData(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="imageListStyle">
            <ul>
                <li v-for="item in imageContentList" :key='item.id'>
                    <router-link :to="'/photo/photoinfo/'+item.id">
                        <img :src="item.img_url">
                        <p>
                            <span>{{item.title}}</span><br> {{item.zhaiyao}}
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.imageCategoryStyle {
    overflow: scroll;
}

.imageCategoryStyle ul {
    width: 500%;
    list-style: none;
    margin: 0 5px;
    padding: 0;
}

.imageCategoryStyle ul li {
    float: left;
    margin: 5px;
    height: 30px;
    color: #26a2ff;
}

.imageListStyle ul {
    margin: 3px 0px;
    padding: 0;
    list-style: none;
}

.imageListStyle ul li {
    padding: 2px;
    position: relative;
}

img {
    width: 99%;
    height: 400px;
}

.imageListStyle p {
    position: absolute;
    left: 3px;
    bottom: 0;
    width: 97%;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-family: '宋体';
}

.imageListStyle p span {
    font-size: 16px;
    font-weight: 900;
}
</style>
<script>
import common from '../common/common.js'


export default {
    data() {
        return {
            imageCategoryList: [],
            imageContentList: []
        }
    },
    created() {
        this.getImageCategoryData(),
            this.getImageContentData(0)
    },
    methods: {
        getImageCategoryData() {
            const url = common.apihost + 'api/getimgcategory'
            this.$http.get(url).then(response => {
                this.imageCategoryList = response.body.message
                // console.log(this.imageCategoryList)
            }, err => {
                console.log(err)
            })
        },
        getImageContentData(photoId) {
            const url = common.apihost + 'api/getimages/' + photoId;
            this.$http.get(url).then(response => {
                this.imageContentList = response.body.message
            }, err => {
                console.log(err)
            })
        }
    }
}
</script>
