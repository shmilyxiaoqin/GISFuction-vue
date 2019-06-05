function addImageryLayer (map, ImageryLayer) {
  const imageryLayer = new ImageryLayer({
    url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/CharlotteLAS/ImageServer'
  })
  map.add(imageryLayer)
}
export {addImageryLayer}
