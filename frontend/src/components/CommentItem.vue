<template>
  <div>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="mb-6"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <img :src="comment.created_by.get_avatar" class="w-[40px] rounded-full" />
          <p>
            <strong>
              <RouterLink :to="{ name: 'profile', params: { id: comment.created_by.id } }">
                {{ comment.created_by.name }}
              </RouterLink>
            </strong>
          </p>
        </div>

        <div class="flex items-center space-x-4 text-sm text-gray-600">
          <span>{{ comment.created_at_formatted }} ago</span>

          <!-- Delete button -->
          <button
            v-if="userStore.user.id === comment.created_by.id"
            @click="deleteComment(comment.id)"
            class="text-red-500 hover:underline text-xs"
          >
            Delete
          </button>
        </div>
      </div>

      <p class="mt-2 text-gray-800 dark:text-gray-100">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { useToastStore } from '@/stores/toast'

export default {
  props: {
    initialComments: {
      type: Array,
      required: true,
    },
  },
  components: { RouterLink },

  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()
    return { userStore, toastStore }
  },

  data() {
    return {
      comments: [...this.initialComments], // make reactive copy
    }
  },

  methods: {
    deleteComment(commentId) {
      if (!confirm('Are you sure you want to delete this comment?')) return

      axios
        .delete(`/api/posts/${commentId}/com_delete/`)
        .then(() => {
          this.toastStore.showToast(5000, 'Comment deleted', 'bg-emerald-500')
          this.comments = this.comments.filter(c => c.id !== commentId) // remove from list
        })
        .catch(() => {
          this.toastStore.showToast(5000, 'Failed to delete comment', 'bg-red-500')
        })
    },
  },
}
</script>
