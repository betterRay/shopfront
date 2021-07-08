<template>
  <div class="resultitems clearfix">
            <div class="item clearfix">
                <div class="front">品牌</div>
                <ul class="behind clearfix">
                    <li v-for="(item, index) in trademarkList" :key="item.tmId"
                    @click="sendTrademark(item)"
                    >
                        {{item.tmName}}
                    </li>
                </ul>
            </div>

            <div class="itemlater clearfix" v-for="(item, index) in attrsList" :key="item.attrId">
                <div class="front">{{item.attrName}}</div>
                <ul class="behind clearfix">
                    <li v-for="(item1, index) in item.attrValueList" :key="item1.attrValueList">
                        <a href="javascript:;" @click="sendProps(item1,item)">{{item1}}</a>
                    </li>
                </ul>
            </div>

        </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'SearchAttrList',
    computed: {
        ...mapGetters(['attrsList','trademarkList'])
    },
    methods: {
        sendTrademark(trademark){
            this.$emit('sendTrademark',trademark)
        },//传递trademark
        sendProps(item1,item){
            this.$emit('sendProps',item1,item)
        }
    },
}
</script>

<style lang="less" scoped>
.resultitems{
        border: 1px solid #DDDDDD;
        .item{
            border-bottom: 1px solid #DDDDDD;
            .front{
                font-size: 12px;
                width: 125px;
                float: left;
                text-align: center;
                line-height: 123px;
                background-color: #F1F1F1;
            }
            .behind{
                font-size: 14px;
                color: rgb(225, 37, 27);
                font-style: italic;
                margin-top: 9px;
                margin-left: 15px;
                width: 955px;
                float: left;
                border-top: 1px solid #E4E4E4;
                border-left: 1px solid #E4E4E4;
                li{
                    width: 106px;
                    border-right: 1px solid #E4E4E4;
                    border-bottom: 1px solid #E4E4E4;
                    line-height: 54px;
                    float: left;
                    text-align: center;
                }
            }
        }
        
        .itemlater{
            border-bottom: 1px solid #DDDDDD;
            font-size: 12px;
            .front{
                width: 125px;
                float: left;
                text-align: center;
                line-height: 37px;
                background-color: #F1F1F1;
            }
            .behind{
                width: 955px;
                float: left;
                li{
                    line-height: 37px;
                    float: left;
                    margin-left: 15px;
                    a{
                        color: #666666;
                    }
                }
            }
        }
    }
</style>