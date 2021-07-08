<template>
  <div class="home">
    <!-- 导航区展示 -->
    <div class="navmiddle w">
        <!-- 列表导航区 -->
        <searchNav />
        <!-- 轮播图及右侧信息区 -->
        <div class="main">
            <div class="navswiper">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="./images/banner1.jpg" alt=""></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
        
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
        
                    <!-- 如果需要滚动条 -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
            
            <div class="bannerinfo">
                <div class="news">
                    <div class="newsinner">
                        <ul class="quickport">
                            <li class="quicknews">尚品汇快报</li>
                            <li class="more">更多
                                <i class="fa fa-angle-right"></i>
                            </li>
                        </ul>
                        <ul class="newsinfo">
                            <li><a href="">[特惠]备战开学季 全民半价购数码</a></li>
                            <li><a href="">[公告]备战开学季 全民半价购数码,速来参与吧！</a></li>
                            <li><a href="">[特惠]备战开学季 全民半价购数码</a></li>
                            <li><a href="">[公告]备战开学季 全民半价购数码</a></li>
                            <li><a href="">[特惠]备战开学季 全民半价购数码</a></li>
                        </ul>
                    </div>
                </div>

                <div class="logo">
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>话费</h5>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>机票</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>电影票</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>游戏</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>彩票</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>加油站</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>酒店</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>火车票</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>众筹</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>理财</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>礼品卡</h5>
                            </a>
                        </li>
                    </ul><ul>
                        <li>
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <h5>白条</h5>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="banneradimg">
                    <img src="./images/bannner1ad.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- 推荐板块 -->
    <div class="recommend w"> 
        <ul>
            <li>
                <a href="#"><img src="./images/home-clock.png" alt=""></a>
                <h3>今日推荐</h3>
            </li>
            <li><a href="#"><img src="./images/home-show1.png" alt=""></a></li>
            <li><a href="#"><img src="./images/home-show.png" alt=""></a></li>
            <li><a href="#"><img src="./images/home-show1.png" alt=""></a></li>
            <li><a href="#"><img src="./images/home-show.png" alt=""></a></li>
        </ul>
    </div>
     
    <!-- 热卖板块 -->
    <div class="hot w">
        <div class="hot-logo">
            <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-cart-plus"></i>
                        <p>热卖排行</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-cart-plus"></i>
                        <p>特价排行</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-cart-plus"></i>
                        <p>新品排行</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="hot-list ">
            <ul>
                <li>
                    <img src="./images/hot.jpg" alt="">
                    <div class="hot-list-bottom">
                        <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                        <p>定金：$1000</p>
                    </div>
                </li>
                <li>
                    <img src="./images/hot.jpg" alt="">
                    <div class="hot-list-bottom">
                        <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                        <p>定金：$1000</p>
                    </div>
                </li>
                <li>
                    <img src="./images/hot.jpg" alt="">
                    <div class="hot-list-bottom">
                        <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                        <p>定金：$1000</p>
                    </div>
                </li>
                <li>
                    <img src="./images/hot.jpg" alt="">
                    <div class="hot-list-bottom">
                        <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                        <p>定金：$1000</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       
    <!-- 猜你喜欢板块 -->
    <div class="guess-youlike w">
        <div class="guess-text">
            <ul>
                <li><h2>猜你喜欢</h2></li>
                <li>
                    <a href="">
                        换一换
                        <i class="fa fa-exchange-alt"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="guess-list">
            <ul>
                <li>
                    <a href="">
                        <img src="./images/guess-1.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./images/guess-2.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./images/guess-3.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./images/guess-4.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./images/guess-5.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./images/guess-6.png" alt="">
                        <div class="guess-bottom">
                            <p class="description">阳光美包新款单肩包女包时尚子母包四件套女</p>
                            <p class="price">¥98.00</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- 家用电器板块 -->
    <div class="electric-device w">
        <div class="device-type">
            <h2>家用电器</h2>
            <ul>
                <li><a href="">热门</a></li>
                <li><a href="">大家电</a></li>
                <li><a href="">生活电器</a></li>
                <li><a href="">厨房电器</a></li>
                <li><a href="">应季电器</a></li>
                <li><a href="">空气/净水</a></li>
                <li><a href="">高端电器</a></li>
            </ul>
        </div>
        <div class="device-list">
            <ul class="list-item">
                <li class="list-item-first">
                    <ul>
                        <li><a href="">节能补贴</a></li>
                        <li><a href="">4K电视</a></li>
                        <li><a href="">空气净化器</a></li>
                        <li><a href="">IH电饭煲</a></li>
                        <li><a href="">滚筒洗衣机</a></li>
                        <li><a href="">电热水器</a></li>
                    </ul>
                    <img src="./images/floor-1-1.png" alt="">
                </li>

                <li class="list-item-second">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>
                        
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        
                        <!-- 如果需要滚动条 -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                </li>

                <li class="list-item-third">
                    <div class="img1"><img src="./images/floor-1-2.png" alt=""></div>
                    <div class="img2"><img src="./images/floor-1-3.png" alt=""></div>
                </li>

                <li class="list-item-forth"><img src="./images/floor-1-4.png" alt=""></li>

                <li class="list-item-fifth">
                    <div class="img1"><img src="./images/floor-1-5.png" alt=""></div>            
                    <div class="img2"><img src="./images/floor-1-6.png" alt=""></div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 家用电器板块 -->
    <div class="electric-device w">
        <div class="device-type">
            <h2>家用电器1</h2>
            <ul>
                <li><a href="">热门1</a></li>
                <li><a href="">大家电1</a></li>
                <li><a href="">生活电器1</a></li>
                <li><a href="">厨房电器1</a></li>
                <li><a href="">应季电器1</a></li>
                <li><a href="">空气/净水1</a></li>
                <li><a href="">高端电器1</a></li>
            </ul>
        </div>
        <div class="device-list">
            <ul class="list-item">
                <li class="list-item-first">
                    <ul>
                        <li><a href="">节能补贴1</a></li>
                        <li><a href="">4K电视1</a></li>
                        <li><a href="">空气净化器1</a></li>
                        <li><a href="">IH电饭煲1</a></li>
                        <li><a href="">滚筒洗衣机1</a></li>
                        <li><a href="">电热水器1</a></li>
                    </ul>
                    <img src="./images/floor-1-1.png" alt="">
                </li>

                <li class="list-item-second">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                            <div class="swiper-slide"><img src="./images/floor-1-b01.png" alt=""></div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>
                        
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        
                        <!-- 如果需要滚动条 -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                </li>

                <li class="list-item-third">
                    <div class="img1"><img src="./images/floor-1-2.png" alt=""></div>
                    <div class="img2"><img src="./images/floor-1-3.png" alt=""></div>
                </li>

                <li class="list-item-forth"><img src="./images/floor-1-4.png" alt=""></li>

                <li class="list-item-fifth">
                    <div class="img1"><img src="./images/floor-1-5.png" alt=""></div>
                    <div class="img2"><img src="./images/floor-1-6.png" alt=""></div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 商标模块 -->
    <div class="trademark w">
        <ul>
            <li><img src="./images/trademark-1.png" alt=""></li>
            <li><img src="./images/trademark-2.png" alt=""></li>
            <li><img src="./images/trademark-3.png" alt=""></li>
            <li><img src="./images/trademark-4.png" alt=""></li>
            <li><img src="./images/trademark-5.png" alt=""></li>
            <li><img src="./images/trademark-6.png" alt=""></li>
            <li><img src="./images/trademark-7.png" alt=""></li>
            <li><img src="./images/trademark-8.png" alt=""></li>
            <li><img src="./images/trademark-9.png" alt=""></li>
            <li><img src="./images/trademark-10.png" alt=""></li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
    name:'Home'
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    .navmiddle{// 导航区展示
        height: 507px;
        position: relative;
        

        .main{
            width: 985px;
            height: 455px;
            margin-left: 215px;
            .navswiper{
                height: 455px;
                margin-right: 14px;
                width: 721px;
                height: 455px;
                float: left;
                margin-top: 5px;
                .swiper-container{
            img{
                    width: 721px;
                    height: 455px;
                }
            }
        }
            
            .bannerinfo{
                float: left;
                margin-top: 5px;
                width: 250px;
                height: 455px;
                .news{
                    .newsinner{
                        height: 180px;
                        border-top: 1px solid #E4E4E4;
                        border-left: 1px solid #E4E4E4;
                        border-right: 1px solid #E4E4E4;
                        border-bottom: 1px solid #E4E4E4;
                        .quickport{
                            width: 238px;
                            border-bottom: 1px solid #E4E4E4;
                            height: 39px;
                            margin: 0 auto;
                            padding-top: 15px;
                            padding-left: 10px;
                            padding-right: 12px;
                            li{
                                float: right;
                                font-size: 12px;
                                &:first-child{
                                    font-size: 14px;
                                    float: left;
                                }
                            }
                        }
                        .newsinfo{
                            font-size: 12px;
                            padding-left: 15px;
                            li{
                                text-align: left;
                                line-height: 26px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                a{
                                    color: #333333;
                                    &:hover{
                                        color: blue;
                                    }
                                }
                            }
                        }
                    }
                    
                }

                .logo{
                    height: 195px;
                    border-right: 1px solid #E4E4E4;
                    ul{
                        float: left;
                        width: 62px;
                        border-left: 1px solid #E4E4E4;
                        border-bottom: 1px solid #E4E4E4;
                        height: 65px;
                        li{
                            text-align: center;
                            height: 100%;
                            
                            a{
                                height: 100%;
                                display: block;
                                color: #FF4261;
                                padding-top: 7px;
                                h5{
                                    margin-top: 14px;
                                }
                            }
                        }
                    }
                }

                .banneradimg{
                    margin-top: 5px;
                }
            }
        }
    }
    
    .recommend{// 推荐板块
            margin-top: 14px;
        ul{
            background-color: #EBEBEB;
            height: 165px;
            li{
                height: 165px;
                float: left;
                width: 250px;
                &:first-child{
                    width: 200px;
                    text-align: center;
                    background-color: #5C5251;
                    h3{
                        color: white;
                    }
                    a{
                        margin-top: 30px;
                        margin-bottom: 21px;
                        text-align: center;
                    }
                }
                a{
                    display: block; 
                    &:hover{
                        opacity: 0.7;
                    }  
                }
            }
        }
    }
    
    .hot{// 热门板块
        .hot-logo{
            width: 312px;
            margin: 15px auto;
            ul{
                height: 78px;
                li{
                    width: 64px;
                    float: left;
                    margin-right: 16px;
                    margin-left: 16px;
                    a{
                        display: block;
                        height: 100%;
                        text-align: center;
                        padding-top: 10px;
                        font-size: 16px;
                        color: #ACBBD2;
                        &:hover{
                            color: #EA458F;
                        }
                        i{
                            margin-bottom: 10px;
                            font-size: 24px;
                            color: #FF713F;
                        }
                    }
                }
            }
        }

        .hot-list{
            ul{
                height: 329px;
                li{
                    width: 270px;
                    border: 1px solid #E1251B;
                    text-align: center;
                    float: left;
                    margin-left: 23px;
                    img{
                        width: 200px;
                        height: 200px;
                        margin-bottom: 32px;
                    }
                    .hot-list-bottom{
                        height: 95px;
                        line-height: 28px;
                        background-color: #FAFAFA;
                        text-align: left;  
                        padding-left: 10px;
                        padding-right: 10px;
                        a{
                            font-size: 12px;
                            color: #333333;
                            &:hover{
                                color: #433FD1;
                            }
                        }
                        
                        p{
                            font-size: 20px;
                            height: 35px;
                            color: #EE847F;
                        }
                    }
                    
                }
            }
        }
    }

    .guess-youlike{//猜你喜欢板块
        height: 282px;
        margin-top: 41px;
        .guess-text{
            ul{
                height: 30px;
                li{
                    float: left;
                    h2{
                        font-weight: 600;
                        font-size: 20px;
                    }
                    &:last-child{
                        float: right;
                        a{
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .guess-list{
            width: 1190px;
            height: 252px;
            border: 1px solid #E4E4E4;
            ul{
                height: 100%;
                li{
                    width: 196px;
                    height: 100%;
                    float: left;
                    a{
                        display: block;
                        font-size: 12px;
                        color: #333333;
                        text-align: center;
                        .guess-bottom{
                            padding-left: 27px;
                            padding-right: 27px;
                            text-align: left;
                            border-right: 1px solid #E4E4E4;
                            .description{
                                font-size: 12px;
                                line-height: 15.6px;
                                margin: 5 0px;
                            }
                            .price{
                                font-size: 20px;
                                line-height: 30px;
                                margin-top: 9px;
                                color: #DF3033;
                            }
                        }
                    }
                }
            }
        }

    }
    
    .electric-device{//家电楼层模块
        height: 411px;
        margin-top: 15px;
        .device-type{
            line-height: 48px;
            height: 50px;
            border-bottom: 2px solid #C81623;
            h2{
                float: left;
                font-size: 20px;
                color:#c81623;
                font-weight: 700;
            }
            ul{
                height: 100%;
                float: right;
                li{
                    float: left;
                    &:last-child{
                        a{
                            border: none;
                        }
                    }
                    a{
                        font-size: 12px;
                        color: #E1251B;
                        padding:0px 11px;
                        border-right: 1px solid #E96364;                       
                    }
                }
            }
        }
        
        .device-list{
            height: 361px;
            border-bottom: 1px solid #E4E4E4;
            .list-item{
                height: 100%;         
                background-color: #E4E4E4;
                img{
                    &:hover{
                        transform: scale(1.1);
                    }
                }
                li{
                    overflow: hidden;
                }
                .list-item-first{
                    padding-top: 15px;
                    width: 209px;
                    font-size: 12px;
                    float: left;
                    ul{
                        height: 81px;
                        margin-bottom: 15px;
                        li{
                            width: 83.734px;
                            float: left;
                            margin: 0 10px;
                            text-align: center;
                            height: 26px;
                            line-height: 26px;
                            border-bottom: 1px solid #E4E4E4;
                            a{
                                color: #333333;
                            }
                        }
                    }
                    img{
                        width: 209px;
                        height: 249px;
                    }
                }

                .list-item-second{
                    float: left;
                    .swiper-container {
                        width: 329px;
                        height: 360px;
                    }  
                }

                .list-item-third{
                    float: left;
                    width: 220px;
                    height: 100%;
                    border-right: 1px solid #E4E4E4;
                    .img1{
                        display: flex;
                        
                        border-bottom: 2px solid #E4E4E4;
                    }
                    .img2{
                        display: flex;
                    }
                }

                .list-item-forth{
                    float: left;
                    height: 360px;
                    border-right: 1px solid #E4E4E4;
                    img{
                        height: 360px;
                    }
                }

                .list-item-fifth{
                    float: left;
                    width: 220px;
                    height: 360px;
                    
                }
            }
        }
    }

    .trademark{//商标模块
        height: 67px;
        margin:7px auto;
        background-color: #F7F7F7;
        ul{
            height: 67px;
            li{
                float: left;
                width: 120px;
                line-height: 67px;
                &:last-child img{
                    border:none
                }
                img{
                    width: 112px;
                    height: 37px;
                    padding: 0 10px;
                    vertical-align: middle;
                    border-right: 1px dotted #CCCCCC;
                }
            }
        }
    }
}
</style>