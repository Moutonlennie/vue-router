import '../scss/main.scss'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


// createApp(App).mount('#app');
const app = createApp(App);

app.use(router);
app.mount('#app');



