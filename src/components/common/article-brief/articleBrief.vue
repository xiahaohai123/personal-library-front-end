<template>
  <div>
    <!-- <el-container class="grid-content bg-purple-light">
      <el-header class="article-brief-header">
        <div class="flex flex-start">
          <img :src="imgUrl" alt="图片不见惹" width="50px" height="50px" />
          <el-divider direction="vertical"></el-divider>

          <div class="flex-column">
            <span>{{ item.nickname }}</span>
            <span>{{ item.updateTime | timeFormatByTimeStamp('(yyyy)-mm-dd') }}</span>
          </div>
        </div>
        <el-divider></el-divider>
      </el-header>

      <el-main>
        <p>{{ item.brief }}</p>
      </el-main>
    </el-container>-->

    <div class="article-brief-body-layout" @click="goToArticle">
      <div class="article-brief-header-layout">
        <img
          :src="item.headPortraitUrl"
          alt="图片不见惹"
          width="50px"
          height="50px"
          class="article-brief-head-portrait"
        />

        <div class="article-brief-header-information-layout">
          <h4 class="article-brief-author">{{ item.nickname }}</h4>
          <span
            class="article-brief-update-time"
          >{{ item.updateTime | timeFormatByTimeStamp('(yyyy)-mm-dd') }}</span>
        </div>

        <div class="article-brief-title-layout">
          <h2 class="article-brief-title">{{ item.title }}</h2>
        </div>
      </div>
      <hr class="article-brief-body-divider" />

      <div class="article-brief-brief-layout">
        <p>{{ item.brief }}</p>
      </div>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: 'article-brief',
  props: ['item'],
  methods:{
    goToArticle(){
      this.$router.push({path: `/${this.item.userCode}/${this.item.tagId}`})
    }
  }
}
</script>