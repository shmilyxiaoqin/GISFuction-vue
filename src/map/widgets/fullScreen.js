function addFullScreenWidget (view, Fullscreen) {
  const fullScreenWidget = new Fullscreen({view})
  view.ui.add(fullScreenWidget, 'top-left')
}
export {addFullScreenWidget}
