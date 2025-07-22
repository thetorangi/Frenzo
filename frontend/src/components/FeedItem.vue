<template>
  <div class="mb-6 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <img :src="post.created_by.get_avatar" class="w-10 h-10 rounded-full" />
      <p>
        <strong>
          <RouterLink
            :to="{ name: 'profile', params: { id: post.created_by.id } }"
            class="hover:underline text-gray-800 dark:text-gray-100 transition-colors"
          >
            {{ post.created_by.name }}
          </RouterLink>
        </strong>
      </p>
    </div>

    <p class="text-sm text-gray-500 dark:text-gray-400">
      {{ post.created_at_formatted }} ago
    </p>
  </div>

  <template v-if="post.attachments.length">
    <img
      v-for="image in post.attachments"
      :key="image.id"
      :src="image.get_image"
      class="w-full mb-4 rounded-xl object-cover transition-all"
    />
  </template>

  <p class="text-gray-800 dark:text-gray-100 transition-colors">
    {{ post.body }}
  </p>

  <!-- ACTIONS -->
  <div class="my-6 flex justify-between items-center flex-wrap">
    <div class="flex flex-wrap gap-6 items-center">

      <!-- LIKE BUTTON -->
      <div
        class="flex items-center space-x-2 cursor-pointer rounded transition-all duration-300"
        :class="{ 'animate-like': justLiked }"
        @click="toggleLike"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-6 h-6 transition-colors duration-300"
          :class="post.has_liked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
            4.5 2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 
            6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        <span class="text-xs text-gray-600 dark:text-gray-300 transition-colors">
          {{ post.likes_count }} likes
        </span>
      </div>

      <!-- COMMENT LINK -->
      <div class="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-500 dark:text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>

        <RouterLink
          :to="{ name: 'postview', params: { id: post.id } }"
          class="text-xs text-gray-600 dark:text-gray-300 hover:underline"
        >
          {{ post.comments_count }} comments
        </RouterLink>
      </div>

      <!-- PRIVATE BADGE -->
      <div
        v-if="post.is_private"
        class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
        <span>Is private</span>
      </div>
    </div>

    <!-- MORE OPTIONS -->
    <div @click="toggleExtraModal" class="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-gray-600 dark:text-gray-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </div>
  </div>

  <!-- DROPDOWN OPTIONS -->
  <div v-if="showExtraModal" class="mt-4 space-y-4">
    <div class="flex space-x-6 items-center">
      <div
        class="flex items-center space-x-2 cursor-pointer"
        @click="deletePost"
        v-if="userStore.user.id == post.created_by.id"
      >
        <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 
            19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 
            0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 
            48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 
            1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 
            0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
            51.964 0 00-3.32 0c-1.18.037-2.09 
            1.022-2.09 2.201v.916m7.5 0a48.667 
            48.667 0 00-7.5 0" />
        </svg>
        <span class="text-red-500 text-xs">Delete post</span>
      </div>

      <div class="flex items-center space-x-2 cursor-pointer" @click="reportPost">
        <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 
            48.524 0 01-.005-10.499l-3.11.732a9 9 0 
            01-6.085-.711l-.108-.054a9 9 0 
            00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
        <span class="text-orange-500 text-xs">Report post</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useToastStore } from "@/stores/toast";

export default {
  props: {
    post: Object,
  },

  emits: ["deletePost"],

  setup() {
    const userStore = useUserStore();
    const toastStore = useToastStore();

    return { userStore, toastStore };
  },

  data() {
    return {
      showExtraModal: false,
      justLiked: false,
    };
  },

  methods: {
    toggleLike() {
      const liked = !this.post.has_liked;
      this.post.has_liked = liked;
      this.post.likes_count += liked ? 1 : -1;

      this.justLiked = true;
      setTimeout(() => (this.justLiked = false), 300);

      const endpoint = liked
        ? `/api/posts/${this.post.id}/like/`
        : `/api/posts/${this.post.id}/unlike/`;

      axios.post(endpoint).catch(() => {
        this.post.has_liked = !liked;
        this.post.likes_count += liked ? -1 : 1;
      });
    },

    reportPost() {
      axios
        .post(`/api/posts/${this.post.id}/report/`)
        .then(() => {
          this.toastStore.showToast(5000, "The post was reported", "bg-emerald-500");
        })
        .catch(console.error);
    },

    deletePost() {
      this.$emit("deletePost", this.post.id);

      axios
        .delete(`/api/posts/${this.post.id}/delete/`)
        .then(() => {
          this.toastStore.showToast(5000, "The post was deleted", "bg-emerald-500");
        })
        .catch(console.error);
    },

    toggleExtraModal() {
      this.showExtraModal = !this.showExtraModal;
    },
  },
  components: { RouterLink },
};
</script>

<style scoped>
@keyframes like-flash {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: rgba(239, 68, 68, 0.1); /* red-500 */
  }
  100% {
    background-color: transparent;
  }
}

.animate-like {
  animation: like-flash 0.3s ease-in-out;
}
</style>
