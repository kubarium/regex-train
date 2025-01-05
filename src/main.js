import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(pinia)
app.mount('#app')
