/**
 * @name 控制
 */

/* private */

import Broadcast from '../../core/broadcast'
import Data from '../../core/data'
import Render from '../render'

let total = Data.length
let index = 0
let dom = {
  previous: null,
  next: null
}

/**
 * @name 设置控制器
 */
const initiate = () => {
  let previous = document.querySelector('#previous')
  previous.addEventListener('click', () => {
    Broadcast.trigger('previous')
  })
  dom.previous = previous

  let next = document.querySelector('#next')
  next.addEventListener('click', () => {
    Broadcast.trigger('next')
  })
  dom.next = next

  update()
}
/**
 * @name 更新
 */
const update = () => {
  dom.previous.classList.toggle('disable', index === 0)
  dom.next.classList.toggle('disable', index === total-1)
}
/**
 * @name 处理上一张
 */
const handle_previous = () => {
  index--
  index = Math.max(index, 0)

  update()

  Render(index)
}
/**
 * @name 处理下一张
 */
const handle_next = () => {
  index++
  index = Math.min(index, total - 1)

  update()

  Render(index)
}

/* public */

/**
 * @name 控制
 */
const control = () => {
  Broadcast.addListener('previous', handle_previous)
  Broadcast.addListener('next', handle_next)
}

/* construct */

initiate()

export default control

