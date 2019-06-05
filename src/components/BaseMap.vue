<template>
  <div class="content">
    <ToolBar @openLayer="openLayer"></ToolBar>
    <div id="mapDiv">
      <div class="layout" v-show="content.visibility">
        <find-task v-if="content.findTask"></find-task>
      </div>
    </div>
  </div>
</template>

<script>
import {addHomeWidget} from '../map/widgets/home.js'
import {addScaleBarWidget} from '../map/widgets/scaleBar'
import {addFullScreenWidget} from '../map/widgets/fullScreen'
import {addBasemapToggleWidget} from '../map/widgets/basemapToggle'
import {addLegendWidget} from '../map/widgets/legend'
import {addFeatureLayer} from '../map/layer/featureLayer'
import {addImageryLayer} from '../map/layer/imageryLayer'
import ToolBar from './widgets/ToolBar'
import FindTask from './query/FindTask'
export default {
  name: 'baseMap',
  components: {
    ToolBar: ToolBar, FindTask
  },
  data () {
    return {
      view: null,
      content: {
        findTask: false,
        visibility: false
      },
    }
  },

  watch: {

  },
  methods: {
    openLayer () {
      this.content.findTask = true
      this.content.visibility = true
      console.log(this)
    }
  },
  mounted () {
    const v = this
    this.$nextTick(function () {
      arcgis(({Map, MapView, Home, ScaleBar, Fullscreen, BasemapToggle, Legend, Expand, FeatureLayer, ImageryLayer}) => {
        const myMap = new Map({
          basemap: 'streets',
          ground: 'world-elevation'
        })
        addFeatureLayer(myMap, FeatureLayer)
        addImageryLayer(myMap, ImageryLayer)
        myMap.reorder(ImageryLayer, 0)
        const view = new MapView({
          map: myMap,
          container: 'mapDiv'
        })
        view.zoom = 9
        v.view = view
        addHomeWidget(view, Home)
        addScaleBarWidget(view, ScaleBar)
        addFullScreenWidget(view, Fullscreen)
        addBasemapToggleWidget(view, BasemapToggle)
        addLegendWidget(view, Legend, Expand)

      })
    })
  }
}
</script>

<style scoped>
  #mapDiv,.content {
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0;
    position: relative
  }
  .layout {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background: #fff;
  }

</style>
