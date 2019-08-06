<template>
  <div class="app-login">
    <div class="app-login-inner">
      <div class="login-container">
        <el-card class="login-box">
          <div class="login-title">欢迎使用</div>
          <el-form
            @keyup.enter.native="loginHandler"
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            size="medium"
            class="login-form"
          >
            <el-form-item prop="username">
              <el-input
                placeholder="用户名"
                prefix-icon="iconfont icon-user"
                v-model="loginForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="密码"
                prefix-icon="iconfont icon-lock"
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="loginHandler" type="primary" style="width: 100%;">登陆</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// import { loginApi } from '@/api/login'
// import Code from '@/lib/code'
export default {
  data() {
    return {
      loginLoadding: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  computed: {},
  methods: {
    loginHandler() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          return false;
        }
        let postData = {
          username: this.loginForm.username,
          password: this.$root.Md5Sum(this.loginForm.password)
        };
        loginApi(postData)
          .then(res => {
            this.$root.SetLoginToken(res.token);
            this.$router.push({ name: "dashboard" });
          })
          .catch(err => {
            if (err.code && err.code == Code.CODE_ERR_LOGIN_FAILED) {
              this.$message.error("登录失败, 错误信息: " + err.message);
            }
          });
      });
    }
  }
};
</script>

<style lang="scss" scope>

.app-login {
  width: 100%;
  height: 100%;
  // background-image: url('../assets/login_bg.jpg');
  background-position: 50%;
  background-size: cover;
  .app-login-inner {
    width: 100%;
    height: 100%;
  }
  .login-container {
    display: flex;
    justify-content: center;
    .login-box {
      margin-top: 20vh;
      width: 30vw;
      .login-title {
        font-weight: 500;
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
        color: #676a6c;
      }
    }
  }
  .login-cpy {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: #fff;
    a {
      margin: 0 5px;
      color: #fff;
    }
  }
}
</style>