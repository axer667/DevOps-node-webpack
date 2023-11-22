import { createApp } from 'vue'
import App from '/src/spa/App.vue'
import router from '/src/spa/router' // <---

createApp(App).use(router).mount('#root')