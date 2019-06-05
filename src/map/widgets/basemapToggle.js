function addBasemapToggleWidget (view, BasemapToggle) {
  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: 'hybrid'
  })
  view.ui.add(basemapToggle, 'bottom-right')
}
export {addBasemapToggleWidget}
