<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <!-- Grid layout for desktop, stacked for mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 transition-all duration-300 ease-in-out">
      
      <!-- Main Center -->
      <div class="main-center lg:col-span-3 space-y-4">
        
        <!-- Search / Post Bar -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div class="p-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 transition-all duration-300">
            <input
              type="search"
              class="p-4 w-full bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg"
              placeholder="What are you looking for?"
            />
            <a
              href="#"
              class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            >Post</a>
          </div>
        </div>

        <!-- Profiles Grid -->
        <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="n in 5"
            :key="n"
            class="p-4 text-center bg-gray-100 dark:bg-gray-700 rounded-lg"
          >
            <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="mb-6 rounded-full mx-auto w-20 h-20 object-cover" />
            <p><strong>Karma Codes</strong></p>
            <div class="mt-6 flex justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <p>182 friends</p>
              <p>120 posts</p>
            </div>
          </div>
        </div>

        <!-- Post Card -->
        <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <div class="flex items-center space-x-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full" />
              <p><strong>Karma Codes</strong></p>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">28 minutes ago</p>
          </div>

          <p class="dark:text-white">
            This is just a random text post. This is just a random text post. This is just a random text post. This is just a random text post.
          </p>

          <div class="my-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <div class="flex space-x-6">
              <!-- Like -->
              <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span class="text-xs">82 likes</span>
              </div>

              <!-- Comment -->
              <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
                <span class="text-xs">3 comments</span>
              </div>
            </div>

            <!-- More -->
            <div class="text-gray-500 dark:text-gray-400 self-end sm:self-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                   viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Right (Sidebar) -->
      <div class="main-right space-y-4 lg:block hidden">
        <PeopleYouMayKnow />
        <Trends />
      </div>
    </div>
  </div>
</template>

<script>
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue'
import Trends from '../components/Trends.vue'

export default {
    name: 'SearchView',
    components: {
        PeopleYouMayKnow,
        Trends,
    }
}
</script>