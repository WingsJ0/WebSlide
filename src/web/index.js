/* private */

import Broadcast from './core/broadcast'
import Navigate from './core/navigate'
import AutoReload from './part/auto-reload'
import Control from './part/control'
import Initiate from './part/Initiate'
import Render from './part/render'

/* construct */

Initiate()
Control()
Render()
AutoReload()

Broadcast.trigger('render', Navigate.getIndex())