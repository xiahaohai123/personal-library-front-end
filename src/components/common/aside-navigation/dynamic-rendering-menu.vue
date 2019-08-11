<template>
  <div>
    <label v-for="navMenu in navMenus" :key="navMenu.entity.id">
      <el-menu-item
        v-if="navMenu.entity&&navMenu.entity.isArticle===1"
        :key="navMenu.entity.id"
        :index="navMenu.entity.id.toString()"
        :route="navMenu.entity.source"
      >
        <span slot="title">{{navMenu.entity.title}}</span>
      </el-menu-item>

      <el-submenu
        v-if="navMenu.entity&&(navMenu.entity.isArticle===0||navMenu.entity.isArticle===-1)"
        :key="navMenu.entity.id"
        :index="navMenu.entity.id.toString()"
      >
        <template slot="title">
          <span>{{navMenu.entity.title}}</span>
        </template>
        <dynamic-rendering-menu :navMenus="navMenu.childNodes"></dynamic-rendering-menu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: 'dynamic-rendering-menu',
  props:['navMenus'],
  
}
</script>