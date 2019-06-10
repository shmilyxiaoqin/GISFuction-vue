function queryTask (QueryTask, Query) {
  let layerUrl = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer'
  const queryTask = new QueryTask({
    url: layerUrl
  })
  const query = new Query({
    returnGeometry: true,
    outFields: ['*'],
    where: 'POP $gt; 100000'
  })
  queryTask.execute(query).then(function (results) {
    console.log(results.features)
  })
  queryTask.executeForCount(query).then(function (results) {
    console.log(results)
  })
}
export {queryTask}
