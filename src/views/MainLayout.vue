<template>
  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl pt-6 pb-4 px-7 shadow-lg font-opensans bg-white max-w-lg"
  >
  <!-- Main Head -->
    <div class="flex justify-between items-center mb-4 font-semibold px-1.5">
      <h2 class="text-black text-xl">Activity Example</h2>
      <div class="flex items-center space-x-4">
        <button class="bg-white text-blue-600">Delete all</button>
        <span class="material-symbols-outlined text-gray-600 text-2xl">
          more_vert
        </span>
      </div>
    </div>
    <NotificationItem></NotificationItem>
  </div>
</template>

<script>
    
import  NotificationItem from '@/components/NotificationItem.vue' 

export default {
  name: "MainLayout",
  components: {
    NotificationItem,
  }
};
</script>

<style scoped></style>
