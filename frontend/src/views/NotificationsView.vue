<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4 py-6 text-gray-900 dark:text-gray-100">
    <div class="main-center col-span-4 md:col-span-3 space-y-4">
      <!-- Notification List -->
      <div
        v-if="notifications.length"
        v-for="notification in notifications"
        :key="notification.id"
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
      >
        <p class="mb-2">
          {{ notification.body }}
        </p>
        <button
          class="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300"
          @click="readNotification(notification)"
        >
          Read more
        </button>
      </div>

      <!-- No Notifications -->
      <div
        v-else
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-center shadow"
      >
        You don't have any unread notifications!
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'notifications',

  data() {
    return {
      notifications: []
    }
  },

  mounted() {
    this.getNotifications()
  },

  methods: {
    getNotifications() {
      axios
        .get('/api/notifications/')
        .then(response => {
          this.notifications = response.data
        })
        .catch(error => {
          console.error('Error fetching notifications:', error)
        })
    },

    async readNotification(notification) {
      try {
        await axios.post(`/api/notifications/read/${notification.id}/`)
        if (
          notification.type_of_notification === 'post_like' ||
          notification.type_of_notification === 'post_comment'
        ) {
          this.$router.push({ name: 'postview', params: { id: notification.post_id } })
        } else {
          this.$router.push({ name: 'friends', params: { id: notification.created_for_id } })
        }
      } catch (error) {
        console.error('Error reading notification:', error)
      }
    }
  }
}
</script>
