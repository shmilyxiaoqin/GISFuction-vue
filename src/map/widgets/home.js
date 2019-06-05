function addHomeWidget (view, Home) {
  const homeWidget = new Home({ view })
  view.ui.add(homeWidget, 'top-left')
}
export {addHomeWidget}
