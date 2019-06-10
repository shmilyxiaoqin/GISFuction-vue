<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-apps" />
         图层管理
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-search" />
            查询管理
        </template>
        <MenuItem name="2-1"><span @click="$emit('openLayer')">属性查图形</span></MenuItem>
        <MenuItem name="2-2"><span @click="$emit('openTool')">图形查属性</span></MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-bug" />
            空间分析
        </template>
        <MenuItem name="3-1"><span>缓冲区分析</span></MenuItem>
        <MenuItem name="3-2"><span>叠加分析</span></MenuItem>
        <MenuItem name="3-3"><span>公共设施服务分析</span></MenuItem>
      </Submenu>
      <MenuItem name="4">
          <Icon type="ios-brush" />
            <span @click="$emit('draw')">在线编辑</span>
      </MenuItem>
    </Menu>
</template>

<script>

export default {
  name: 'toolbar',
  data () {
    return {
      theme1: 'dark'
    }
  },
  props: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
