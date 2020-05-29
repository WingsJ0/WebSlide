/**
 * @name 初始化
 */

/* private */

import Broadcast from '../../core/broadcast'
import Data from '../../core/data'

let dom={
  style:null,
  slide:null
}

/**
 * @name 重置
 */
const reset = () => {
  dom.style.innerHTML = ''
  dom.slide.innerHTML = ''
}

/**
 * @name 处理渲染
 * @param {Number} index 索引
 */
const handle_render = index => {
  render(index)
}

/* public */

/**
 * @name 渲染
 * @param {Number} [O] index 索引
 */
const render = (index = 0) => {
  reset()

  let data = Data[index]

  dom.style.innerHTML = data.style
  dom.slide.innerHTML = data.template

  eval(data.script)
}

/* construct */

dom.style = document.querySelector('#Style')
dom.slide = document.querySelector('#Slide')

Broadcast.addEvent('render')
Broadcast.addListener('render', handle_render)

export default render