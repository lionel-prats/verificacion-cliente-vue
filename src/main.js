import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// formkit
import { plugin, defaultConfig } from "@formkit/vue"
import config from '../formkit.config'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(plugin, defaultConfig(config)) // formkit

app.use(router)

app.mount('#app')
