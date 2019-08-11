import myComponents from './global/myComponents'
import elementUi from './global/element-ui'
import mavonEditor from 'mavon-editor'
import marked from 'marked'

import 'mavon-editor/dist/css/index.css'



function plugin(Vue) {
    if (plugin.installed) {
        return
    }
    Vue.use(myComponents)
    Vue.use(elementUi)
    Vue.use(mavonEditor)
}

export default plugin