/**
 * @name 初始化
 */

/* private */

import Broadcast from '../../core/broadcast'
import Data from '../../core/data'

let dom = {
  style: null,
  slide: null
}

/**
 * @name 处理渲染
 * @param {Number} index 索引
 */
const handle_render = (index = 0) => {
  reset()
  update(index)
}

/**
 * @name 重置
 */
const reset = () => {
  dom.style.innerHTML = ''
  dom.slide.innerHTML = ''
}
/**
 * @name 更新
 */
const update = index => {
  let data = Data[index]
  if (data) {
    dom.style.innerHTML = data.style
    dom.slide.innerHTML = data.template

    eval(data.script)
  }
}

/* public */

/**
 * @name 渲染
 */
const render = () => {
  dom.style = document.querySelector('#Style')
  dom.slide = document.querySelector('#Slide')

  Broadcast.addEvent('render')
  Broadcast.addListener('render', handle_render)
}

/* construct */

export default render