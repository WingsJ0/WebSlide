/**
 * @name 自动刷新
 */

/* public */

/**
 * @name 自动刷新
 */
const autoReload = () => {
  let ws = new WebSocket('ws://localhost:3000/ws');
  ws.onmessage = function (ev) {
    switch (ev.data) {
      case 'reload':
        location.reload()
        break
    }
  }
}

/* construct */

export default autoReload