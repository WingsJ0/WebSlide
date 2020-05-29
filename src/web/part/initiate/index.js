/**
 * @name 初始化
 */

/* private */

import Config from '../../../../#temp/config.json';
import '../../style/index.css';

/**
 * @name 设置样式
 */
const setStyle = () => {
  document.title = Config.title
  document.documentElement.style.fontSize = Config.fontSize
  document.documentElement.style['background-color'] = Config.background
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