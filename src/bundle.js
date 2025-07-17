// 引入样式
import './styles/index.scss'
// 引入字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// 引入自定义组件
import LumiIcon from './components/Icon/Icon.vue'
import LumiButton from './components/Button/Button.vue'
import LumiCard from './components/Card/Card.vue'
import LumiDialog from './components/Dialog/Dialog.vue'
import LumiPager from './components/Pager/Pager.vue'
import LumiCollapse from './components/Collapse/Collapse.vue'
import LumiCollapseItem from './components/Collapse/CollapseItem.vue'
import LumiTooltip from './components/Tooltip/Tooltip.vue'
import LumiDropdown from './components/Dropdown/Dropdown.vue'

const components = [
  LumiIcon,
  LumiButton,
  LumiCard,
  LumiDialog,
  LumiPager,
  LumiCollapse,
  LumiCollapseItem,
  LumiTooltip,
  LumiDropdown,
]

// 注册所有组件
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  // 注册字体图标组件
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}

// 全部导出
export default {
  install,
}
// 按需导出
export {
  install,
  LumiIcon,
  LumiButton,
  LumiCard,
  LumiDialog,
  LumiPager,
  LumiCollapse,
  LumiCollapseItem,
  LumiTooltip,
  LumiDropdown,
}
