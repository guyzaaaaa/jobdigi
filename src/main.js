import './style.css'
import '../src/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTailwindDatepicker from "vue-tailwind-datepicker";
const app = createApp(App)

app.use(router)
app.use(VueTailwindDatepicker);
app.mount('#app')
