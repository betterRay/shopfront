<template>
  <div class="header">
    <div class="userinfocontainer">
      <!-- 首行容器 -->
      <div class="userinfo w">
        <!-- 首行容器中心板块 -->
        <ul class="user">
          <!-- 首行容器左边登录注册 -->
          <li>菡笑购欢迎你！</li>
          <li v-if="$store.state.login.token">欢迎您，<a href="javascripte:;">{{$store.state.login.userinfo.name}}</a> !</li>
          <li v-if="$store.state.login.token">
           <a href="javascript:;" @click="logout">退出登录</a> 
          </li>
          <li v-else>
            请<router-link to="/login">登录</router-link>
            <span>|没有账号？我要</span>
            <router-link to="/register">注册</router-link>
            <!-- <a href="">登录</a> -->
          </li>


          <li v-else class="verticalline"></li>
          <li v-else><a href="">免费注册</a></li>
        </ul>

        <ul class="userlist">
          <!-- 首行容器右边列表选项 -->
          <li>
            <!-- <a href="">我的订单</a> -->
            <router-link to="/myOrder">我的订单</router-link>
          </li>         
          <li class="verticalline"></li>
          <li>
            <!-- <a href="javascript:;">我的购物车</a> -->
            <router-link to="/cart">我的购物车</router-link>
          </li>
          <li class="verticalline"></li>
          <li><a href="">我的尚品汇</a></li>
          <li class="verticalline"></li>
          <li><a href="">尚品汇会员</a></li>
          <li class="verticalline"></li>
          <li><a href="">企业采购</a></li>
          <li class="verticalline"></li>
          <li><a href="">关注尚品汇</a></li>
          <li class="verticalline"></li>
          <li><a href="">合作招商</a></li>
          <li class="verticalline"></li>
          <li><a href="">商家后台</a></li>
        </ul>
      </div>
    </div>

    <div class="search w">
      <h1>
        <!-- <a href="#">菡笑购</a> -->
        <router-link to="/home">菡笑购</router-link>
      </h1>
      <div class="searchinput">
        <input type="search" v-model="keyword" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default { 
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  mounted() {
    this.$bus.$on("removeKeyword", this.removeKeyword);
  },
  methods: {
    search() {
      if (this.$route.query) {
        if (this.$route.path !== "/home") {
          this.$router.replace({
            name: "search",
            params: { keyword: this.keyword || undefined },
            query: this.$route.query,
          });
        } else {
          this.$router.push({
            name: "search",
            params: { keyword: this.keyword || undefined },
            query: this.$route.query,
          });
        }
      }
    },//合并query参数然后一起跳转并传参
    removeKeyword() {
      this.keyword = "";
    }, //移出搜索框中的字
    async logout(){
      try {
        await this.$store.dispatch('logout')
        this.$store.state.login.token=''
        localStorage.removeItem('token')
        this.$store.state.login.userinfo={}
        this.$router.push('/home')
        alert('退出登录成功！')
      } catch (error) {
        alert('退出登录失败！')
      } 
    },//退出登录
  },
};
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
  .header {
  .userinfocontainer {
    background-color: #eaeaea;
    .userinfo.w {
      height: 30px;
      line-height: 30px;
      .user {
        float: left;
        color: #666666;
        font-size: 12px;
        li {
          float: left;
          a {
            color: #666666;
          }
        }
      } // 上层容器左侧

      .userlist {
        float: right;
        color: #666666;
        font-size: 12px;
        li {
          float: left;
          a {
            color: #666666;
          }
        }
      }
      // 上层容器右侧
    } // 上层容器中心
  } // 头部上层容器

  .search.w {
    height: 111px;
    h1 {
      margin-top: 28px;
      float: left;
      a {
        width: 175px;
        height: 56px;
        display: inline-block;
        background-image: url("./images/logo.png");
        text-indent: -999px;
      }
    } //导航栏左侧

    .searchinput {
      width: 558px;
      height: 32px;
      border: 2px solid #ea4a36;
      margin-top: 35px;
      float: right;
      input {
        width: 488px;
        height: 28px;
        float: left;
        border: 0;
      }
      button {
        width: 66px;
        height: 28px;
        float: left;
        border: 0;
        background-color: #ea4a36;
        color: #ffff;
      }
    } //导航栏右侧
  } //头部下层导航栏中心容器
}
}

</style>