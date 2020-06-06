/**
 * @name 初始化
 * @event render
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
  transition(() => {
    reset()
    update(index)
  })
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
/**
 * @name 切换渐变
 * @param {Function} 回调函数
 */
const transition = func => {
  let slide = dom.slide
  let handle_slide_transitionend = () => {
    slide.removeEventListener('transitionend', handle_slide_transitionend)

    func()

    slide.classList.remove('Hidden')
  }
  slide.addEventListener('transitionend', handle_slide_transitionend)
  setTimeout(() => {
    slide.classList.add('Hidden')
  })
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