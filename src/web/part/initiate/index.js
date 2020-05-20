/**
 * @name 初始化
 */

/* private */

import config from '../../../../#temp/config.json';
import '../../style/index.css';

/**
 * @name 设置样式
 */
const setStyle = () => {
  let slide = document.querySelector('body>.slide')

  slide.style['background-color'] = config.background
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