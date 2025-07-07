
<script setup>
import { ref } from 'vue'
import { useToastStore } from '@/stores/toast'
import { RouterLink } from 'vue-router'
import axios from 'axios'

// Toast store
const toastStore = useToastStore()

// Greeting logic
const greetings = [
  'Welcome aboard, friend!',
  "Glad you're here, rookie!",
  'Hello, Dude! Ready to begin?',
  'Nice to meet you, legend!',
  'Let’s get started, warrior!',
  'Join the squad, ninja!',
]
const greeting = greetings[Math.floor(Math.random() * greetings.length)]

// Reactive form data
const form = ref({
  name: '',
  email: '',
  password1: '',
  password2: '',
})

// Reactive error list
const errors = ref([])

// Submit function
const submitForm = async () => {
  errors.value = []

  if (!form.value.email) errors.value.push('Your e-mail is missing')
  if (!form.value.name) errors.value.push('Your name is missing')
  if (!form.value.password1) errors.value.push('Your password is missing')
  if (form.value.password1 !== form.value.password2)
    errors.value.push('The password does not match')

  if (errors.value.length === 0) {
    try {
      const response = await axios.post('/signup/', form.value)

      if (response.data.message === 'success') {
        toastStore.showToast(
          5000,
          'The user is registered. Please log in',
          'bg-emerald-500'
        )

        // Reset form
        form.value.email = ''
        form.value.name = ''
        form.value.password1 = ''
        form.value.password2 = ''
      } else {
        toastStore.showToast(
          5000,
          'Something went wrong. Please try again',
          'bg-red-300'
        )
      }
    } catch (error) {
      console.error('❌ Backend error:', error.response?.data)
      const data = error.response?.data

      if (data?.errors) {
        Object.entries(data.errors).forEach(([field, messages]) => {
          messages.forEach(msg => errors.value.push(`${field}: ${msg}`))
        })
      }

      toastStore.showToast(
        5000,
        'Signup failed. Check your input.',
        'bg-red-500'
      )
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 py-8">
      <!-- Left Column -->
      <div
        class="lg:w-1/2 w-full bg-gradient-to-br from-purple-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md"
      >
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
            Create an account to start using our platform. It's quick and easy! Just fill in your
            details beside and you'll be ready to go.
          </p>

          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Already have an account?
            <RouterLink to="/login" class="text-purple-600 dark:text-purple-400 underline"
              >Click here</RouterLink
            >
            to log in!
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
              <label class="block font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                v-model="form.name"
                placeholder="Your full name"
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

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
                v-model="form.password1"
                placeholder="Your password"
                class="w-full mt-2 py-4 px-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label class="block font-medium text-gray-700 dark:text-gray-300"
                >Confirm Password</label
              >
              <input
                type="password"
                v-model="form.password2"
                placeholder="Confirm your password"
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 
<script>
import axios from 'axios'

import { useToastStore } from '@/stores/toast'

export default {
  setup() {
    const toastStore = useToastStore()

    return {
      toastStore,
    }
  },

  data() {
    return {
      form: {
        email: '',
        name: '',
        password1: '',
        password2: '',
      },
      errors: [],
    }
  },

  methods: {
    submitForm() {
      this.errors = []

      if (this.form.email === '') {
        this.errors.push('Your e-mail is missing')
      }

      if (this.form.name === '') {
        this.errors.push('Your name is missing')
      }

      if (this.form.password1 === '') {
        this.errors.push('Your password is missing')
      }

      if (this.form.password1 !== this.form.password2) {
        this.errors.push('The password does not match')
      }

      if (this.errors.length === 0) {
        axios
          .post('/api/signup/', this.form)
          .then((response) => {
            if (response.data.message === 'success') {
              this.toastStore.showToast(
                5000,
                'The user is registered. Please log in',
                'bg-emerald-500'
              )

              this.form.email = ''
              this.form.name = ''
              this.form.password1 = ''
              this.form.password2 = ''
            } else {
              this.toastStore.showToast(
                5000,
                'Something went wrong. Please try again',
                'bg-red-300'
              )
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    },
  },
}
</script> -->
<!-- 
<script>
import axios from "axios";

import { useToastStore } from "@/stores/toast";

export default {
  setup() {
    const toastStore = useToastStore();

    return {
      toastStore,
    };
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        password1: "",
        password2: "",
      },
      errors: [],
    };
  },

  methods: {
    submitForm() {
      this.errors = [];

      if (this.form.email === "") {
        this.errors.push("Your e-mail is missing");
      }

      if (this.form.name === "") {
        this.errors.push("Your name is missing");
      }

      if (this.form.password1 === "") {
        this.errors.push("Your password is missing");
      }

      if (this.form.password1 !== this.form.password2) {
        this.errors.push("The password does not match");
      }

      if (this.errors.length === 0) {
        axios;
        axios
          .post("api/signup/", this.form)
          .then((response) => {
            console.log("✅ Response:", response.data);

            if (response.data.message === "success") {
              this.toastStore.showToast(
                5000,
                "The user is registered. Please log in",
                "bg-emerald-500"
              );
              this.form.email = "";
              this.form.name = "";
              this.form.password1 = "";
              this.form.password2 = "";
            } else {
              console.log("⚠️ Unexpected response:", response.data);
              this.toastStore.showToast(
                5000,
                "Something went wrong. Please try again",
                "bg-red-300"
              );
            }
          })
          .catch((error) => {
            console.log("❌ Backend error response:", error.response?.data);

            const data = error.response?.data;
            if (data?.errors) {
              Object.entries(data.errors).forEach(([field, messages]) => {
                messages.forEach((msg) => this.errors.push(`${field}: ${msg}`));
              });
            }

            this.toastStore.showToast(
              5000,
              "Signup failed. Check your input.",
              "bg-red-500"
            );
          });
      }
    },
  },
};
</script> -->
