function addFeatureLayer (map, FeatureLayer) {
  const featureLayer = new FeatureLayer({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0'
  })
  map.add(featureLayer)
}
export {addFeatureLayer}
