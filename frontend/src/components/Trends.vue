<template>
  <div class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow transition-colors duration-300">
    <h3 class="mb-6 text-xl font-semibold text-gray-800 dark:text-white">Trends</h3>

    <div class="space-y-4">
      <div
        class="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors"
        v-for="trend in trends"
        :key="trend.id"
      >
        <p class="text-xs text-gray-800 dark:text-gray-300">
          <strong>#{{ trend.hashtag }}</strong><br />
          <span class="text-gray-500 dark:text-gray-400">{{ trend.occurences }} posts</span>
        </p>

        <RouterLink
          :to="{ name: 'trendview', params: { id: trend.hashtag } }"
          class="py-2 px-3 bg-purple-600 hover:bg-purple-700 transition text-white text-xs rounded-lg shadow"
        >
          Explore
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Trends',

  data() {
    return {
      trends: []
    }
  },

  mounted() {
    this.getTrends()
  },

  methods: {
    getTrends() {
      axios
        .get('/api/posts/trends/')
        .then(response => {
          this.trends = response.data
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }
  }
}
</script>
