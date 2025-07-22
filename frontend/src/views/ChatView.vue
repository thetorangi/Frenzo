<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-6">
    <!-- LEFT: Conversations List -->
    <div class="main-left col-span-1">
      <div class="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <div class="space-y-4">
          <div
            class="flex items-center justify-between p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
            v-for="conversation in conversations"
            :key="conversation.id"
            @click="setActiveConversation(conversation.id)"
          >
            <div class="flex items-center space-x-2">
              <template v-for="user in conversation.users" :key="user.id">
                <img :src="user.get_avatar" class="w-10 h-10 rounded-full" />
                <p
                  class="text-xs font-bold text-gray-800 dark:text-gray-200"
                  v-if="user.id !== userStore.user.id"
                >
                  {{ user.name }}
                </p>
              </template>
            </div>
            <span class="text-xs text-gray-500">{{ conversation.modified_at_formatted }} ago</span>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT: Chat View -->
    <div class="main-center col-span-1 md:col-span-3 flex flex-col space-y-4">
      <!-- Messages -->
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm h-[400px] overflow-y-auto p-4">
        <template v-for="message in activeConversation.messages" :key="message.id">
          <!-- Outgoing Message -->
          <div
            class="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end"
            v-if="message.created_by.id === userStore.user.id"
          >
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">{{ message.body }}</p>
              </div>
              <span class="text-xs text-gray-500">{{ message.created_at_formatted }} ago</span>
            </div>
            <img :src="message.created_by.get_avatar" class="w-10 h-10 rounded-full" />
          </div>

          <!-- Incoming Message -->
          <div
            class="flex w-full mt-2 space-x-3 max-w-md"
            v-else
          >
            <img :src="message.created_by.get_avatar" class="w-10 h-10 rounded-full" />
            <div>
              <div class="bg-gray-300 dark:bg-gray-800 text-black dark:text-white p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">{{ message.body }}</p>
              </div>
              <span class="text-xs text-gray-500">{{ message.created_at_formatted }} ago</span>
            </div>
          </div>
        </template>
      </div>

      <!-- Input -->
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <form @submit.prevent="submitForm">
          <div class="p-4">
            <textarea
              v-model="body"
              class="p-3 w-full bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg"
              placeholder="What do you want to say?"
              rows="2"
            ></textarea>
          </div>
          <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
            <button
              type="submit"
              class="py-2 px-5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user'

export default {
  name: 'Chat',

  setup() {
    const userStore = useUserStore()
    return { userStore }
  },

  data() {
    return {
      conversations: [],
      activeConversation: {
        messages: [],
      },
      activeConversationId: null,
      body: '',
    }
  },

  mounted() {
    this.getConversations()
  },

  methods: {
    setActiveConversation(id) {
      this.activeConversationId = id
      this.getMessages()
    },

    getConversations() {
      axios
        .get('/api/chat/')
        .then((response) => {
          this.conversations = response.data

          if (this.conversations.length) {
            this.activeConversationId = this.conversations[0].id
            this.getMessages()
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },

    getMessages() {
      if (!this.activeConversationId) return

      axios
        .get(`/api/chat/${this.activeConversationId}/`)
        .then((response) => {
          this.activeConversation = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },

    submitForm() {
      if (!this.body.trim()) return

      axios
        .post(`/api/chat/${this.activeConversation.id}/send/`, {
          body: this.body,
        })
        .then((response) => {
          this.activeConversation.messages.push(response.data)
          this.body = ''
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>
