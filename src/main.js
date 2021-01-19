import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'
import VAnimateCss from 'animate.css'

var app = createApp(App)
app.use(router)
app.mount('#app')

Vue.use(VAnimateCss)