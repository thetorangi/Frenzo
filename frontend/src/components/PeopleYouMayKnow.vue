<template>
  <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300">
    <h3 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">People you may know</h3>

    <div class="space-y-4">
      <div
        class="flex items-center justify-between"
        v-for="user in users"
        :key="user.id"
      >
        <div class="flex items-center space-x-3">
          <img
            :src="user.get_avatar"
            class="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-600"
            alt="User avatar"
          />

          <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ user.name }}</p>
        </div>

        <RouterLink
          :to="{ name: 'profile', params: { id: user.id } }"
          class="py-1.5 px-3 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-700 transition-all duration-200"
        >
          Show
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },

  mounted() {
    this.getFriendSuggestions()
  },

  methods: {
    getFriendSuggestions() {
      axios
        .get('/api/friends/suggested/')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error('Error loading suggestions:', error)
        })
    }
  }
}
</script>

<style scoped>
/* Optional: Add scoped transitions for images or avatars */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
</style>
