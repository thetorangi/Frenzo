<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()

const greetings = [
  "Welcome aboard, friend!",
  "Glad you're here, rookie!",
  "Hello, Dude! Ready to begin?",
  "Nice to meet you, legend!",
  "Let’s get started, warrior!",
  "Join the squad, ninja!",
]
const greeting = greetings[Math.floor(Math.random() * greetings.length)]

const form = ref({
  email: '',
  name: '',
  password1: '',
  password2: ''
})

const errors = ref([])

const submitForm = async () => {
  errors.value = []

  if (!form.value.email) errors.value.push('Your e-mail is missing')
  if (!form.value.name) errors.value.push('Your name is missing')
  if (!form.value.password1) errors.value.push('Your password is missing')
  if (form.value.password1 !== form.value.password2) errors.value.push('The password does not match')

  if (errors.value.length > 0) return

  try {
    const response = await axios.post('/api/signup/', form.value)

    if (response.data.message === 'success') {
      toastStore.showToast(5000, 'User registered! Please activate your account via email.', 'bg-emerald-500')
      form.value = { email: '', name: '', password1: '', password2: '' }
    } else {
      const data = JSON.parse(response.data.message)
      for (const key in data) {
        errors.value.push(data[key][0].message)
      }
      toastStore.showToast(5000, 'Something went wrong. Please try again.', 'bg-red-300')
    }
  } catch (error) {
    console.error(error)
    toastStore.showToast(5000, 'Server error. Try again later.', 'bg-red-500')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-8">
      
      <!-- Left Column -->
      <div class="lg:w-1/2 w-full bg-gradient-to-br from-purple-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md">
        <div class="p-10 md:p-12 w-full h-full flex flex-col justify-center">
          <div class="flex items-center space-x-4 mb-6">
            <img 
              src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" 
              class="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500" 
              alt="Itachi Avatar"
            />
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{{ greeting }}</h2>
          </div>

          <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Sign Up</h1>

          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Create an account to start using our platform. It's quick and easy! Just fill in your details beside and you'll be ready to go.
          </p>

          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Already have an account? 
            <RouterLink to="/login" class="text-purple-600 dark:text-purple-400 underline">Click here</RouterLink> to log in!
          </p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="lg:w-1/2 w-full flex">
        <div class="p-10 md:p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg w-full shadow-md flex-1 flex flex-col justify-center">
          <form class="space-y-6" @submit.prevent="submitForm">
            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="Your full name" 
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">E-mail</label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="Your e-mail address" 
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input 
                v-model="form.password1"
                type="password" 
                placeholder="Your password" 
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
              <input 
                v-model="form.password2"
                type="password" 
                placeholder="Confirm your password" 
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
            </div>

            <div v-if="errors.length > 0" class="bg-red-300 text-white rounded-lg p-6">
              <p v-for="error in errors" :key="error">{{ error }}</p>
            </div>

            <div>
              <button 
                class="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 transition text-white rounded-lg font-semibold shadow-md"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
