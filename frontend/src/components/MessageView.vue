    <template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <!-- LEFT SIDEBAR -->
      <div class="md:col-span-1">
        <div class="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm space-y-4">
          <div
            v-for="i in 3"
            :key="i"
            class="flex items-center justify-between"
          >
            <div class="flex items-center space-x-3">
              <img
                src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg"
                class="w-10 h-10 rounded-full border-2 border-purple-500"
              />
              <p class="text-sm font-semibold">Karma Codes</p>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">18 mins ago</span>
          </div>
        </div>
      </div>

      <!-- CENTER CHAT AREA -->
      <div class="md:col-span-3 space-y-6">
        
        <!-- Chat Messages -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 space-y-4">
          
          <!-- Sent Messages -->
          <div class="flex justify-end space-x-3 max-w-full">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg shadow-sm">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span class="text-xs text-gray-400">2 min ago</span>
            </div>
            <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full" />
          </div>

          <div class="flex justify-end space-x-3 max-w-full">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg shadow-sm">
                <p class="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="text-xs text-gray-400">2 min ago</span>
            </div>
            <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full" />
          </div>

          <!-- Received Messages -->
          <div class="flex space-x-3 max-w-full">
            <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full" />
            <div>
              <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded-r-lg rounded-bl-lg shadow-sm">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <span class="text-xs text-gray-400">2 min ago</span>
            </div>
          </div>

          <div class="flex space-x-3 max-w-full">
            <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full" />
            <div>
              <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded-r-lg rounded-bl-lg shadow-sm">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <span class="text-xs text-gray-400">2 min ago</span>
            </div>
          </div>
        </div>

        <!-- Message Box -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <div class="p-4">
            <textarea
              class="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              placeholder="What do you want to say?"
            ></textarea>
          </div>
          <div class="flex justify-end p-4 border-t border-gray-100 dark:border-gray-700">
            <button class="py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No JS logic needed in this layout, unless for interactivity later
</script>

<style>
/* Optional: smooth transitions */
html {
  scroll-behavior: smooth;
}
</style>