<template>
  <div>
    <SearchNav />
    <div class="search w">
      <div class="bread">
        <ul>
          <li>全部结果</li>
          <li v-if="info.categoryName">
            <a href="javascript:;" @click="removeCategory"
              >{{ info.categoryName }}<i class="fa fa-times"></i
            ></a>
          </li>
          <li v-if="info.keyword">
            <a href="javascript:;" @click="removeKeyword"
              >{{ info.keyword }}<i class="fa fa-times"></i
            ></a>
          </li>
          <li v-if="info.trademark">
            <a href="javascript:;" @click="removeTrademark"
              >{{ info.trademark.split(":")[1] }}<i class="fa fa-times"></i
            ></a>
          </li>
          <li v-for="(item, index) in info.props" :key="index">
            <a href="javascript:;" @click="removeProps(index)"
              >{{ item.split(":")[1] }}<i class="fa fa-times"></i
            ></a>
          </li>
        </ul>
      </div>

      <SearchAttrList @sendTrademark="sendTrademark" @sendProps="sendProps" />

      <div class="resultshow clearfix">
        <ul class="ranktype">
          <li
            :class="{ active: info.order.split(':')[0] == 1 }"
            @click="totalRank"
          >
            <a href="javascript:;">
              综合<i
                class="fa fa-arrow-down"
                v-if="
                  info.order.split(':')[1] === 'desc' &&
                  info.order.split(':')[0] == 1
                "
              >
              </i
              ><i
                class="fa fa-arrow-up"
                v-if="
                  info.order.split(':')[1] === 'asc' &&
                  info.order.split(':')[0] == 1
                "
              ></i
            ></a>
          </li>
          <li
            :class="{ active: info.order.split(':')[0] == 2 }"
            @click="priceRank"
          >
            <a href="javascript:;">
              价格<i
                class="fa fa-arrow-down"
                v-if="
                  info.order.split(':')[1] === 'desc' &&
                  info.order.split(':')[0] == 2
                "
              >
              </i
              ><i
                class="fa fa-arrow-up"
                v-if="
                  info.order.split(':')[1] === 'asc' &&
                  info.order.split(':')[0] == 2
                "
              ></i>
            </a>
          </li>
        </ul>

        <ul class="rankitem clearfix">
          <li v-for="(item, index) in goodsList" :key="item.id">
            <div class="rankpic">
              <!-- <a href="javascript:;">
                            </a> -->
              <router-link :to="`/detail/${item.id}`">
                <img :src="item.defaultImg" alt="" />
              </router-link>
            </div>

            <div class="rankprice">{{ item.price }}</div>

            <div class="rankdescription">
              <!-- <a href="javascript:;">
                </a> -->
            <router-link :to="`/detail/${item.id}`">
                {{ item.title }}
            </router-link>
            </div>

            <div class="evaluation">已有<span>999+</span>人评价</div>

            <ul class="addtocart">
              <li><a href="">加入购物车</a></li>
              <li class="save"><a href="">收藏</a></li>
            </ul>
          </li>
        </ul>

        <Pager
          :currentPageNo="info.pageNo"
          :pageSize="info.pageSize"
          :continuePage="5"
          :total="total"
          :totalPages="totalPages"
          @updatePageNo="updatePageNo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SearchAttrList from "./SearchAttrList";
