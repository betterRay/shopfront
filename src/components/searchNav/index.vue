<template>
  <div class="list">
    <div class="listmiddle w">
      <!-- 全部商品分类 -->
      <div class="allgoods" @mouseleave="moveOut">
        <div class="allgoodstitle" @mouseenter="ifShow">全部商品分类</div>
        <transition name="goods">
          <div
            class="goodsitem"
            @click="toSearchWithInfo"
            v-if="$route.path == '/home' || isShow"
          >
            <div
              v-for="(item1, index) in categoryList"
              :key="item1.categoryId"
              :class="{ catagoryListOn: catagoryShowFlag === index }"
              @mouseenter="moveIn(index)"
            >
              <ul class="frontcatagoryList">
                <li>
                  <a
                    href="javascript:;"
                    :data-category1Id="item1.categoryId"
                    :data-categoryName="item1.categoryName"
                  >
                    {{ item1.categoryName }}
                  </a>
                </li>
                <!-- <li><a href="">手机</a></li>
                            <li><a href="">家用电器</a></li>
                            <li><a href="">数码</a></li>
                            <li><a href="">家居家装</a></li>
                            <li><a href="">电脑办公</a></li>
                            <li><a href="">厨具</a></li>
                            <li><a href="">个护化妆</a></li>
                            <li><a href="">服饰内衣</a></li>
                            <li><a href="">钟表</a></li>
                            <li><a href="">鞋靴</a></li>
                            <li><a href="">母婴护理</a></li>
                            <li><a href="">礼包箱包</a></li>
                            <li><a href="">食品饮料、保健食品</a></li>
                            <li><a href="">珠宝</a></li>

                            <li><a href="">汽车用品</a></li>
                            <li><a href="">运动健康</a></li> -->
              </ul>

              <div class="catagoryList">
                <div
                  v-for="(item2, index) in item1.categoryChild"
                  :key="item2.categoryId"
                >
                  <div class="catagoryList2">
                    <a
                      href="javascript:;"
                      :data-category2Id="item2.categoryId"
                      :data-categoryName="item2.categoryName"
                      >{{ item2.categoryName }}</a
                    >
                  </div>
                  <ul class="catagoryList3 clearfix">
                    <li
                      v-for="(item3, index) in item2.categoryChild"
                      :key="item3.categoryId"
                    >
                      <a
                        href="javascript:;"
                        :data-category3Id="item3.categoryId"
                        :data-categoryName="item3.categoryName"
                        >{{ item3.categoryName }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!--导航栏列表  -->
      <div class="listtype">
        <ul class="listitem">
          <li><a href="#">服装城</a></li>
          <li><a href="#">美妆馆</a></li>
          <li><a href="#">尚品汇超市</a></li>
          <li><a href="#">全球购</a></li>
          <li><a href="#">闪购</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">有趣</a></li>
          <li><a href="#">秒杀</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  name: "SearchNav",
  data() {
    return {
      catagoryShowFlag: -1,
      isShow: 0,
    }; //设置展示与否的标志位
  },
  mounted() {
    //挂载时发请求获取数据
  },
  computed: {
    categoryList() {
      return this.$store.state.home.categoryList;
    }, //计算属性获得vuex中的数据
  },
  methods: {
    moveIn: throttle(
      function (index) {
        this.catagoryShowFlag = index;
      },
      20,
      { trailing: false }
    ),
    //移入一级菜单显示2，3级
    toSearchWithInfo(event) {
      const data = event.target.dataset;
      const { category1id, category2id, category3id, categoryname } = data;
      if (categoryname) {
        var location = { name: "search" };
        var query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        location.query = query;
      }
      if (this.$route.params !== {}) {
        location.params = this.$route.params;
      }
      if(this.$route.path!=='/home'){
        this.$router.replace(location);
      }else{
        this.$router.push(location);
      }
      
    }, //点击跳转全部商品分类跳转并传参
    ifShow() {
      this.isShow = 1;
    }, //全部商品分类下显示
    moveOut() {
      this.catagoryShowFlag = -1;
      this.isShow = 0;
    }, //全部商品分类下隐藏
  },
};
</script>

<style lang='less' scoped>
*{
  box-sizing: border-box;
  .list {
  height: 47px;
  line-height: 47px;
  border-bottom: 2px solid #e1251b;
  .listmiddle {
    height: 47px;
    // 全部商品分类样式
    .allgoods {
      width: 210px;
      height: 47px;
      text-align: center;
      float: left;

      .allgoodstitle {
        color: #fff;
        background-color: #e1251b;
      }
      .goodsitem {
        &.goods-enter {
          height: 0;
          opacity: 0;
        }
        &.goods-enter-active {
          transition: all 0.5s;
        }
        &.goods-enter-to {
          height: 460px;
          opacity: 1;
        }
        height: 460px;
        background-color: #87ceeb;
        padding-top: 0px;
        position: relative;
        z-index: 999;
        .frontcatagoryList li {
          height: 30px;
          line-height: 30px;
          text-align: left;
          &:hover {
            background-color: #ff69b4;
          }
          a {
            font-size: 14px;
            padding-left: 20px;
            color: #333333;
            &:hover {
              color: #7652ca;
            }
          }
        }

        .catagoryList {
          display: none;
          position: absolute;
          left: 210px;
          top: 0px;
          z-index: 9999;
          width: 736px;
          background-color: #f7f7f7;
          padding-left: 14px;
          border: 1px solid #dddddd;
          font-size: 14px;

          .catagoryList2 {
            text-align: left;
            padding-left: 2px;
            a {
              color: #666666;
              &:hover {
                color: #424bd5;
              }
            }
          }
          li {
            float: left;
            height: 14px;
            border-left: 1px solid red;
            line-height: 14px;
            padding-left: 8px;
            margin-right: 8px;
            a {
              color: #666666;
              &:hover {
                color: #424bd5;
              }
            }
          }
        }
        & .catagoryListOn {
          .catagoryList {
            display: block;
          }
        }
      }
    }
    // 导航栏列表样式
    .listtype {
      float: left;
      width: 990px;
      .listitem {
        li {
          float: left;
          a {
            color: #333333;
            font-size: 16px;
            margin: 0 22px;
          }
        }
      }
    }
  }
}
}

</style>