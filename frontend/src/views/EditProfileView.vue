<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
    <div class="main-left">
      <div class="p-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h1 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Edit profile</h1>
        <p class="mb-6 text-gray-600 dark:text-gray-400">
  Customize your profile details, change your display name, and update your profile picture.
  A complete profile helps others connect with you more easily.
</p>
        <RouterLink to="/profile/edit/password" class="underline text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
          Edit password
        </RouterLink>
      </div>
    </div>

    <div class="main-right">
      <div class="p-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              v-model="form.name"
              placeholder="Your full name"
              class="w-full mt-2 py-3 px-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input
              type="email"
              v-model="form.email"
              placeholder="Your e-mail address"
              class="w-full mt-2 py-3 px-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
            />
          </div>

          <!-- <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Avatar</label>
            <input
              type="file"
              ref="file"
              class="mt-2 block w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-200 dark:file:border-gray-600 file:rounded-md file:text-sm file:bg-white dark:file:bg-gray-800 file:text-gray-700 dark:file:text-white"
            />
          </div> -->

    <div>
    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Avatar</label>

    <!-- Clickable avatar preview or button -->
    <div @click="$refs.file.click()" class="cursor-pointer w-fit">
      <img
        :src="avatarPreview || userStore.user.get_avatar"
        class="w-[100px] h-[100px] mt-2 object-cover rounded-full border"
        alt="Avatar Preview"
      />
      <p class="text-xs text-gray-500 mt-1">Click to change avatar</p>
    </div>

    <!-- Hidden input -->
    <input type="file" ref="file" class="hidden" @change="onFileChange" />
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
        email: this.userStore.user.email,
        name: this.userStore.user.name
      },
      errors: []
    }
  },

  methods: {
    submitForm() {
      this.errors = []

      if (!this.form.email) this.errors.push('Your e-mail is missing')
      if (!this.form.name) this.errors.push('Your name is missing')

      if (this.errors.length === 0) {
        const formData = new FormData()
        if (this.$refs.file.files.length > 0) {
          formData.append('avatar', this.$refs.file.files[0])
        }
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)

        axios
          .post('/api/editprofile/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .then(response => {
            if (response.data.message === 'information updated') {
              this.toastStore.showToast(5000, 'The information was saved', 'bg-emerald-500')
              this.userStore.setUserInfo({
                id: this.userStore.user.id,
                name: this.form.name,
                email: this.form.email,
                avatar: response.data.user.get_avatar
              })
              this.$router.back()
            } else {
              this.toastStore.showToast(5000, `${response.data.message}. Please try again`, 'bg-red-300')
            }
          })
          .catch(error => {
            console.log('error', error)
          })
      }
    }
  }
}
</script>
