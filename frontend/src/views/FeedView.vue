<template>
  <main class="px-4 py-4 bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- Left Sidebar (Sticky only on lg and up) -->
      <aside class="space-y-6 lg:sticky lg:top-4 lg:self-start">
        <!-- User Profile -->
        <div class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-center shadow-md">
          <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="mb-6 rounded-full w-24 h-24 mx-auto ring-2 ring-purple-500">
          <p class="text-lg font-semibold">Karma Codes</p>
          <div class="mt-4 flex justify-around text-sm text-gray-500 dark:text-gray-400">
            <p><strong>182</strong> friends</p>
            <p><strong>120</strong> posts</p>
          </div>
        </div>

        <!-- Create Post (Inside Left Sidebar) -->
        <div>
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md">
            <div class="p-4">
              <textarea class="w-full p-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-xl resize-none" rows="3" placeholder="What are you thinking about?"></textarea>
            </div>
            <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
              <button class="py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition">📷 Attach</button>
              <button class="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium">🚀 Post</button>
            </div>
          </div>
        </div>
      </aside>

      <!-- Center Feed (Scrollable if screen allows) -->
      <section class="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-2 col-span-1 md:col-span-1 lg:col-span-2">
        <!-- Post 1 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">18 minutes ago</span>
          </div>
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full rounded-xl">
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 0 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">28 minutes ago</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            This is just a random text post. This is just a random text post. This is just a random text post.
          </p>
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 3 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>
        <!-- Post 1 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">18 minutes ago</span>
          </div>
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full rounded-xl">
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 0 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">28 minutes ago</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            This is just a random text post. This is just a random text post. This is just a random text post.
          </p>
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 3 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>
        <!-- Post 1 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">18 minutes ago</span>
          </div>
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full rounded-xl">
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 0 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">28 minutes ago</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            This is just a random text post. This is just a random text post. This is just a random text post.
          </p>
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 3 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>
        <!-- Post 1 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">18 minutes ago</span>
          </div>
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full rounded-xl">
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 0 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">28 minutes ago</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            This is just a random text post. This is just a random text post. This is just a random text post.
          </p>
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 3 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>
        <!-- Post 1 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">18 minutes ago</span>
          </div>
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full rounded-xl">
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 0 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <img src="https://wallpapersok.com/images/hd/itachi-cool-rainy-night-12jcl8xvosu7lads.jpg" class="w-10 h-10 rounded-full">
              <p class="font-semibold">Karma Codes</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">28 minutes ago</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            This is just a random text post. This is just a random text post. This is just a random text post.
          </p>
          <div class="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>❤️ 82 likes</span>
              <span>💬 3 comments</span>
            </div>
            <button class="hover:text-purple-500 transition">•••</button>
          </div>
        </article>
      </section>

      <!-- Right Sidebar (Sticky only on lg and up) -->
      <aside class="space-y-6 lg:sticky lg:top-4 lg:self-start">
        <!-- People You May Know -->
        <PeopleYouMayKnow/>

        <!-- Trends -->
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
      </aside>
    </div>
  </main>
</template>