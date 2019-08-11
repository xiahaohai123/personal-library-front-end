<template>
  <div>
    <body-layout>
      <template v-slot:content>
        <el-container>
          <el-header>
            <top-navi-menu activeIndex="2"></top-navi-menu>
          </el-header>
          <el-main class="me-read-main">
            <div class="md-read-editor-header-1">
              <div class="md-read-editor-header-2">
                <h1>{{ title }}</h1>
                <div class="md-read-editor-header-3">
                  <img :src="headPortraitUrl" alt="图没了" class="me-read-headPortrait" />
                  <span>作者: {{ nickname }} &nbsp;</span>
                  <span>更新时间: {{ updateTime | timeFormatByTimeStamp('(yyyy)-mm-dd') }}</span>
                </div>
              </div>
            </div>
            <hr class="me-read-hr" />
            <mavon-editor
              class="me-read-editor"
              ref="md"
              v-model="content"
              :toolbars="toolbars"
              :toolbarsFlag="toolbarsFlag"
              :subfield="subfield"
              :defaultOpen="defaultOpen"
              :editable="editable"
            ></mavon-editor>
          </el-main>
          <el-footer>
            <libraryFooter></libraryFooter>
          </el-footer>
        </el-container>
      </template>
    </body-layout>
  </div>
</template>

<script>
export default {
  name: 'article-read',
  data() {
    return {
      userCode: this.$route.params.userCode,
      tagId: this.$route.params.tagId,
      title: '',
      nickname: null,
      headPortraitUrl: null,
      updateTime: null,
      content: '',
      toolbarsFlag: false,
      subfield: false,
      defaultOpen: 'preview',
      editable: false,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      finishEditButtonFlag: false
    }
  },
  created() {
    this.$api.article.getPublicArticle(this.userCode, this.tagId).then(res => {
      this.title = res.data.article.title
      this.nickname = res.data.article.nickname
      this.headPortraitUrl = res.data.article.headPortraitUrl
      this.updateTime = res.data.article.updateTime
      this.content = res.data.article.contentMD
    })
  }
}
</script>