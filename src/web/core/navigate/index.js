/**
 * @name 导航
 */

/* public */

/**
 * @name 获取索引
 * @return {Number} 索引
 */
const getIndex = () => {
  let urlSearchParams = new URLSearchParams(location.search)
  let index = +urlSearchParams.get('index')

  return index
}
/**
 * @name 添加状态
 * @param {Number} index 索引 
 */
const pushState = index => {
  history.pushState(null,null,`${location.protocol}//${location.host}${location.pathname}?index=${index}`)
}

/* construct */

export default { getIndex,pushState }


