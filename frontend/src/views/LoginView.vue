<!-- <script setup>

</script> -->

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-8">
      <!-- Left Column -->
      <div
        class="lg:w-1/2 w-full bg-gradient-to-br from-purple-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md"
      >
        <div class="p-10 md:p-12 w-full h-full flex flex-col justify-center">
          <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Login</h1>

          <div class="flex items-center space-x-4 mb-6">
            <img
              src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
              alt="Itachi Avatar"
            />
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{{ greeting }}</h2>
          </div>

          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Please enter your credentials to access your account.
          </p>

          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Don't have an account?
            <br />
            <RouterLink to="/signup" class="text-purple-600 dark:text-purple-400 underline"
              >Click here</RouterLink
            >
            to sign up!
          </p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="lg:w-1/2 w-full flex">
        <div
          class="p-10 md:p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg w-full shadow-md flex-1 flex flex-col justify-center"
        >
          <form class="space-y-6" v-on:submit.prevent="submitForm">
            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">E-mail</label>
              <input
                type="email"
                v-model="form.email"
                placeholder="Your e-mail address"
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                v-model="form.password"
                placeholder="Your password"
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

             <template v-if="errors.length > 0">
                        <div class="bg-red-300 text-white rounded-lg p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
            </template>

            <div>
              <button
                class="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 transition text-white rounded-lg font-semibold shadow-md"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

import { RouterLink } from 'vue-router'

const greetings = [
  'Welcome back, champ!',
  'Hey again, legend!',
  'Good to see you, friend!',
  'Welcome back, ninja!',
  'You’re back, dude!',
  'Missed you, pal!',
]
const greeting = greetings[Math.floor(Math.random() * greetings.length)]

const userStore = useUserStore()
const router = useRouter()

const form = ref({
  email: '',
  password: ''
})

const errors = ref([])

// const submitForm = async () => {
//   errors.value = []

//   if (!form.value.email) {
//     errors.value.push('Your e-mail is missing')
//   }

//   if (!form.value.password) {
//     errors.value.push('Your password is missing')
//   }

//   if (errors.value.length === 0) {
//     try {
//       const response = await axios.post('/login/', form.value)
//       userStore.setToken(response.data)

//       const me = await axios.get('/me/', {
//         headers: {
//           Authorization: `Bearer ${response.data.access}`,
//         },
//       })

//       userStore.setUserInfo(me.data)
//       router.push('/feed')
//     } catch (error) {
//       console.log('Login or fetch error', error)
//     }
//   } else {
//     console.log('Form errors:', errors.value)
//     // If using a toast, call it here
//     // toast.showToast({ message: 'Please fix the errors.', type: 'error' })
//   }
// }
const submitForm = async () => {
  errors.value = []

  if (!form.value.email) {
    errors.value.push('Your e-mail is missing')
  }

  if (!form.value.password) {
    errors.value.push('Your password is missing')
  }

  if (errors.value.length === 0) {
    try {
      const response = await axios.post('/login/', form.value)
      userStore.setToken(response.data)

      const me = await axios.get('/me/', {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
        },
      })

      userStore.setUserInfo(me.data)
      router.push('/feed')
    } catch (error) {
      console.log('Login or fetch error', error)

      // Handle 401 or 400 response from /login/ or /me/
      if (error.response && error.response.status === 401) {
        errors.value.push('Invalid email or password')
      } else {
        errors.value.push('Something went wrong. Please try again.')
      }
    }
  }
}

</script>
