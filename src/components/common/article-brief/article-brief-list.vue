<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <article-brief :item="item"></article-brief>
    </div>
  </div>
</template>

<script>
import articleBrief from './articleBrief.vue'

export default {
  name: 'article-brief-list',
  components: { articleBrief },
  data() {
    return {
      loading: false,
      items: [] //数据
    }
  },
  methods: {
    getItems() {
      this.$api.article.getArticleList().then(res => {
        if (res.data.code === 20000) {
          console.log('获取articleList成功')
          this.items = this.items.concat(res.data.articleList)
        } else {
          console.log(res.data.code)
        }
      })
    }
  },
  created() {
    this.getItems()
  }
}
</script>

