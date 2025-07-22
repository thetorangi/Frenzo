<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4 py-6 text-gray-900 dark:text-gray-100">
    <!-- Left Panel -->
    <div class="main-left col-span-4 md:col-span-1">
      <div class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-center rounded-lg shadow">
        <img :src="user.get_avatar" class="mb-6 rounded-full mx-auto h-24 w-24 object-cover" />
        
        <p><strong>{{ user.name }}</strong></p>

        <div class="mt-6 flex space-x-8 justify-around text-sm text-gray-500 dark:text-gray-400">
          <p>{{ user.friends_count }} friends</p>
          <p>{{ user.posts_count }} posts</p>
        </div>
      </div>
    </div>

    <!-- Center Panel -->
    <div class="main-center col-span-4 md:col-span-2 space-y-4">
      <!-- Friendship Requests -->
      <div
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
        v-if="friendshipRequests.length"
      >
        <h2 class="mb-6 text-xl">Friendship requests</h2>

        <div
          v-for="friendshipRequest in friendshipRequests"
          :key="friendshipRequest.id"
          class="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <img :src="friendshipRequest.created_by.get_avatar" class="mb-6 mx-auto rounded-full h-20 w-20 object-cover" />
        
          <p>
            <strong>
              <RouterLink :to="{ name: 'profile', params: { id: friendshipRequest.created_by.id } }">
                {{ friendshipRequest.created_by.name }}
              </RouterLink>
            </strong>
          </p>

          <div class="mt-6 flex space-x-8 justify-around text-sm text-gray-500 dark:text-gray-400">
            <p>{{ user.friends_count }} friends</p>
            <p>{{ user.posts_count }} posts</p>
          </div>

          <div class="mt-6 space-x-4">
            <button class="inline-block py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg" @click="handleRequest('accepted', friendshipRequest.created_by.id)">Accept</button>
            <button class="inline-block py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg" @click="handleRequest('rejected', friendshipRequest.created_by.id)">Reject</button>
          </div>
        </div>
      </div>

      <!-- Friends List -->
      <div
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 gap-4"
        v-if="friends.length"
      >
        <div
          v-for="user in friends"
          :key="user.id"
          class="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <img :src="user.get_avatar" class="mb-6 rounded-full mx-auto h-20 w-20 object-cover" />
        
          <p>
            <strong>
              <RouterLink :to="{ name: 'profile', params: { id: user.id } }">
                {{ user.name }}
              </RouterLink>
            </strong>
          </p>

          <div class="mt-6 flex space-x-8 justify-around text-sm text-gray-500 dark:text-gray-400">
            <p>{{ user.friends_count }} friends</p>
            <p>{{ user.posts_count }} posts</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="main-right col-span-4 md:col-span-1 space-y-4">
      <PeopleYouMayKnow />
      <Trends />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue'
import Trends from '../components/Trends.vue'
import { useUserStore } from '@/stores/user'

export default {
  name: 'FriendsView',

  setup() {
    const userStore = useUserStore()
    return { userStore }
  },

  components: {
    PeopleYouMayKnow,
    Trends
  },

  data() {
    return {
      user: {},
      friendshipRequests: [],
      friends: []
    }
  },

  mounted() {
    this.getFriends()
  },

  methods: {
    getFriends() {
      axios
        .get(`/api/friends/${this.$route.params.id}/`)
        .then(response => {
          this.friendshipRequests = response.data.requests
          this.friends = response.data.friends
          this.user = response.data.user
        })
        .catch(error => {
          console.error('Error loading friends:', error)
        })
    },

    handleRequest(status, pk) {
      axios
        .post(`/api/friends/${pk}/${status}/`)
        .then(response => {
          this.getFriends()
        })
        .catch(error => {
          console.error('Error handling request:', error)
        })
    }
  }
}
</script>
