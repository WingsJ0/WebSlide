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

  let slide = document.querySelector('#slide')
  slide.style['background-color'] = Config.background
}

/* public */

/**
 * @name 初始化
 */
const initiate = () => {
  setStyle()
}

/* construct */

export default initiate