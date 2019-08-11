<template>
  <div>
    <body-layout>
      <template v-slot:content>
        <el-container>
          <el-header>
            <!-- <library-header activeIndex="2"></library-header> -->
            <top-navi-menu activeIndex="2"></top-navi-menu>
          </el-header>

          <el-main class="main-layout">
            <!-- <el-aside width="200px">
              <aside-navi-menu></aside-navi-menu>
            </el-aside>-->
            <el-container>
              <el-main>
                <!-- 无限滚动条 -->
                <!-- <infinite-scroll></infinite-scroll> -->
                <article-brief-list></article-brief-list>
              </el-main>
            </el-container>
          </el-main>
          <el-footer>
            <library-footer></library-footer>
          </el-footer>
        </el-container>
      </template>
    </body-layout>
  </div>
</template>

<script>
export default {
  name: 'LibraryIndex',
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>