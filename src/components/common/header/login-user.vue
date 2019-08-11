<template>
  <div>
    <div>
      <el-dropdown @command="handleCommand">
        <a href="#/home">
          <img :src="headPortraitUrl" alt="我头(像)呢？？" class="login-user-common-head-portrait" />
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-user',
  computed: {
    headPortraitUrl() {
      return this.$store.state.headPortraitUrl
    }
  },
  methods: {
    logout() {
      console.log('触发logout')
      localStorage.setItem('isLogin', false)
      localStorage.removeItem('headPortraitUrl')
      localStorage.removeItem('token')
      localStorage.removeItem('userCode')

      this.$store.dispatch('userLogin', {
        isLogin: false,
        userCode: null,
        headPortraitUrl: null,
        token: null
      })

      this.$router.replace('/')
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
      }
    }
  }
}
</script>