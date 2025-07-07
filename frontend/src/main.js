// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import axios from 'axios'
// import App from './App.vue'
// import router from './router'

// // Import global components
// import PeopleYouMayKnow from './components/PeopleYouMayKnow.vue'
// import Trends from './components/Trends.vue'

// const app = createApp(App)

// // Set up axios base URL
// axios.defaults.baseURL = 'http://localhost:8000'


// // Register global components 
// app.component('PeopleYouMayKnow', PeopleYouMayKnow)
// app.component('Trends', Trends)


// // Set up axios as a global property
// app.use(createPinia())
// app.use(router)

// app.mount('#app')


// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
// import axios from 'axios'

// import './assets/main.css'

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/signup/'
// axios.defaults.withCredentials = true // Enable cookies to be sent with requests

// const app = createApp(App)

// app.use(createPinia())
// app.use(router, axios)

// app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

// ✅ Correct base URL
axios.defaults.baseURL = '/api/'
axios.defaults.withCredentials = true
// Needed if you're using sessions/cookies

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
