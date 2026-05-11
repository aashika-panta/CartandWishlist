import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './Router'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"





createApp(App).use(Toast).use(createPinia()).use(router).mount('#app')
