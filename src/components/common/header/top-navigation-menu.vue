<template>
  <div>
    <div class="top-navigation-menu-layout">
      <router-link to="index">
        <el-link type="primary" :underline="false" style="font-size:20px">personal-library</el-link>
      </router-link>
      <!-- <el-menu
        :default-active="activeIndexOuter"
        class="el-menu-demo flex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="2">public</el-menu-item>
        <el-menu-item index="3">private</el-menu-item>
        <el-menu-item index="4">all</el-menu-item>
      </el-menu>-->

      <login-user v-if="localLoginFlag"></login-user>
      <el-button type="primary" @click="loginOrRegister" v-if="!localLoginFlag">登录/注册</el-button>
    </div>
    <login-register-dialog :visiable="dialogVisiable" @close="closeDialog"></login-register-dialog>
    <hr class="top-navigation-menu-hr" />
  </div>
</template>

<script>
export default {
  name: 'top-navigation-menu',
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      activeIndexOuter: this.activeIndex,
      leftWidthPercent: 30,
      rightWidthPercent: 30,
      dialogVisiable: false
    }
  },
  computed: {
    localLoginFlag() {
      return this.$store.state.isLogin
    }
  },
  mounted() {
    let screenWidth = document.body.clientWidth
    // if (screenWidth < 768) {
    //   this.leftWidthPercent = 5
    //   this.rightWidthPercent = 5
    // } else if (screenWidth < 1004) {
    //   this.leftWidthPercent = 20
    //   this.rightWidthPercent = 20
    // } else if (screenWidth < 1200) {
    //   this.leftWidthPercent = 20
    //   this.rightWidthPercent = 20
    // } else if (screenWidth < 1350) {
    //   this.leftWidthPercent = 25
    //   this.rightWidthPercent = 25
    // } else if (screenWidth < 1477) {
    //   this.leftWidthPercent = 25
    //   this.rightWidthPercent = 25
    // }
    if (screenWidth < 564) {
      this.leftWidthPercent = this.rightWidthPercent = 0
    } else if (screenWidth < 606) {
      this.leftWidthPercent = this.rightWidthPercent = screenWidth * 0.005
    } else if (screenWidth < 676) {
      this.leftWidthPercent = this.rightWidthPercent = screenWidth * 0.012
    } else if (screenWidth < 768) {
      this.leftWidthPercent = this.rightWidthPercent = screenWidth * 0.017
    } else {
      this.leftWidthPercent = this.rightWidthPercent = screenWidth * 0.02
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    loginOrRegister() {
      // this.$router.replace({ path: '/login' })
      this.dialogVisiable = true
    },
    closeDialog(data) {
      this.dialogVisiable = data
    }
  }
}
</script>

<style>
.flex {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.bottom-border {
  border-bottom: 1px solid #dcdfe6;
}
</style>
