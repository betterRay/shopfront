<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(item, index) in cartInfoList"
          :key="item.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              @click="changeChecked(item.skuId, item.isChecked)"
              :checked="item.isChecked === 1"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">
              {{ item.skuName }}
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.cartPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:;"
              class="mins"
              @click="changeSkuNum($event, item.skuId, -1, item.skuNum)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
              @change="changeSkuNum($event, item.skuId, 2, item.skuNum)"
            />
            <a
              href="javascript:;"
              class="plus"
              @click="changeSkuNum($event, item.skuId, 1, item.skuNum)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuNum * item.cartPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a
              href="javascript:;"
              class="sindelet"
              @click="deleteItem(item.skuId)"
              >删除</a
            >
            <br />
            <a href="javascript:;">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="cartInfoList.every((item) => item.isChecked === 1)&&cartInfoList.length>0"
          @click="selectAll"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteAll">删除选中的商品</a>
        <a href="javascript:;">移到我的关注</a>
        <a href="javascript:;">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择
          <span>{{
            cartInfoList.reduce((sum, item) => {
              if (item.isChecked) {
                return sum + 1;
              } else return sum;
            }, 0)
          }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">
            {{
              cartInfoList.reduce((sum, item) => {
                if (item.isChecked) {
                  return sum + item.skuNum * item.cartPrice;
                } else return sum;
              }, 0)
            }}</i
          >
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn" href="javascript:;">结算</a> -->
          <router-link to="/trade" class="sum-btn">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  mounted() {
    this.getShopcart();
  },
  methods: {
    getShopcart() {
      this.$store.dispatch("getShopcart");
    }, //获取购物车列表数据
    async changeSkuNum(event, skuId, change, skuNum) {
      if (skuNum <= 1 && change < 0) {
        change = 0;
      }
      console.log(event.target.value);
      let origin = skuNum;
      if (event.target.value > 0 && change == 2) {
        change = event.target.value - origin;
      } else if (event.target.value < 0 && change == 2) {
        change = 0;
      } else if (!event.target.value < 0) {
        if (change == 2) {
          change = 0;
        }
      }
      try {
        await this.$store.dispatch("addShopcart", { skuId, skuNum: change });
        this.getShopcart();
      } catch (error) {
        alert(error.message);
      }
    }, //数量加减的
    async deleteItem(skuId) {
      try {
        this.$store.dispatch("deleteItem", skuId);
        this.getShopcart();
      } catch (error) {
        alert(error.message);
      }
    }, //删除购物车项
    async changeChecked(skuId, isChecked) {
      try {
        isChecked === 1 ? (isChecked = 0) : (isChecked = 1);
        await this.$store.dispatch("changeChecked", { skuId, isChecked });
        this.getShopcart();
      } catch (error) {
        alert(error.message);
      }
    }, //改购物车勾选状态
    selectAll(event) {
      this.cartInfoList.forEach(async (item) => {
        item.isChecked = event.target.checked === true ? 1 : 0;
        try {
          await this.$store.dispatch("changeChecked", {
            skuId: item.skuId,
            isChecked: item.isChecked,
          });
          this.getShopcart();
        } catch (error) {
          alert(error.message);
        }
      });
    }, //点击全选或全不选购物车
    deleteAll() {
      this.cartInfoList.forEach(async (item) => {
        if (item.isChecked) {
          try {
            await this.$store.dispatch("deleteItem", item.skuId);
            this.getShopcart();
          } catch (error) {
            alert(error.message);
          }
        }
      });
    },//删除所有购物车商品
    toPay(){
      if(this.$store.state.login.token){
        this.$router.push('/pay')
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
  },
};
</script>

<style lang='less' scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
      & > div {
        float: left;
      }
      .cart-th1 {
        width: 25%;
        input {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .cart-th2 {
        width: 25%;
      }
      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }
    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        & > li {
          float: left;
        }
        .cart-list-con1 {
          width: 4.1667%;
        }
        .cart-list-con2 {
          width: 25%;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }
          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con3 {
          width: 20.8333%;
          .item-txt {
            text-align: center;
          }
        }
        .cart-list-con4 {
          width: 12.5%;
        }
        .cart-list-con5 {
          width: 12.5%;
          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }
          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }
        .cart-list-con6 {
          width: 12.5%;
          .sum {
            font-size: 16px;
          }
        }
        .cart-list-con7 {
          width: 12.5%;
          a {
            color: #666;
          }
        }
      }
    }
  }
  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;
    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;
      span {
        vertical-align: middle;
      }
      input {
        vertical-align: middle;
      }
    }
    .option {
      padding: 10px;
      overflow: hidden;
      float: left;
      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }
    .money-box {
      float: right;
      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }
      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;
        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }
      .sumbtn {
        float: right;
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>