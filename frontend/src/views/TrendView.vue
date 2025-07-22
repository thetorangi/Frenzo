<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4 py-6 text-gray-900 dark:text-gray-100">
    <!-- Main Content -->
    <div class="main-center col-span-4 md:col-span-3 space-y-4">
      <!-- Trend Title -->
      <div class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
        <h2 class="text-xl">Trend: #{{ $route.params.id }}</h2>
      </div>

      <!-- Posts -->
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
      >
        <FeedItem :post="post" />
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

export default {
  name: 'TrendView',

  components: {
    PeopleYouMayKnow,
    Trends,
    FeedItem
  },

  data() {
    return {
      posts: [],
    }
  },

  mounted() {
    this.getFeed()
  },

  watch: {
    '$route.params.id': {
      handler() {
        this.getFeed()
      },
      immediate: true
    }
  },

  methods: {
    getFeed() {
      axios
        .get(`/api/posts/?trend=${this.$route.params.id}`)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.error('Trend fetch error:', error)
        })
    }
  }
}
</script>
