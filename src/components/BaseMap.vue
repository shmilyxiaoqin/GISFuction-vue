<template>
  <div id="mapDiv"></div>
</template>

<script>
import {addHomeWidget} from '../map/widgets/home.js'
import {addScaleBarWidget} from '../map/widgets/scaleBar'
import {addFullScreenWidget} from '../map/widgets/fullScreen'
import {addBasemapToggleWidget} from '../map/widgets/basemapToggle'
import {addLegendWidget} from '../map/widgets/legend'
import {addFeatureLayer} from "../map/layer/featureLayer";
import {addImageryLayer} from "../map/layer/imageryLayer";

export default {
  name: 'baseMap',
  components: {},
  data () {
    return {
      view: null
    }
  },

  watch: {},

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
  #mapDiv {
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0;
  }
</style>
