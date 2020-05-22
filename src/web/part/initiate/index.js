/**
 * @name 初始化
 */

/* private */

import config from '../../../../#temp/config.json';
import broadcast from '../../core/broadcast';
import '../../style/index.css';

/**
 * @name 设置样式
 */
const setStyle = () => {
  let slide = document.querySelector('#slide')

  slide.style['background-color'] = config.background
}
/**
 * @name 设置控制器
 */
const setControl = () => {
  let previous = document.querySelector('#previous')
  previous.addEventListener('click', () => {
    broadcast.trigger('previous')
  })

  let next = document.querySelector('#next')
  next.addEventListener('click', () => {
    broadcast.trigger('next')
  })
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