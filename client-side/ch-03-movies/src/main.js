import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router/main'

import './assets/bootstrap/css/main.css'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId: "408054119270-s8i9n0qpqr9muv4hr0g9tdujtc39d60l.apps.googleusercontent.com"
  })

app.use(pinia)
app.use(router)

app.mount('#app')
