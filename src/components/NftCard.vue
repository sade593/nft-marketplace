<template>
  <div class="bg-[#3B3B3B] rounded-2xl">
    <img :src="image" :alt="title" class="w-full h-auto rounded-t-2xl">
    <div class="p-5">
      <h5 class="text-white font-semibold text-xl">{{ title }}</h5>
      <div class="flex items-center gap-3 mt-2 mb-4">
        <img :src="avatar" :alt="artist" class="h-6 w-6 rounded-full" />
        <span class="text-white">{{ artist }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-400">Price</span>
        <span class="text-white">{{ price }} ETH</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-400">Highest Bid</span>
        <span class="text-white">{{ highestBid }} wETH</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  avatar: String,
  artist: String,
  price: String,
  highestBid: String
});
</script>