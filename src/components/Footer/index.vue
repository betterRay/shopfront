<template>
  <div class="footer">
    <!-- 底部中心板块 -->
    <div class="footmiddle w">
        <!-- 底部上面板块 -->
        <div class="service">
            <div class="serviceitem">
                <h4>购物指南</h4>
                <ul>
                    <li>购物流程</li>
                    <li>会员介绍</li>
                    <li>生活旅行/团购</li>
                    <li>常见问题</li>
                    <li>购物指南</li>
                </ul>
            </div>
            <div class="serviceitem">
                <h4>配送方式</h4>
                <ul>
                    <li>上门自提</li>
                    <li>211限时达</li>
                    <li>配送服务查询</li>
                    <li>配送费收取标准</li>
                    <li>海外配送</li>
                </ul>
            </div>
            <div class="serviceitem">
                <h4>支付方式</h4>
                <ul>
                    <li>货到付款</li>
                    <li>在线支付</li>
                    <li>分期付款</li>
                    <li>邮局汇款</li>
                    <li>公司转账</li>
                </ul>
            </div>
            <div class="serviceitem">
                <h4>售后服务</h4>
                <ul>
                    <li>售后政策</li>
                    <li>价格保护</li>
                    <li>退款说明</li>
                    <li>返修/退换货</li>
                    <li>取消订单</li>
                </ul>
            </div>
            <div class="serviceitem">
                <h4>特色服务</h4>
                <ul>
                    <li>夺宝岛</li>
                    <li>DIY装机</li>
                    <li>延保服务</li>
                    <li>尚品汇E卡</li>
                    <li>尚品汇通信</li>
                </ul>
            </div>
            <div class="serviceitem">
                <h4>帮助中心</h4>
                <ul>
                    <li><img src="" alt=""></li>
                </ul>
            </div>
        </div>

        <!-- 底部下面板块 -->
        <div class="bottom">
            <div class="bottom1">
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                联系我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                友情链接&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                友情链接&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                关于我们
            </div>
            <div>
                地址：江苏省常州市溧阳市北巷村
            </div>
            <div>
                苏备201314号
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="less" scoped>
*{
    box-sizing: border-box;
    .footer{
    background-color: #EAEAEA;
    .footmiddle{
        height: 322px;
        padding: 17px 30px;
        .service{
            height: 166px;
            border-bottom: 1px solid #E4E1E1;
            .serviceitem{
                float: left;
                h4{
                    line-height: 18.18px;
                    font-weight: 600;
                }
                ul{
                    margin-top: 3px;
                    li{
                        height: 17.33px;
                        line-height: 17.33px;
                        font-size: 12px;
                    }
                }
            }
            .serviceitem:not(:last-child){
                width: 194.33px;
            }
        }

        .bottom{
            div{
                text-align: center;
                margin-top: 14px;
                font-size: 12px;
            }
        }
    }
    
}
}
</style>