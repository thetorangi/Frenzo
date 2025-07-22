<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4 py-6">
    <!-- Center Content -->
    <div class="main-center col-span-4 md:col-span-3 space-y-4">
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <FeedForm :user="null" :posts="posts" />
      </div>

      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
      >
        <FeedItem :post="post" @deletePost="deletePost" />
      </div>
    </div>

    <!-- Sidebar -->
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
import FeedForm from '../components/FeedForm.vue'

export default {
  name: 'FeedView',

  components: {
    PeopleYouMayKnow,
    Trends,
    FeedItem,
    FeedForm
  },

  data() {
    return {
      posts: [],
    }
  },

  mounted() {
    this.getFeed()
  },

  methods: {
    getFeed() {
      axios
        .get('/api/posts/')
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.error('Failed to load feed:', error)
        })
    },

    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id)
    },
  }
}
</script>
