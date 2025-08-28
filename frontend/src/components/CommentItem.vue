<template>
  <div class="mb-6">
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

      <div class="flex items-center space-x-3">
        <p class="text-gray-600">{{ comment.created_at_formatted }} ago</p>

        <!-- DELETE ICON (if user is comment author OR post author) -->
        <div
          v-if="canDelete"
          @click="deleteComment"
          class="cursor-pointer flex items-center space-x-1 text-red-500 hover:underline"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 
              19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 
              0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 
              48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 
              1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 
              0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
              51.964 0 00-3.32 0c-1.18.037-2.09 
              1.022-2.09 2.201v.916m7.5 0a48.667 
              48.667 0 00-7.5 0"
            />
          </svg>
          <span class="text-xs">Delete</span>
        </div>
      </div>
    </div>

    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
import axios from "axios"
import { RouterLink } from "vue-router"
import { useUserStore } from "@/stores/user"
import { useToastStore } from "@/stores/toast"

export default {
  props: {
    comment: Object,
    postAuthorId: Number, //  we’ll pass this from PostView.vue
  },
  emits: ["deleteComment"],

  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()
    return { userStore, toastStore }
  },

  computed: {
    canDelete() {
      return (
        this.userStore.user.id === this.comment.created_by.id || // comment owner
        this.userStore.user.id === this.postAuthorId             // post owner
      )
    }
  },

  methods: {
    deleteComment() {
      axios
        .delete(`/api/posts/${this.comment.id}/com_delete`)
        .then(() => {
          this.toastStore.showToast(4000, "Comment deleted", "bg-emerald-500")
          this.$emit("deleteComment", this.comment.id)
        })
        .catch(() => {
          this.toastStore.showToast(4000, "Failed to delete comment", "bg-red-500")
        })
    }
  },

  components: { RouterLink },
}
</script>
