<template>
  <div>
    <el-container direction="vertical">
      <div class="article-button-container">
        <el-button
          type="primary"
          @click="edit"
          v-show="!finishEditButtonFlag"
          class="article-button"
        >编辑文本</el-button>
        <el-button
          type="primary"
          @click="finishEdit"
          v-show="finishEditButtonFlag"
          class="article-button"
        >结束编辑</el-button>
      </div>

      <mavon-editor
        ref="md"
        v-model="content"
        :toolbars="toolbars"
        :toolbarsFlag="toolbarsFlag"
        :subfield="subfield"
        :defaultOpen="defaultOpen"
        :editable="editable"
        @save="save"
        @imgAdd="imgAdd"
        @imgDel="imgDelete"
      ></mavon-editor>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'article-detailed',
  data() {
    return {
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
  computed: {
    userCode() {
      return this.$store.state.userCode
    },
    content: {
      get() {
        return this.$store.state.article.content
      },
      set(newValue) {
        this.$store.state.article.content = newValue
      }
    },
    tagId() {
      return this.$store.state.article.tagId
    }
  },
  methods: {
    save(value, render) {
      console.log(value)
      console.log(render)
      console.log(`content=${this.content}`)
      this.$api.article
        .saveArticle(this.userCode, this.tagId, this.content)
        .then(res => {
          console.log(res)
        })
    },
    edit() {
      this.editable = true
      this.toolbarsFlag = true
      this.subfield = true
      this.finishEditButtonFlag = true
    },
    finishEdit() {
      this.finishEditButtonFlag = false
      this.editable = false
      this.toolbarsFlag = false
      this.subfield = false
    },
    imgAdd(fileName, imgFile) {
      let formdata = new FormData()
      formdata.append('img', imgFile)
      this.$api.article.imgAdd(this.tagId, formdata).then(res => {
        for (let saveFileName of res.data.saveList) {
          this.$refs.md.$img2Url(fileName, saveFileName.fileLink)
        }
      })
    },
    imgDelete(fileName) {
      console.log(fileName[0])
      this.$api.article.imgDelete(fileName[0]).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>