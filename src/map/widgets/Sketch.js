function getSketchWidget (view, Sketch) {
  const sketchWidget = new Sketch({
    view,
    layer: graphicsLayer
  })
}
export {getSketchWidget}
