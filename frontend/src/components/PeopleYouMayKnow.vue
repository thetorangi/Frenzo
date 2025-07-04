<template>
    <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 class="mb-6 text-xl text-black dark:text-white">People you may know</h3>
        <div class="space-y-4">
          <div v-for="n in 3" :key="'friend-' + n" class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/300?img=70" class="w-[40px] rounded-full" />
              <p class="text-xs text-black dark:text-white"><strong>Karma Codes</strong></p>
            </div>
            <a href="#" class="py-2 px-3 bg-purple-600 text-white text-xs rounded-lg">Show</a>
          </div>
        </div>
      </div>
</template>