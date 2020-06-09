/**
 * @name 服务
 */

/* private */

const FS = require('fs')
const FSPromises = FS.promises
const Path = require('path')
const Express = require('express')
const ExpressWS = require('express-ws')
const InputPath = require('../../util/cwd').inputPath
const OutputPath = require('../../util/cwd').outputPath
const Start = require('../../command/start')
const _ = require('lodash')
const Open = require('open')

const Port = 3000

let Connections = []

/**
 * @name 处理_文件变更
 */
let handle_fileChange = async () => {
  console.log('[Info] File change detected')

  await Start()

  for (let el of Connections) {
    if(el.readyState===1){
      el.send('reload')
    }
  }
}

/* public */

/**
 * @name 服务
 */
const serve = () => {
  let server = Express()

  ExpressWS(server)
  server.ws('/ws', ws => {
    Connections.push(ws)
  })

  server.get('*', async (req, res) => {
    let html = await FSPromises.readFile(Path.resolve(OutputPath, './index.html'))

    res.set('Content-Type', 'text/html')
    res.send(html)
  })

  server.listen(Port, () => {
    console.log(`[Info] Server listening on port ${Port}`)

    Open(`http://localhost:${Port}`)
  })

  FS.watch(InputPath, { recursive: true }, handle_fileChange)
}

/* construct */

handle_fileChange = _.debounce(handle_fileChange, 300)

module.exports = serve