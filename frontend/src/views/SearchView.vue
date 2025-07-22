<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4 py-6 text-gray-900 dark:text-gray-100">
    <!-- Left/Main Column -->
    <div class="main-left col-span-4 md:col-span-3 space-y-4">
      <!-- Search Form -->
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
        <form @submit.prevent="submitForm" class="p-4 flex space-x-4">
          <input
            v-model="query"
            type="search"
            class="p-4 w-full bg-gray-100 dark:bg-gray-800 dark:placeholder-gray-400 rounded-lg focus:outline-none"
            placeholder="What are you looking for?"
          />

          <button class="inline-flex items-center justify-center py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </form>
      </div>

      <!-- Users Result -->
      <div
        v-if="users.length"
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="user in users"
          :key="user.id"
          class="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <img :src="user.get_avatar" class="mb-4 mx-auto rounded-full w-16 h-16" />

          <p>
            <strong>
              <RouterLink :to="{ name: 'profile', params: { id: user.id } }" class="hover:underline">
                {{ user.name }}
              </RouterLink>
            </strong>
          </p>

          <div class="mt-4 flex justify-around text-xs text-gray-500 dark:text-gray-400">
            <p>{{ user.friends_count }} friends</p>
            <p>{{ user.posts_count }} posts</p>
          </div>
        </div>
      </div>

      <!-- Posts Result -->
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
      >
        <FeedItem :post="post" />
      </div>
    </div>

    <!-- Right Sidebar -->
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
import FeedItem from '../components/FeedItem.vue'

export default {
  name: 'SearchView',

  components: {
    PeopleYouMayKnow,
    Trends,
    FeedItem,
  },

  data() {
    return {
      query: '',
      users: [],
      posts: []
    }
  },

  methods: {
    submitForm() {
      axios
        .post('/api/search/', {
          query: this.query
        })
        .then(response => {
          this.users = response.data.users
          this.posts = response.data.posts
        })
        .catch(error => {
          console.error('Search error:', error)
        })
    }
  }
}
</script>
