<template>
  <div class="content">
    <ToolBar @openLayer="openLayer"
             @draw="draw"
             @openTool="openTool"></ToolBar>
    <div id="mapDiv">
      <div class="layout" v-show="content.visibility">
        <find-task v-if="content.findTask" @click="find"></find-task>
        <query-task v-if="content.queryTask" @click="queryGeometry"></query-task>
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
import {findTask} from '../map/search/findTask'
import {addSketchWidget} from '../map/widgets/Sketch'
import {queryTask} from '../map/search/queryTask'
import ToolBar from './widgets/ToolBar'
import FindTask from './query/FindTask'
import QueryTask from './query/QueryTask'

export default {
  name: 'baseMap',
  components: {
    ToolBar: ToolBar,
    FindTask,
    QueryTask
  },
  data () {
    return {
      view: null,
      map: null,
      content: {
        findTask: false,
        visibility: false,
        queryTask: false
      }
    }
  },

  watch: {

  },
  methods: {
    openLayer () {
      this.content.findTask = true
      this.content.visibility = true
    },
    find (searchText) {
      findTask(arcgisObject.FindTask, arcgisObject.FindParameters, searchText)
    },
    draw () {
      const graphicsLayer = new arcgisObject.GraphicsLayer()
      addSketchWidget(this.view, this.map, arcgisObject.Sketch, graphicsLayer)
    },
    openTool () {
      const graphicsLayer = new arcgisObject.GraphicsLayer()
      addSketchWidget(this.view, this.map, arcgisObject.Sketch, graphicsLayer)
      this.content.visibility = true
      this.content.queryTask = true
    },
    queryGeometry () {
      queryTask(arcgisObject.QueryTask, arcgisObject.Query)
    }
  },
  mounted () {
    const v = this
    this.$nextTick(function () {
      arcgis(({Map, MapView, Home, ScaleBar, Fullscreen, BasemapToggle, Legend, Expand, FeatureLayer, ImageryLayer,
            }) => {
        const myMap = new Map({
          basemap: 'streets',
          ground: 'world-elevation'
        })
        addFeatureLayer(myMap, FeatureLayer)
        addImageryLayer(myMap, ImageryLayer)
        const view = new MapView({
          map: myMap,
          container: 'mapDiv'
        })
        view.zoom = 9
        v.view = view
        v.map = myMap
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
    position: relative
  }
  .layout {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: #fff;
  }

</style>
