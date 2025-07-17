import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import LumiIcon from './components/Icon/Icon.vue'
import LumiButton from './components/Button/Button.vue'
import LumiCard from './components/Card/Card.vue'
import LumiDialog from './components/Dialog/Dialog.vue'
import LumiPager from './components/Pager/Pager.vue'
import LumiCollapse from './components/Collapse/Collapse.vue'
import LumiCollapseItem from './components/Collapse/CollapseItem.vue'
import LumiTooltip from './components/Tooltip/Tooltip.vue'
import LumiDropdown from './components/Dropdown/Dropdown.vue'

const app = createApp(App)
library.add(fas)
app.use(router)
app.component('LumiIcon', LumiIcon)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('LumiButton', LumiButton)
app.component('LumiCard', LumiCard)
app.component('LumiDialog', LumiDialog)
app.component('LumiPager', LumiPager)
app.component('LumiCollapse', LumiCollapse)
app.component('LumiCollapseItem', LumiCollapseItem)
app.component('LumiTooltip', LumiTooltip)
app.component('LumiDropdown', LumiDropdown)

app.mount('#app')
