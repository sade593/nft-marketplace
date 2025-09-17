<template>
  <div class="relative h-[640px] text-white">

    <img 
      :src="backgroundImage" 
      alt="Magic Mashrooms Background" 
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent"></div>
    
    <div class="relative z-10 h-full flex items-end p-5 md:p-12">
      <div class="max-w-[1050px] w-full mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        
        <div class="w-full md:w-1/2">
          <div class="bg-[#3B3B3B] bg-opacity-80 backdrop-blur-sm rounded-2xl p-4 inline-flex items-center gap-3 mb-6">
            <img :src="artistAvatar" alt="Shroomie Avatar" class="w-8 h-8 rounded-full" />
            <span>Shroomie</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Magic Mashrooms</h2>
          <button class="bg-white text-black font-semibold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-gray-200">
            See NFT
          </button>
        </div>

        <div class="bg-[#3B3B3B] bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 w-full md:w-auto">
          <p class="mb-2">Auction ends in:</p>
          <div class="flex gap-4 text-4xl font-bold">
            <div>
              <span>59</span>
              <p class="text-xs font-normal">Hours</p>
            </div>
            <span>:</span>
            <div>
              <span>59</span>
              <p class="text-xs font-normal">Minutes</p>
            </div>
            <span>:</span>
            <div>
              <span>59</span>
              <p class="text-xs font-normal">Seconds</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from '@/assets/images/magic-mushroom-background.jpg';
import artistAvatar from '@/assets/images/creator-7.png'; 
</script>