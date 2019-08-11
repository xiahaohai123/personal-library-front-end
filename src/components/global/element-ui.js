//Element-ui 组件引入
// 按需引入

// import {
//   button,
//   row,
//   col,
//   input,
//   Divider
// }from 'element-ui'

// import "element-ui/lib/theme-chalk/"
// 完整引入
// import Element from 'element-ui';

import button from 'element-ui/lib/button';
import row from 'element-ui/lib/row'
import col from 'element-ui/lib/col'
import input from 'element-ui/lib/input'
import container from 'element-ui/lib/container/'
import header from 'element-ui/lib/header'
import footer from 'element-ui/lib/footer'
import main from 'element-ui/lib/main'
import aside from 'element-ui/lib/aside'
import radioGroup from 'element-ui/lib/radio-group'
import radioButton from 'element-ui/lib/radio-button'
import menu from 'element-ui/lib/menu'
import submenu from 'element-ui/lib/submenu'
import menuItemGroup from 'element-ui/lib/menu-item-group'
import menuItem from 'element-ui/lib/menu-item'
import icon from 'element-ui/lib/icon'
import infiniteScroll from 'element-ui/lib/infinite-scroll'
import dialog from 'element-ui/lib/dialog'
import tabs from 'element-ui/lib/tabs'
import tabPane from 'element-ui/lib/tab-pane'
import dropdown from 'element-ui/lib/dropdown'
import dropdownMenu from 'element-ui/lib/dropdown-menu'
import dropdownItem from 'element-ui/lib/dropdown-item'
import link from 'element-ui/lib/link'

//Element-ui css样式引入
// import 'element-ui/lib/theme-chalk/index.css'
import "element-ui/lib/theme-chalk/button.css"
import "element-ui/lib/theme-chalk/row.css"
import "element-ui/lib/theme-chalk/col.css"
import "element-ui/lib/theme-chalk/input.css"
import "element-ui/lib/theme-chalk/container.css"
import "element-ui/lib/theme-chalk/header.css"
import "element-ui/lib/theme-chalk/footer.css"
import "element-ui/lib/theme-chalk/main.css"
import "element-ui/lib/theme-chalk/aside.css"
import "element-ui/lib/theme-chalk/radio-group.css"
import "element-ui/lib/theme-chalk/radio-button.css"
import "element-ui/lib/theme-chalk/menu.css"
import "element-ui/lib/theme-chalk/submenu.css"
import "element-ui/lib/theme-chalk/menu-item-group.css"
import "element-ui/lib/theme-chalk/menu-item.css"
import "element-ui/lib/theme-chalk/infinite-scroll.css"
import "element-ui/lib/theme-chalk/dialog.css"
import "element-ui/lib/theme-chalk/tabs.css"
import "element-ui/lib/theme-chalk/tab-pane.css"
import "element-ui/lib/theme-chalk/dropdown.css"
import "element-ui/lib/theme-chalk/dropdown-menu.css"
import "element-ui/lib/theme-chalk/dropdown-item.css"
import "element-ui/lib/theme-chalk/link.css"

// 响应式布局用
import 'element-ui/lib/theme-chalk/display.css'
// 图标
import 'element-ui/lib/theme-chalk/icon.css'

function plugin(Vue) {
    if (plugin.installed) {
        return
    }
    Vue.use(row);
    Vue.use(col);
    Vue.use(button);
    Vue.use(input)
    Vue.use(container)
    Vue.use(header)
    Vue.use(footer)
    Vue.use(aside)
    Vue.use(main)
    Vue.use(radioGroup)
    Vue.use(radioButton)
    Vue.use(menu)
    Vue.use(submenu)
    Vue.use(menuItemGroup)
    Vue.use(menuItem)
    Vue.use(icon)
    Vue.use(infiniteScroll)
    Vue.use(dialog)
    Vue.use(tabs)
    Vue.use(tabPane)
    Vue.use(dropdown)
    Vue.use(dropdownMenu)
    Vue.use(dropdownItem)
    Vue.use(link)
}

export default plugin