export default {
  name: "Search",
  data() {
    return {
      info: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 16,
        pageSize: 1,
        props: [],
        trademark: "",
      },
    };
  },
  beforeMount() {
    this.updateInfo();
  },
  mounted() {
    this.getSearchInfo();
  },
  methods: {
    getSearchInfo() {
      Object.keys(this.info).forEach((key) => {
        if (this.info[key] === "") {
          delete this.info[key];
        }
      });
      this.$store.dispatch("getsearchInfo", this.info);
    }, //发送请求的
    updateInfo() {
      const { category1Id, category2Id, category3Id, categoryName } =
        this.$route.query;
      const { keyword } = this.$route.params;
      const infomiddle = {
        ...this.info,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        keyword,
      };
      this.info = infomiddle;
      this.info.pageNo = 1;
    }, //更新info
    removeCategory() {
      this.info.categoryName = undefined;
      this.info.category1Id = undefined;
      this.info.category2Id = undefined;
      this.info.category3Id = undefined;
      this.$router.replace({ name: "search", params: this.$route.params });
    }, //移除分类搜索
    removeKeyword() {
      this.info.keyword = undefined;
      this.$bus.$emit("removeKeyword");
      this.$router.replace({ name: "search", query: this.$route.query });
    }, //移除关键词搜索
    removeTrademark() {
      this.info.trademark = undefined;
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //移除商标搜索
    removeProps(index) {
      this.info.props.splice(index, 1);
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //移除平台属性搜索
    sendTrademark(trademark) {
      this.info.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //更改trademark，发请求
    sendProps(item1, item) {
      let prop = `${item.attrId}:${item1}:${item.attrName}`;
      if (this.info.props.some((item) => item === prop)) {
        return;
      }
      this.info.props.push(prop);
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //更改Props，发请求
    totalRank() {
      // this.info.order='1:desc'
      if (this.info.order.split(":")[1] == "desc") {
        this.info.order = "1:asc";
      } else {
        this.info.order = "1:desc";
      }
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //根据综合排名升降序
    priceRank() {
      // this.info.order='2:desc'
      console.log(this.info.order);
      if (this.info.order.split(":")[1] == "asc") {
        this.info.order = "2:desc";
      } else {
        this.info.order = "2:asc";
      }
      this.info.pageNo = 1;
      this.getSearchInfo();
    }, //根据价格升降序
    updatePageNo(page) {
      this.info.pageNo = page;
      this.getSearchInfo();
    }, //绑定的更新当前页事件函数
    
  },
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: (state) => {
        return state.search.searchInfo.total;
      },
    }),
    ...mapState({
      totalPages: (state) => {
        return state.search.searchInfo.totalPages;
      },
    }),
  },
  watch: {
    $route: {
      handler(newValue, oldValue) {
        this.updateInfo();
        // 监测路由有变动，更新info，然后再次发送请求
        this.getSearchInfo();
      },
    },
  },
  components: {
    SearchAttrList,
  },
};
</script>

<style lang="less" scoped>
.search {
  margin-bottom: 20px;
  .bread {
    height: 24px;
    margin-bottom: 5px;
    ul {
      height: 100%;
      li {
        float: left;
        line-height: 22px;
        font-size: 12px;
        &:not(:first-child) {
          background-color: #f7f7f7;
          padding: 0 7px;
          border: 1px solid #dedede;
          margin-right: 5px;
          a {
            display: block;
            height: 100%;
            i {
              margin-left: 8px;
            }
          }
        }
        &:first-child {
          padding: 0 15px;
          color: #666;
        }
      }
    }
  }

  .resultshow {
    .ranktype {
      height: 42px;
      border: 1px solid #e2e2e2;
      margin-top: 5px;
      margin-bottom: 15px;
      li {
        width: 74px;
        height: 100%;
        float: left;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        &.active {
          background-color: rgba(143, 69, 88, 0.26);
        }
        a {
          color: #777777;
          display: block;
          height: 100%;
        }
      }
    }

    .rankitem {
      li {
        float: left;
        width: 240px;
        height: 400px;
        margin-bottom: 15px;
        .rankpic {
          a {
            img {
              width: 240px;
            }
          }
        }

        .rankprice {
          color: #e07c83;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .rankdescription {
          margin-bottom: 15px;
          a {
            color: #333333;
            font-size: 12px;
          }
        }

        .evaluation {
          color: #a7a7a7;
          font-size: 12px;
          span {
            color: #646fb0;
          }
          margin-bottom: 15px;
        }

        .addtocart {
          .save {
            float: left;
            border: 1px solid #8c8c8c;
            a {
              color: #8c8c8c;
            }
          }

          li {
            width: 90px;
            height: 24px;
            float: left;
            border: 1px solid #e1251b;
            font-size: 12px;
            line-height: 24px;
            text-align: center;
            margin-right: 15px;
            a {
              display: block;
              height: 100%;
              color: #e1251b;
              &:hover {
                background-color: #e1251b;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>