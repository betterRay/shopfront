<template>
  <ul class="cutpage">
    <li><button :disabled='currentPageNo===1' @click="$emit('updatePageNo',currentPageNo-1)">上一页</button></li>
    <li><button v-if="startEnd.start>1" @click="$emit('updatePageNo',1)">1</button></li>
    <li><button v-if="startEnd.start>2">...</button></li>
    <li v-for="(item, index) in startEnd.end" :key="index"
        v-if="item>startEnd.start-1"
        @click="$emit('updatePageNo',item)"
    ><button :class="{active:item===currentPageNo}">{{item}}</button>
    </li>
    <li><button v-if="startEnd.end<totalPages-1">...</button></li>
    <li><button v-if="startEnd.end<totalPages" @click="$emit('updatePageNo',totalPages)">{{totalPages}}</button></li>
    <li><button :disabled='currentPageNo===totalPages' @click="$emit('updatePageNo',currentPageNo+1)">下一页</button></li>
    <li><button>{{`共${total}条`}}</button></li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"Pager",
    props:{
        currentPageNo:{
            type:Number
        },
        pageSize:{
            type:Number,
            default:10
        },
        total:{
            type:Number,
            default:0
        },
        totalPages:{
            type:Number,
            default:0
        },
        continuePage:{
            type:Number,
            default:5
        },
    },//接受父组件传来的参数
    computed: {
        startEnd(){
            if(this.totalPages<this.continuePage){
                var start,end
                start=1
                end=this.continuePage
            }else{
                start=this.currentPageNo-Math.floor(this.continuePage/2)
                end=this.currentPageNo+Math.floor(this.continuePage/2)
                if(start<1){
                    start=1
                    end=this.continuePage
                }
                if(end>this.totalPages){
                    start=this.totalPages-this.continuePage+1
                    end=this.totalPages
                }
            }
            return {start,end}
        },//求中间连续段头尾
    },
};
</script>

<style lang="less" scoped>
*{
    box-sizing: border-box;
    .cutpage{
            height: 28px;
            li{
                height: 28px;
                float: left;
                margin-right: 10px;
                line-height: 28px;
                button{
                    vertical-align: middle;
                    width: 60px;
                    height: 100%;
                    &.active{
                        background-color: rgb(159, 147, 226);
                    }
                }
            }
        }
}
</style>