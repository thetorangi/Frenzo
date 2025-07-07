<template>
  <div class="relative min-h-screen overflow-hidden text-gray-900 dark:text-white">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover brightness-35 dark:brightness-90"
    >
      <source src="@/assets/Frenzo-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-white/60 dark:bg-gradient-to-b dark:from-gray-900/70 dark:via-gray-800/60 dark:to-black/80 z-10"
    ></div>

    <!-- Main Content -->
    <div
      class="relative z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center space-y-10"
    >
      <!-- Title -->
      <h1
        class="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md dark:text-white text-gray-900 animate-fade-in"
      >
        Frenzo
      </h1>

      <!-- Tagline -->
      <p
        class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl animate-slide-up"
      >
        Connect. Share. Belong.
      </p>

      <!-- CTA Button -->
      <button
        @click="$router.push({ name: 'login' })"
        class="mt-8 inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 animate-fade-in-delay"
      >
        Get Started
      </button>

      <!-- Features -->
      <div
        class="mt-80 grid grid-cols-1 md:grid-cols-3 gap-20 w-full animate-fade-in-slow"
      >
        <div
          class="p-6 bg-white/90 dark:bg-gray-900/80 border border-purple-300 dark:border-purple-600 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 class="text-xl font-bold text-purple-800 dark:text-purple-400 mb-2">
            Smart Connections
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Suggestions to grow your true social circle.
          </p>
        </div>

        <div
          class="p-6 bg-white/90 dark:bg-gray-900/80 border border-indigo-300 dark:border-indigo-600 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 class="text-xl font-bold text-indigo-800 dark:text-indigo-400 mb-2">
            Trendy Moments
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Explore what's hot with real-time trends and reactions.
          </p>
        </div>

        <div
          class="p-6 bg-white/90 dark:bg-gray-900/80 border border-pink-300 dark:border-pink-600 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 class="text-xl font-bold text-pink-800 dark:text-pink-400 mb-2">
            Privacy First
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Share freely with full control over your content and data.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingView',
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
.animate-fade-in-delay {
  animation: fade-in 1.2s ease-out forwards;
}
.animate-fade-in-slow {
  animation: fade-in 1.5s ease-out forwards;
}
.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}
</style>
