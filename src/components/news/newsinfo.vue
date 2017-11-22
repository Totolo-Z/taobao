<template>
    <div>
        <div class="titleStyle">
            <h3>{{newsInfo.title}}</h3>
            <p>{{newsInfo.add_time|dateFmt}}&nbsp;&nbsp;{{newsInfo.click}}次浏览&nbsp;&nbsp;分类:民生经济</p>
        </div>
        <div class="contentStyle">
            <p v-html="newsInfo.content"></p>
        </div>

        <subcomment :commentId='this.$route.params.newsId'></subcomment>
    </div>
</template>

<style scoped>
    .titleStyle,.contentStyle{
        padding: 10px;
    }
    h3{
        font-size: 16px;
        color: #0094ff;
    }
    .titleStyle{
        border-bottom: 1px solid rgba(92, 92, 0, 0.3)
    }
</style>


<script>
import common from '../common/common.js'
import subcomment from '../subcomponents/subcomment.vue'
export default {
    data() {
        return {
            newsInfo: {}
        }
    },
    created() {
        this.getNesInfoData()
    },
    methods: {
        getNesInfoData() {
            const url = common.apihost + 'api/getnew/' + this.$route.params.newsId
            this.$http.get(url).then(response => {
                // console.log(response.body.message)
                this.newsInfo = response.body.message[0]
            }, err => {
                console.log(err)
            })
        }
    },
    components:{
        subcomment:subcomment
    }
}
</script>

