<template>
  <div class="layout">
    <Layout :style="{minHeight:'100vh'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              item1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              item2
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{minHeight:'100vh'}">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed" hider-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" :class="menuitemClasses">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>显示地图</span>
              </template>
              <MenuItem name="1-1"><span @click="addMap">加载底图</span></MenuItem>
              <MenuItem name="1-2"><span @click="addMap">加载矢量图</span></MenuItem>
              <MenuItem name="1-3"><span @click="addMap">加载影像图</span></MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                <span>地图小部件挂载</span>
              </template>
              <MenuItem name="2-1"><span>比例尺</span></MenuItem>
              <MenuItem name="2-2"><span>图例</span></MenuItem>
              <MenuItem name="2-3"><span>切换底图</span></MenuItem>
              <MenuItem name="2-4"><span>全屏</span></MenuItem>
              <MenuItem name="2-5"><span @click="widget">回到原比例</span></MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-search"></Icon>
                <span>查询方式</span>
              </template>
              <MenuItem name="3-1"><span>属性查图形</span></MenuItem>
              <MenuItem name="3-2"><span>图形查属性</span></MenuItem>

            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: 'calc(100% - 24px);', background: '#fff'}">
            <base-map></base-map>
          </Content>
        </Layout>
      </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import BaseMap from './BaseMap'

export default {
  name: 'main-1',
  components: {
    'base-map': BaseMap
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''

      ]
    }
  },
  methods: {
    addMap: function (e) {

    },
    widget: function (e) {

    }

  }
}
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(7px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

</style>
