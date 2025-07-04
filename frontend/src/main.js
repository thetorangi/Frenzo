import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'

// Import global components
import PeopleYouMayKnow from './components/PeopleYouMayKnow.vue'
import Trends from './components/Trends.vue'

const app = createApp(App)

// Set up axios base URL
axios.defaults.baseURL = 'http://localhost:8000'


// Register global components 
app.component('PeopleYouMayKnow', PeopleYouMayKnow)
app.component('Trends', Trends)


// Set up axios as a global property
app.use(createPinia())
app.use(router)

app.mount('#app')
