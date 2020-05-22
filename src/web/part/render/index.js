/**
 * @name 初始化
 */

/* private */

import Data from '../../core/data'

let style = null
let slide = null

/**
 * @name 重置
 */
const reset = () => {
  style.innerHTML = ''
  slide.innerHTML = ''
}

/* public */

/**
 * @name 渲染
 * @param {Number} [O] index 索引
 */
const render = (index = 0) => {
  reset()

  let data = Data[index]

  style.innerHTML=data.style
  slide.innerHTML=data.template
}

/* construct */

style = document.querySelector('#style')
slide = document.querySelector('#slide')

export default render