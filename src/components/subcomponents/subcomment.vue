<template>
    <div>
        <div class="submitCommentStyle">
            <h4>提交评论</h4>
            <textarea ref='textAreaRef' cols="30" rows="5" placeholder="请输入评论">

            </textarea>
            <mt-button type="primary" @click="submitComment" size="large">提交评论</mt-button>
        </div>
        <div class="commentListStyle">
            <h4>评论列表</h4>
            <div v-for="(item,index) in commentList" :key="index" class="commentItemStyle">
                <p class="commentConentStyle">{{item.content}}</p>
                <p class="commentUserAndTimeStyle">
                    <span>{{item.user_name}}</span>
                    <span>{{item.add_time|dateFmt}}</span>
                </p>
            </div>
            <mt-button @click="loadMore" size="large" plain type="danger">加载更多</mt-button>
        </div>
    </div>
</template>

<style>
.submitCommentStyle,
.commentListStyle {
    padding: 8px;
}

h4 {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentItemStyle {
    height: 100px;
    overflow-y: auto;
    border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentConentStyle {
    margin-top: 10px;
    color: black;
    font-size: 14px;
}

.commentUserAndTimeStyle {
    margin-top: 30px;
    color: #0094ff;
    display: flex;
    justify-content: space-between;
}

.loadMoreStyle {
    margin-top: 10px;
}
</style>

<script>
import common from '../common/common.js'
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            commentList: [],
            pageIndex: 1
        }
    },
    created() {
        this.getCommentListData()
    },
    methods: {
        getCommentListData() {
            const url = common.apihost + 'api/getcomments/' + this.commentId + "?pageindex=" + this.pageIndex
            this.$http.get(url).then(response => {
                if (this.pageIndex == 1) {
                    if (response.body.message.length == 0) {
                        Toast({
                            message: '还没有沙发，赶快抢吧',
                            position: 'middle',
                            duration: 2000
                        });
                    } else {
                        this.commentList = this.commentList.concat(response.body.message)
                    }
                } else {
                    if (response.body.message.length == 0) {
                        Toast({
                            message: '已经没有了哦',
                            position: 'middle',
                            duration: 2000
                        });
                    } else {
                        this.commentList = this.commentList.concat(response.body.message)
                    }
                }
            }, err => {
                console.log(err)
            })
        },
        loadMore() {
            this.pageIndex++
            this.getCommentListData()
        },
        submitComment() {
            var content = this.$refs.textAreaRef.value
            if (content.length == 0) {
                Toast({
                    message: '请输入要评价的内容',
                    position: 'middle',
                    duration: 2000
                });
                return
            }
            const url=common.apihost+'api/postcomment/'+this.commentId
            this.$http.post(url,{content:content},{emulateJSON:true}).then(response=>{
                Toast({
                    message: response.body.message,
                    position: 'middle',
                    duration: 2000
                });
                this.$refs.textAreaRef.value=''
                this.pageIndex=1
                this.getCommentListData()
            })
        }
    },
    props: ['commentId']   
}

</script>
