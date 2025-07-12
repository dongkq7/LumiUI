import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import PetalIcon from './components/Icon/Icon.vue'

const app = createApp(App)
library.add(fas)
app.use(router)
app.component('PetalIcon', PetalIcon)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
