<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      <div class="bg-[#3B3B3B] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
        
        <div class="w-full md:w-1/2">
          <img :src="digestImage" alt="Astronaut reading newspaper" class="w-full h-auto rounded-2xl">
        </div>

        <div class="w-full md:w-1/2">
          <h2 class="text-white font-bold text-3xl mb-4">Join Our Weekly Digest</h2>
          <p class="text-white text-lg mb-8">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
          
          <div class="relative">
            <input 
              type="email" 
              placeholder="Enter your email here" 
              class="w-full py-4 pl-5 pr-40 rounded-2xl bg-white text-black placeholder-gray-500 focus:outline-none"
            >
            <button class="absolute right-1 top-1 bottom-1 bg-[#A259FF] text-white font-semibold rounded-2xl px-8 hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import digestImage from '@/assets/images/digest-image.png';
</script>