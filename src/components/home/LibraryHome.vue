<template>
  <div>
    <body-layout>
      <template v-slot:content>
        <el-container>
          <el-header>
            <top-navi-menu activeIndex="2"></top-navi-menu>
          </el-header>

          <el-main>
            <el-container>
              <el-aside width="200px">
                <aside-navi-menu @articleId="getArticle" @showFlag="changeShowFlag"></aside-navi-menu>
              </el-aside>
              <el-main>
                <article-detailed v-show="showFlag"></article-detailed>
                <div v-show="!showFlag">
                  <div>
                    <el-input v-model="title"></el-input>
                  </div>
                  <el-button type="primary" @click="addTag">新增分支</el-button>
                  <el-button type="primary" @click="addArticle">新增文章</el-button>
                  <el-button type="primary" @click="deleteTag">删除分支</el-button>
                </div>
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
import axios from '@/utils/axiosInstance.js'

export default {
  name: 'LibraryHome',
  computed: {
    userCode() {
      return this.$store.state.userCode
    }
  },
  data() {
    return {
      showFlag: false,
      inputShowFlag: false,
      title: null
    }
  },
  methods: {
    getArticle(tagId) {
      this.$api.article.getArticle(this.userCode, tagId).then(res => {
        this.$store.dispatch('article/setArticle', {
          content: res.data.article.contentMD,
          tagId: tagId
        })
      })
    },
    changeShowFlag(showFlag) {
      this.showFlag = showFlag
    },
    addTag() {
      this.$api.tag
        .createTag(
          this.title,
          parseInt(this.$store.state.article.tagId),
          this.$store.state.userCode,
          0
        )
        .then(res => {
          console.log(res.data)
        })
    },
    deleteTag() {
      this.$api.tag.deteleTag(this.$store.state.article.tagId).then(res => {
        console.log(res.data)
      })
    },
    addArticle() {
      if (this.title === null || this.title == '') {
        alert('标题不能空')
      } else {
        this.$api.article
          .createArticle(
            this.title,
            parseInt(this.$store.state.article.tagId),
            this.$store.state.userCode
          )
          .then(res => {
            console.log(res.data)
          })
      }
    }
  }
}
</script>