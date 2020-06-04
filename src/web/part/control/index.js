/**
 * @name 控制
 */

/* private */

import Config from '../../../../#temp/config.json'
import Broadcast from '../../core/broadcast'
import Data from '../../core/data'
import Navigate from '../../core/navigate'

let total = Data.length
let index = Navigate.getIndex(0)
let dom = {
  pagination: null,
  previous: null,
  next: null,
  home: null
}

/**
 * @name 更新
 */
const update = () => {
  dom.pagination.innerText = `${index + 1} / ${total}`
  dom.previous.classList.toggle('Disable', index === 0)
  dom.next.classList.toggle('Disable', index === total - 1)
}
/**
 * @name 处理上一张
 */
const handle_previous = () => {
  index--
  index = Math.max(index, 0)

  update()
  Broadcast.trigger('render', index)
  Navigate.pushState(index)
}
/**
 * @name 处理下一张
 */
const handle_next = () => {
  index++
  index = Math.min(index, total - 1)

  update()
  Broadcast.trigger('render', index)
  Navigate.pushState(index)
}
/**
 * @name 处理回到首页
 */
const handle_home = () => {
  index = 0

  update()
  Broadcast.trigger('render', index)
  Navigate.pushState(index)
}

/* public */

/**
 * @name 控制
 */
const control = () => {
  let pagination = document.querySelector('#Pagination')
  pagination.classList.toggle('Enable', Config.pagination)
  dom.pagination = pagination

  let previous = document.querySelector('#Previous')
  previous.addEventListener('click', handle_previous)
  dom.previous = previous

  let next = document.querySelector('#Next')
  next.addEventListener('click', handle_next)
  dom.next = next

  let home = document.querySelector('#Home')
  home.addEventListener('click', handle_home)
  dom.home = home

  update()
}

/* construct */

export default control
