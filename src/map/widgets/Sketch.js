function addSketchWidget (view, map, Sketch, graphicsLayer) {
  const sketchWidget = new Sketch({
    view,
    layer: graphicsLayer
  })
  view.ui.add(sketchWidget, 'top-right')
  sketchWidget.on('create', function (e) {
    if (e.state === 'complete') {
      map.add(graphicsLayer)
    }
  })
}
export {addSketchWidget}
