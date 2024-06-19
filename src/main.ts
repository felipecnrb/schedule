import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Estilos PrimeVue 
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Tailwind CSS 
/* import './index.css' */

const app = createApp(App)
app.use(router)
app.mount('#app')
