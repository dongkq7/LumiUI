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

const app = createApp(App)
library.add(fas)
app.use(router)
app.component('LumiIcon', LumiIcon)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('LumiButton', LumiButton)

app.mount('#app')
