/**
 * @name 初始化
 */

/* private */

import '../../../../#temp/config.js'
import Config from '../../../../#temp/config.json'
import '../../style/index.css'

/**
 * @name 设置样式
 */
const setStyle = () => {
  let html = document.documentElement

  document.title = Config.title
  html.style.fontSize = Config.fontSize
  html.style['background-color'] = Config.background

  if (Config.rate === '16:9') {
    html.style.setProperty('--Slide-Height', '56.25vw');
  } else if (Config.rate === '4:3') {
    html.style.setProperty('--Slide-Height', '75vw');
  }
}
/**
 * @name 设置控件
 */
const setControl = () => {
  document.querySelector('#Pagination').classList.toggle('Enable', Config.pagination)
}

/* public */

/**
 * @name 初始化
 */
const initiate = () => {
  setStyle()
  setControl()
}

/* construct */

export default initiate