<template>
  <div class="register">
    <h3>
      注册新用户
      <span class="go"
        >我有账号，去
        <!-- <a href="login.html">登陆</a> -->
        <router-link to="/login">登陆</router-link>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <!-- <input type="text" placeholder="请输入你的手机号" v-model="data.phone" />
      <span class="error-msg" v-if="/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(data.phone)">手机号格式正确</span>
	  <span class="error-msg" v-else-if="!/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(data.phone)&&data.phone!==''">手机号输入格式错误！！！</span>
	  <span class="error-msg" v-else-if="!/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(data.phone)&&data.phone===''">必须输入手机号！！！</span> -->
        <input v-model="data.phone" name="phone" v-validate="{required: true,regex: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/}" 
              :class="{invalid: errors.has('phone')}">
        <span class="error-msg">{{ errors.first('phone') }}</span>
    </div>
    <div class="content">
      <label>验证码:</label>
      <!-- <input type="text" placeholder="请输入验证码" v-model="data.code" /> -->
      <input v-model="data.code" name="code" v-validate="{required: true,regex: /^\d{6}$/}" 
              :class="{invalid: errors.has('code')}">
      <button style="height: 38px; width: 100px" @click="getCode">
        获取验证码
      </button>
      <!-- <img
        ref="code"
        src="http://182.92.128.115/api/user/passport/code"
        alt="code"
      /> -->
      <!-- <span class="error-msg" v-if="/^\d{6}$/.test(data.code)">验证码格式正确</span>
	  <span class="error-msg" v-else-if="!/^\d{6}$/.test(data.code)&&data.code!==''">验证码输入格式错误！！！</span>
	  <span class="error-msg" v-else-if="!/^\d{6}$/.test(data.code)&&data.code===''">必须输入验证码！！！</span> -->
    <span class="error-msg">{{ errors.first('code') }}</span>
    </div>
    <div class="content">
      <label>登录密码:</label>
      <!-- <input
        type="text"
        placeholder="请输入你的登录密码"
        v-model="data.password"
      /> -->
      <input v-model="data.password" name="password" v-validate="{required: true,regex: /^[a-zA-Z]\w{5,17}$/}" 
              :class="{invalid: errors.has('password')}">
      <span class="error-msg">{{ errors.first('password') }}</span>
      <!-- <span class="error-msg" v-if="/^[a-zA-Z]\w{5,17}$/.test(data.password)">密码格式正确</span>
	  <span class="error-msg" v-else-if="!/^[a-zA-Z]\w{5,17}$/.test(data.password)&&data.password!==''">密码输入格式错误！！！</span>
	  <span class="error-msg" v-else-if="!/^[a-zA-Z]\w{5,17}$/.test(data.password)&&data.password===''">必须输入密码！！！</span> -->
    </div>
    <div class="content">
      <label>确认密码:</label>
      <!-- <input
        type="text"
        placeholder="请输入确认密码"
        v-model="passwordConfirm"
      />
      <span class="error-msg" v-if="data.password===''">请再次输入密码！！！</span> -->
      <input v-model="passwordConfirm" name="passwordConfirm" v-validate="{required: true,is:data.password}" 
              :class="{invalid: errors.has('passwordConfirm')}">
      <span class="error-msg">{{ errors.first('passwordConfirm') }}</span>
    </div>
    <div class="controls">
      <!-- <input name="m1" type="checkbox" v-model="agreement"/>
      <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg" v-if="agreement===false">请您审阅并同意协议内容！！！</span> -->
      <input v-model="agreement" name="agreement" v-validate="{agree:true}" 
              :class="{invalid: errors.has('agreement')}" type="checkbox">
              <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg">{{ errors.first('agreement') }}</span>
    </div>
    <div class="btn">
      <button @click="register()">完成注册</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      data: {
        phone: "",
        password: "",
        code: "",       
      },
	  passwordConfirm: "",
	  agreement:''
    };
  },
  computed: {
    ...mapState({
      code: (state) => {
        return state.register.code;
      },
    }),
  },
  methods: {
    async register() {
      let info = this.data;
      const success = await this.$validator.validateAll()
      if (success) {
        try {
          await this.$store.dispatch("register", info);
          alert("注册成功了，准备跳转页面");
		      this.$router.push('/home')
        } catch (error) {
          alert("注册失败了");
        }
      }
    },
    async getCode() {
      let phone = this.data.phone;
      try {
        await this.$store.dispatch("getCode", phone);
        this.data.code = this.code;
      } catch (error) {
        alert("申请验证码失败了");
      }
    },
  },
};
</script>

<style lang='less' scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;

  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    padding-left: 390px;
    margin-bottom: 18px;
    position: relative;

    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .controls {
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;

    button {
      outline: none;
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
    }
  }
}
</style>