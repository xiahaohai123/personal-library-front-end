<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <dynamicRenderingMenu :navMenus="tagList"></dynamicRenderingMenu>
    </el-menu>
  </div>
</template>

<script>
import dynamicRenderingMenu from './dynamic-rendering-menu.vue'
import { setTimeout } from 'timers'
export default {
  name: 'aside-navigation-menu',
  components: { dynamicRenderingMenu },
  data() {
    return {
      isCollapse: false,
      tagList: null,
      defaultActiveIndex: null
    }
  },
  computed: {
    userCode() {
      return this.$store.state.userCode
    }
  },
  methods: {
    getTagList() {
      console.log('触发getTagList方法')
      this.$api.tag.getTagList(this.userCode).then(res => {
        if (res.data.code === 20000) {
          // console.log('获取tagList成功')
          this.tagList = res.data.tagList
          // console.log(this.tagList)
          this.defaultActiveIndex = res.data.tagList[0].entity.id.toString()
          this.$emit('tagId', this.defaultActiveIndex)
        } else {
          console.log(res.data.code)
        }
      })
    },
    handleSelect(index, indexPath) {
      this.$emit('articleId', parseInt(index))
      this.$emit('showFlag', true)
      this.$store.dispatch('article/setArticle', {
        content: null,
        tagId: index
      })
    },
    handleOpen(index, indexPath) {
      this.changeShowFlagAndIndex(false, index)
    },
    handleClose(index, indexPath) {
      this.changeShowFlagAndIndex(false, index)
    },
    changeShowFlagAndIndex(flag, index) {
      this.$emit('showFlag', flag)
      this.$store.dispatch('article/setArticle', {
        content: null,
        tagId: index
      })
    }
  },
  mounted() {
    this.getTagList()
  }
}
</script>