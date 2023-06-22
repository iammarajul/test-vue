import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import store from './stores';



const app = createApp(App)
app.use(PrimeVue);
app.use(store);



app.mount('#app')
