import { createApp } from 'vue';
import { createPinia } from 'pinia'; // <-- 1. Import Pinia
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia(); // <-- 2. Create a Pinia instance

app.use(pinia); // <-- 3. Tell Vue to use Pinia
app.use(router);
app.mount('#app');