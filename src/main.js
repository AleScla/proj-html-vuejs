import { createApp } from 'vue'
import App from './App.vue'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import VueSplide from '../node_modules/@splidejs/vue-splide';

createApp(App).use(VueSplide).mount('#app')

