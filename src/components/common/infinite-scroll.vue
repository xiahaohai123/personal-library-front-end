<template>
  <div class="infinite-list-wrapper">
    <template>
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="infinite-list-item" :key="i">{{i}}</li>
      </ul>
      <p v-if="loading">loading...</p>
      <p v-if="noMore">nothing else</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'infinite-scroll',
  data() {
    return {
      count: 0,
      loading: false
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.count += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>