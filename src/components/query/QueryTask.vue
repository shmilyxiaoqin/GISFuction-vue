<template>
  <div class="content">
    <i-button type="primary" @click="queryGeometry">空间查询</i-button>
  </div>
</template>

<script>
export default {
  name: 'queryTask',
  data () {

  },
  methods: {
    queryGeometry () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 0;
  margin: 0;
  right: 200px;
  height: 100%;
  background: #fff;
}
</style>
