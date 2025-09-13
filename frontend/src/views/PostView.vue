<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-4">
    <!-- Main Content -->
    <div class="main-center lg:col-span-3 space-y-4">
      <!-- Post -->
      <div
        v-if="post.id"
        class="p-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg"
      >
        <FeedItem :post="post" />
      </div>

      <!-- Comments -->
      <div
        v-for="comment in post.comments"
        :key="comment.id"
        class="ml-2 lg:ml-6 p-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg"
      >
        <CommentItem
          :comment="comment"
          :postAuthorId="post.created_by.id"
          @deleteComment="handleDeleteComment"
        />
      </div>


      <!-- Comment Form -->
      <div class="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg">
        <form @submit.prevent="submitForm" method="post">
          <div class="p-4">
            <textarea
              v-model="body"
              class="p-4 w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="What do you think?"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="p-4 border-t border-gray-100 dark:border-gray-700">
            <button
              class="py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200"
              type="submit"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="main-right lg:col-span-1 space-y-4 sticky top-4 h-fit">
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
import CommentItem from '../components/CommentItem.vue'

export default {
  name: 'PostView',

  components: {
    PeopleYouMayKnow,
    Trends,
    FeedItem,
    CommentItem
  },

  data() {
    return {
      post: {
        id: null,
        comments: []
      },
      body: ''
    }
  },

  mounted() {
    this.getPost()
  },

  methods: {
      handleDeleteComment(commentId) {
      this.post.comments = this.post.comments.filter(c => c.id !== commentId)
      this.post.comments_count -= 1
    },
    getPost() {
      axios
        .get(`/api/posts/${this.$route.params.id}/`)
        .then(response => {
          this.post = response.data.post
        })
        .catch(error => {
          console.error('Error fetching post:', error)
        })
    },

    submitForm() {
      if (!this.body.trim()) return

      axios
        .post(`/api/posts/${this.$route.params.id}/comment/`, {
          body: this.body
        })
        .then(response => {
          this.post.comments.push(response.data)
          this.post.comments_count += 1
          this.body = ''
        })
        .catch(error => {
          console.error('Error submitting comment:', error)
        })
    }
  }
}
</script>
