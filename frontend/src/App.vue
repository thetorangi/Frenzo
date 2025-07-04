<template>
  <div class="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
    <!-- NAVBAR -->
    <nav class="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900 transition-all duration-300">
      <!-- Left: App Name -->
    
<router-link
  to="/"
  @click.native="selectedIcon = 'home'"
  class="text-xl font-semibold hover:text-purple-600 transition"
  style="text-decoration: none;"
>
  Frenzo
</router-link>

      <!-- Center: Icons (Hidden on small screens) -->
      <div class="hidden md:flex items-center space-x-6 transition-all duration-300">
        <router-link
          to="/"
          @click.native="selectedIcon = 'home'"
          :class="iconClass('home')"
        >
          <HomeIcon />
        </router-link>
        <router-link
          to="/search"
          @click.native="selectedIcon = 'search'"
          :class="iconClass('search')"
        >
          <SearchIcon />
        </router-link>
        <router-link
          to="/notifications"
          @click.native="selectedIcon = 'notifications'"
          :class="iconClass('notifications')"
        >
          <BellIcon />
        </router-link>
        <router-link
          to="/messages"
          @click.native="selectedIcon = 'messages'"
          :class="iconClass('messages')"
        >
          <ChatIcon />
        </router-link>
      </div>


      <!-- Right: Menu Toggle, Dark Toggle, Avatar -->
      <div class="flex items-center space-x-4">
        <!-- Mobile Menu Button -->
        <button @click="menuOpen = !menuOpen" class="md:hidden">
          <MenuIcon />
        </button>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode">
          <component :is="isDark ? MoonIcon : SunIcon" />
        </button>

        <!-- Avatar -->
        <img
          src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg"
          class="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500"
          alt="Avatar"
        />
      </div>
    </nav>

    <!-- Mobile Menu -->
    <!-- Mobile Dropdown Menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 shadow-md rounded-b-lg">
        <router-link
          to="/"
          @click.native="selectedIcon = 'home'; menuOpen = false"
          :class="mobileIconClass('home')"
        >
          <HomeIcon class="w-5 h-5" />
          <span>Home</span>
        </router-link>
        <router-link
          to="/search"
          @click.native="selectedIcon = 'search'; menuOpen = false"
          :class="mobileIconClass('search')"
        >
          <SearchIcon class="w-5 h-5" />
          <span>Search</span>
        </router-link>
        <router-link
          to="/notifications"
          @click.native="selectedIcon = 'notifications'; menuOpen = false"
          :class="mobileIconClass('notifications')"
        >
          <BellIcon class="w-5 h-5" />
          <span>Notifications</span>
        </router-link>
        <router-link
          to="/messages"
          @click.native="selectedIcon = 'messages'; menuOpen = false"
          :class="mobileIconClass('messages')"
        >
          <ChatIcon class="w-5 h-5" />
          <span>Messages</span>
        </router-link>
      </div>
    </transition>

    <!-- Main Content --><!-- Page content -->
    <main class="px-4 py-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <router-view />
    </main>
    
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'

// Icon State
const selectedIcon = ref('home')
const isDark = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

// Styles
const iconClass = (icon) =>
  `text-xl hover:bg-purple-100 dark:hover:bg-gray-800 p-2 rounded-md transition ${
    selectedIcon.value === icon
      ? 'text-purple-600 dark:text-purple-400'
      : 'text-gray-500 dark:text-gray-400'
  }`

const mobileIconClass = (icon) =>
  `flex items-center space-x-2 w-full p-2 rounded-md hover:bg-purple-100 dark:hover:bg-gray-800 transition ${
    selectedIcon.value === icon
      ? 'text-purple-600 dark:text-purple-400'
      : 'text-gray-500 dark:text-gray-400'
  }`

// Icons (inline components)
const HomeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M3 12l9-9 9 9M4 10v10h5v-6h6v6h5V10' })
])

const SearchIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z' })
])

const BellIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' })
])

const ChatIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84L3 21l1.7-4.6A7.972 7.972 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
])

const SunIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 3v1m0 16v1m8.66-13.66l-.707.707M4.05 19.95l-.707.707M21 12h1M2 12H1m16.95 7.05l-.707-.707M4.05 4.05l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' })
])

const MoonIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21.752 15.002A9.718 9.718 0 0112 21c-5.385 0-9.75-4.365-9.75-9.75 0-4.193 2.697-7.747 6.435-9.154a0.75 0.75 0 01.93.97 7.5 7.5 0 008.385 10.936 0.75 0.75 0 01.752 1.001z' })
])

const MenuIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.5' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4 6h16M4 12h16M4 18h16' })
])
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
