<template>
  <div class="footer-layout">
    <!-- <el-divider></el-divider> -->
    <hr class="footer-divider" />
    <el-row>
      <el-col>
        <span>System Time:{{SystemTime | timeFormat}}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
import { setInterval } from 'timers'
export default {
  name: 'LibraryFooter',
  data() {
    return {
      SystemTime: new Date(),
      timerId: null
    }
  },
  mounted() {
    this.timerId = setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime() {
      this.SystemTime = new Date()
    }
  }
}
</script>