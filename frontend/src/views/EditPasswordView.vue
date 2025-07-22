<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
    <div class="main-left">
      <div class="p-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h1 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Edit Password</h1>
        <p class="text-gray-600 dark:text-gray-400">Here you can change your password!</p>
      </div>
    </div>

    <div class="main-right">
      <div class="p-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Old password</label>
            <input
              type="password"
              v-model="form.old_password"
              placeholder="Your old password"
              class="w-full mt-2 py-3 px-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">New password</label>
            <input
              type="password"
              v-model="form.new_password1"
              placeholder="Your new password"
              class="w-full mt-2 py-3 px-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Repeat password</label>
            <input
              type="password"
              v-model="form.new_password2"
              placeholder="Repeat new password"
              class="w-full mt-2 py-3 px-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
            />
          </div>

          <div v-if="errors.length > 0" class="bg-red-300 dark:bg-red-600 text-white rounded-lg p-4 space-y-2">
            <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
          </div>

          <div>
            <button
              type="submit"
              class="py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'

export default {
  setup() {
    const toastStore = useToastStore()
    const userStore = useUserStore()
    return { toastStore, userStore }
  },

  data() {
    return {
      form: {
        old_password: '',
        new_password1: '',
        new_password2: '',
      },
      errors: [],
    }
  },

  methods: {
    submitForm() {
      this.errors = []

      // ✅ Fix: Correct key names for password match check
      if (this.form.new_password1 !== this.form.new_password2) {
        this.errors.push('Passwords do not match')
        return
      }

      const formData = new FormData()
      formData.append('old_password', this.form.old_password)
      formData.append('new_password1', this.form.new_password1)
      formData.append('new_password2', this.form.new_password2)

      axios
        .post('/api/editpassword/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          if (response.data.message === 'success') {
            this.toastStore.showToast(5000, 'Your password was changed successfully', 'bg-emerald-500')
            this.$router.push(`/profile/${this.userStore.user.id}`)
          } else {
            try {
              const data = JSON.parse(response.data.message)
              for (const key in data) {
                this.errors.push(data[key][0].message)
              }
            } catch {
              this.errors.push('An unexpected error occurred.')
            }
          }
        })
        .catch((error) => {
          this.errors.push('Something went wrong. Please try again later.')
          console.error('API Error:', error)
        })
    },
  },
}
</script>
