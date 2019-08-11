<template>
  <div>
    <el-dialog :visible.sync="visiable" :width="`${widthPercent}%`" :before-close="close">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录" name="login" class="login-register-dialog-tab-panel">
          <el-input
            clearable
            v-model="loginInfo.loginUsername"
            placeholder="请输入用户名"
            class="login-register-dialog-input"
            @keyup.enter.native="login"
          ></el-input>
          <el-input
            show-password
            v-model="loginInfo.loginPassword"
            placeholder="请输入密码"
            class="login-register-dialog-input"
            @keyup.enter.native="login"
          ></el-input>
          <el-button type="primary" class="login-register-dialog-button" @click="login">登录</el-button>
        </el-tab-pane>

        <el-tab-pane label="注册" name="register" class="login-register-dialog-tab-panel">
          <el-input
            clearable
            v-model="registerInfo.registerUsername"
            placeholder="请输入用户名"
            class="login-register-dialog-input"
          ></el-input>
          <el-input
            show-password
            v-model="registerInfo.registerPassword"
            placeholder="请输入密码"
            class="login-register-dialog-input"
          ></el-input>
          <el-button type="primary" class="login-register-dialog-button">注册</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login-register-dialog',
  props: ['visiable'],
  data() {
    return {
      visiableOuter: this.visiable,
      activeName: 'login',
      loginInfo: {
        loginUsername: null,
        loginPassword: null
      },
      registerInfo: {
        registerUsername: null,
        registerPassword: null
      },
      widthPercent: 40
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
    login() {
      console.log('触发login方法')
      this.$api.user
        .login({
          username: this.loginInfo.loginUsername,
          password: this.loginInfo.loginPassword
        })
        .then(res => {
          let data = res.data
          if (res.data.code === 20000) {
            console.log(data.userCode)
            this.$store.dispatch('userLogin', {
              isLogin: true,
              userCode: data.userCode,
              headPortraitUrl: data.headPortraitUrl,
              token: data.token
            })
            localStorage.setItem('isLogin', true)
            localStorage.setItem('userCode', data.userCode)
            localStorage.setItem('headPortraitUrl', data.headPortraitUrl)
            localStorage.setItem('token', data.token)
            this.close()
            window.location.reload()
            // this.$router.replace({ path: '/home' })
          } else {
            console.log('登录失败')
            this.responseResult = '登录失败'
          }
        })
    }
  },
  mounted() {
    let screenWidth = document.body.clientWidth

    if (screenWidth < 420) {
      this.widthPercent = 70
    } else if (screenWidth < 564) {
      this.widthPercent = 60
    } else if (screenWidth < 676) {
      this.widthPercent = 50
    } else if (screenWidth < 768) {
      this.widthPercent = 50
    } else {
      this.widthPercent = 40
    }
  }
}
</script>