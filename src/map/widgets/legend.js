function addLegendWidget (view, Legend, Expand) {
  const legendWidget = new Legend({
    view: view,
    style: {
      type: 'classic',
      layout: 'auto'
    }
  })
  const legendExpand = new Expand({
    view: view,
    content: legendWidget

  })
  view.ui.add(legendExpand, 'top-left')
}
export {addLegendWidget}
