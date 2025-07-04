<!-- <template>
    <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 class="mb-6 text-xl text-black dark:text-white">Trends</h3>
        <div class="space-y-4">
          <div v-for="n in 5" :key="'trend-' + n" class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <p class="text-xs text-black dark:text-white">
                <strong>#coderKarma</strong><br />
                <span class="text-gray-500 dark:text-gray-400">180 posts</span>
              </p>
            </div>
            <a href="#" class="py-2 px-3 bg-purple-600 text-white text-xs rounded-xl">Explore</a>
          </div>
        </div>
      </div>
</template>       -->

<template>
    <div class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md">
          <h3 class="text-lg font-semibold mb-4">Trends</h3>
          <div class="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <template v-for="i in 5" :key="i">
              <div class="flex items-center justify-between">
                <div>
                  <p><strong>#coderKarma</strong></p>
                  <p class="text-xs text-gray-400">180 posts</p>
                </div>
                <button class="py-1 px-3 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-lg transition">Explore</button>
              </div>
            </template>
          </div>
        </div>
</template>