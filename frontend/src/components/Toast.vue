<script setup>
import { useToastStore } from '@/stores/toast'

const store = useToastStore()

return {
    store
}
</script>

<template>

    <div
  v-if="store.isVisible"
  class="fixed right-4 bottom-4 sm:right-8 sm:bottom-8 px-6 py-6 rounded-xl shadow-xl z-50
         transition-all ease-in-out duration-500
         bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
  :class="store.classes"
>
  <!-- Your content here -->
   {{ store.message }}
</div>

</template>