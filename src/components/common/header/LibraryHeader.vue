<template>
  <div>
    <top-navi-menu :activeIndex="activeIndexOuter"></top-navi-menu>
    <br />
  </div>
</template>

<script>
export default {
  name: 'LibraryHeader',

  props: {
    activeIndex: String,
    default: '1'
  },
  data() {
    return {
      activeIndexOuter: this.activeIndex
    }
  }
}
</script>

