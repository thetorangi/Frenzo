<template>
  <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
    
    <!-- Left Panel (Sticky) -->
    <div class="main-left col-span-1 h-fit sticky top-4">
      <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center rounded-lg">
        <img :src="user.get_avatar" class="mb-6 rounded-full" />

        <p class="text-gray-900 dark:text-white">
          <strong>{{ user.name }}</strong>
        </p>

        <div class="mt-6 flex space-x-8 justify-around" v-if="user.id">
          <RouterLink
            :to="{ name: 'friends', params: { id: user.id } }"
            class="text-xs text-gray-500 dark:text-gray-400"
          >
            {{ user.friends_count }} friends
          </RouterLink>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ user.posts_count }} posts</p>
        </div>

        <div class="mt-6 space-y-2">
          <button
            class="inline-block w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 text-xs text-white rounded-lg"
            @click="sendFriendshipRequest"
            v-if="userStore.user.id !== user.id && can_send_friendship_request"
          >
            Send friendship request
          </button>

          <button
            class="inline-block w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 text-xs text-white rounded-lg"
            @click="sendDirectMessage"
            v-if="userStore.user.id !== user.id"
          >
            Send direct message
          </button>

          <RouterLink
            class="inline-block w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 text-xs text-white rounded-lg"
            to="/profile/edit"
            v-if="userStore.user.id === user.id"
          >
            Edit profile
          </RouterLink>

          <button
            class="inline-block w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-xs text-white rounded-lg"
            @click="logout"
            v-if="userStore.user.id === user.id"
          >
            Log out
          </button>
        </div>
      </div>
    </div>

    <!-- Center Feed -->
    <div class="main-center col-span-2 space-y-4">
      <div
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
        v-if="userStore.user.id === user.id"
      >
        <FeedForm :user="user" :posts="posts" />
      </div>

      <div
        class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
        v-for="post in posts"
        :key="post.id"
      >
        <FeedItem :post="post" @deletePost="deletePost" />
      </div>
    </div>

    <!-- Right Panel (Sticky) -->
    <div class="main-right col-span-1 space-y-4 sticky top-4 h-fit">
      <PeopleYouMayKnow />
      <Trends />
    </div>
  </div>
</template>


<style>
input[type="file"] {
    display: none;
}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
</style>

<script>
import axios from 'axios'
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue'
import Trends from '../components/Trends.vue'
import FeedItem from '../components/FeedItem.vue'
import FeedForm from '../components/FeedForm.vue'
import { useUserStore } from '@/stores/user'
import { useToastStore } from '@/stores/toast'

export default {
    name: 'FeedView',

    setup() {
        const userStore = useUserStore()
        const toastStore = useToastStore()

        return {
            userStore,
            toastStore
        }
    },

    components: {
        PeopleYouMayKnow,
        Trends,
        FeedItem,
        FeedForm
    },

    data() {
        return {
            posts: [],
            user: {
                id: ''
            },
            can_send_friendship_request: null,
        }
    },

    mounted() {
        this.getFeed()
    },

    watch: { 
        '$route.params.id': {
            handler: function() {
                this.getFeed()
            },
            deep: true,
            immediate: true
        }
    },

    methods: {
        deletePost(id) {
            this.posts = this.posts.filter(post => post.id !== id)
        },

        sendDirectMessage() {
            console.log('sendDirectMessage')

            axios
                .get(`/api/chat/${this.$route.params.id}/get-or-create/`)
                .then(response => {
                    console.log(response.data)

                    this.$router.push('/chat')
                })
                .catch(error => {
                    console.log('error', error)
                })
        },

        sendFriendshipRequest() {
            axios
                .post(`/api/friends/${this.$route.params.id}/request/`)
                .then(response => {
                    console.log('data', response.data)

                    this.can_send_friendship_request = false

                    if (response.data.message == 'request already sent') {
                        this.toastStore.showToast(5000, 'The request has already been sent!', 'bg-red-300')
                    } else {
                        this.toastStore.showToast(5000, 'The request was sent!', 'bg-emerald-300')
                    }
                })
                .catch(error => {
                    console.log('error', error)
                })
        },

        getFeed() {
            axios
                .get(`/api/posts/profile/${this.$route.params.id}/`)
                .then(response => {
                    console.log('data', response.data)

                    this.posts = response.data.posts
                    this.user = response.data.user
                    this.can_send_friendship_request = response.data.can_send_friendship_request
                })
                .catch(error => {
                    console.log('error', error)
                })
        },

        logout() {
            console.log('Log out')

            this.userStore.removeToken()

            this.$router.push('/login')
        }
    }
}
</script>