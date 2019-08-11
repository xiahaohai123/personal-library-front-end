<template>
  <div>
    <library-header></library-header>
    <el-row>
      <el-col :xs="1" :sm="4" :md="6" :lg="6" :xl="10">
        <div class="grid-content"></div>
      </el-col>

      <el-col :xs="22" :sm="16" :md="12" :lg="12" :xl="4">
        <div class="grid-border">
          <el-container>
            <el-header>
            </el-header>
            <el-main>
              <el-container>
                <el-aside width="100px" class="hidden-xs-only"><span class="common-font">用户名:</span></el-aside>
                <el-input type="text" v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
              </el-container>
              <el-container>
                <div class="grid-content"></div>
              </el-container>

              <el-container>
                <el-aside width="100px" class="hidden-xs-only"><span class="common-font">密码:</span></el-aside>
                <el-input
                  type="text"
                  v-model="loginInfo.password"
                  placeholder="请输入密码"
                  @keyup.enter.native="login"
                />
              </el-container>
            </el-main>
            <div class="grid-content"></div>

            <el-footer>
              <el-button type="primary" @click="login" plain>登录</el-button>
            </el-footer>
          </el-container>
        </div>
      </el-col>

      <el-col :xs="1" :sm="4" :md="6" :lg="6" :xl="10">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <library-footer></library-footer>
  </div>
</template>

<script>

export default {
  name: 'LibraryLogin',
  data() {
    return {
      loginInfo: { username: '', password: '' },
      responseResult: ['页面登录情况']
    }
  },
  methods: {
    login() {
      console.log('触发login方法')
      this.$api.user
        .login({
          username: this.loginInfo.username,
          password: this.loginInfo.password
        })
        .then(res => {
          this.responseResult = JSON.stringify(res.data)
          if (res.data.code === 20000) {
            this.$router.replace({ path: '/home' })
          } else {
            console.log('登录失败')
            this.responseResult = '登录失败'
          }
        })
    },

    // 简单的交互方法测试
    start() {
      console.log('start方法')
      this.$api.user.start().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-border{
  border-radius: 4px;
  /* border: #99a9bf solid 1px; */
  box-shadow: 0 2px 7px 0 rgba(120, 160, 160, 1);
  padding: 3%;
}
.common-font{
  color: rgba(100, 100, 100, 1); 
}
</style>
