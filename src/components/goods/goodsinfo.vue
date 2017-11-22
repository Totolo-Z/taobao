<template>
  <div>
     
    
  </div>
</template>


<style scoped>

</style>

<script>
import common from '../common/common.js'
    export default{
        data(){
            return {
           
                goodsInfo:{}
            }
        },
        created(){
            this.getGoodsInfoData()
        },
        methods:{
            getGoodsInfoData(){
                const url=`${common.apihost}api/goods/getinfo/${this.$route.params.goodsId}`
                this.$http.get(url).then(response=>{
                    this.goodsInfo=response.body.message[0]
                },err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

