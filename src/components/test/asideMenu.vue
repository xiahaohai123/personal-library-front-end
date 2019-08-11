<template>
  <div class="navMenu">
    <label v-for="navMenu in navMenus" :key="navMenu.entity.id">
      <el-menu-item
        v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
        :route="navMenu.entity.value"
      >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title" class="item_title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <el-submenu
        v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
      >
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span class="item_title">{{navMenu.entity.alias}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.navMenus)
  },
  methods: {}
}
</script>

<style scoped>
.navMenu {
  width: 100%;
  height: 100%;
  background: #00142a !important;
}
.item_title {
  color: #fff;
  background-color: #00142a !important;
}
</style>
<style>
.el-submenu .el-submenu__title {
  background-color: #00142a !important;
  color: #eee !important;
  text-align: left !important;
}
.el-submenu .el-menu-item {
  color: #eee !important;
  background-color: #00142a !important;
}
</style>