/**
 * 新建一个查询任务，并初始化查询参数
 * @param FindTask 查询任务
 * @param FindParameters 查询参数
 * @param searchText 查询关键值
 */
function findTask (FindTask, FindParameters, searchText) {
  const find = new FindTask({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer'
  })
  let params = new FindParameters({
    layerIds: [0],
    searchFields: ['areaname'],
    searchText: searchText,
    returnGeometry: true
  })
  find.execute(params).then(result => {
    showResults(result)
  }).catch(err => console.log(err))
}

/**
 * 结果的显示方式
 */
function showResults (results) {
  for (let i; i < results.length; i++) {
    let features = results[i].feature
    console.log(features)
  }
}

export {findTask, showResults}
