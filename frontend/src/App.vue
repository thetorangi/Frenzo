<template>
  <div :class="darkMode ? 'dark' : ''">
    <nav
      class="py-6 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition duration-300"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between">
          <!-- Left -->
          <div class="flex items-center space-x-4">    

            <!-- Show only on small screens -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                v-if="!mobileMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white"
              >Frenzo</a
            >
          </div>

          <!-- Center - Icons (shown on md and up) -->
          <div
            class="hidden md:flex space-x-8 items-center text-gray-700 dark:text-gray-200 transition-all duration-300"
            v-if="userStore.user.isAuthenticated"
          >
          
            <RouterLink to="/feed" title="Feed" class="hover:text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </RouterLink>

            <RouterLink to="/chat" title="Chat" class="hover:text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
            </RouterLink>

            <RouterLink
              to="/notifications"
              title="Notifications"
              class="hover:text-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
            </RouterLink>

            <RouterLink
              to="/search"
              title="Search"
              class="hover:text-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </RouterLink>
          </div>

          <!-- Right: Avatar or Auth Buttons -->
          <div class="flex items-center space-x-4">
            <!-- Dark mode toggle -->
            <button
              @click="toggleDarkMode"
              class="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            >
              <svg
                v-if="darkMode"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14a7 7 0 000-14z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            </button>

            <template
              v-if="userStore.user.isAuthenticated && userStore.user.id"
            >
              <RouterLink
                :to="{ name: 'profile', params: { id: userStore.user.id } }"
              >
                <img
                  :src="userStore.user.avatar"
                  class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
                />
              </RouterLink>
            </template>

            <template v-else>
              <RouterLink
                to="/login"
                class="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >Log in</RouterLink
              >
              <RouterLink
                to="/signup"
                class="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >Sign up</RouterLink
              >
            </template>
          </div>
        </div>

        <!-- Mobile menu -->
        <div
          v-if="mobileMenuOpen && userStore.user.isAuthenticated"
          class="md:hidden mt-4 space-y-4 transition-all"
        >
          <RouterLink to="/feed" class="block text-gray-800 dark:text-gray-200"
            >Feed</RouterLink
          >
          <RouterLink to="/chat" class="block text-gray-800 dark:text-gray-200"
            >Chat</RouterLink
          >
          <RouterLink
            to="/notifications"
            class="block text-gray-800 dark:text-gray-200"
            >Notifications</RouterLink
          >
          <RouterLink
            to="/search"
            class="block text-gray-800 dark:text-gray-200"
            >Search</RouterLink
          >
        </div>
      </div>
    </nav>

    <main
      class="px-6 py-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-300 min-h-screen"
    >
      <RouterView />
    </main>

    <Toast />
  </div>
</template>

<script>
import axios from "axios";
import Toast from "@/components/Toast.vue";
import { useUserStore } from "@/stores/user";

export default {
  components: { Toast },

  data() {
    return {
      darkMode: true, // default is dark
      mobileMenuOpen: false, // for mobile menu toggle
    };
  },

  computed: {
    userStore() {
      return useUserStore();
    },
  },

  created() {
    this.userStore.initStore();

    const token = this.userStore.user.access;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }

    // Load dark mode from localStorage
    const savedTheme = localStorage.getItem("theme");
    this.darkMode = savedTheme === "light" ? false : true; // default to dark
    this.updateHtmlClass();
  },

  watch: {
    darkMode(newVal) {
      localStorage.setItem("theme", newVal ? "dark" : "light");
      this.updateHtmlClass();
    },
  },

  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    updateHtmlClass() {
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
