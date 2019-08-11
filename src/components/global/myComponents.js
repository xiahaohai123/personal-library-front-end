import LibraryHeader from '@/components/common/header/LibraryHeader.vue'
import LibraryFooter from '@/components/common/footer/LibraryFooter.vue'
import asideNaviMenu from '@/components/common/aside-navigation/aside-navigation-menu.vue'
import topNaviMenu from '@/components/common/header/top-navigation-menu.vue'
import infiniteScroll from '@/components/common/infinite-scroll.vue'
import articleBriefList from '@/components/common/article-brief/article-brief-list.vue'
import loginRegisterDialog from '@/components/common/header/login-register-dialog.vue'
import loginUser from '@/components/common/header/login-user.vue'
import bodyLayout from '@/components/common/body/body-layout.vue'
import articleDetailed from '@/components/common/article/article-detailed.vue'

import '@/components/css/grid.css'
import '@/components/css/flex.css'
import '@/components/css/article-brief.css'
import '@/components/css/page-layout.css'
import '@/components/css/footer.css'
import '@/components/css/login-register-dialog.css'
import '@/components/css/top-navigation-menu.css'
import '@/components/css/login-user.css'
import '@/components/css/article.css'
import '@/components/css/me-read.css'

function plugin(Vue) {
    if (plugin.installed) {
        return
    }
    Vue.component("libraryHeader", LibraryHeader)
    Vue.component("libraryFooter", LibraryFooter)
    Vue.component("asideNaviMenu", asideNaviMenu)
    Vue.component("topNaviMenu", topNaviMenu)
    Vue.component("infiniteScroll", infiniteScroll)
    Vue.component("articleBriefList", articleBriefList)
    Vue.component("loginRegisterDialog", loginRegisterDialog)
    Vue.component("loginUser", loginUser)
    Vue.component("bodyLayout", bodyLayout)
    Vue.component("articleDetailed", articleDetailed)
}

export default plugin