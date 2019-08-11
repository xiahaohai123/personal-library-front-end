<template>
  <div>
    <el-row type="flex" justify="center" style="flex-wrap: nowrap;">
      <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="3"></el-col>
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="18" class="body-layout-column">
        <slot name="content"></slot>
      </el-col>
      <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="3"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'body-layout'
}
</script>