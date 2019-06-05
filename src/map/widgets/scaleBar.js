function addScaleBarWidget (view, ScaleBar) {
  const scaleBarWidget = new ScaleBar({
    view: view,
    unit: 'metric'
  })
  view.ui.add(scaleBarWidget, 'bottom-left')
}
export {addScaleBarWidget}
