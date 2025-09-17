<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      
      <div class="mb-8 flex justify-between items-end">
        <div>
          <h2 class="text-white font-bold text-3xl">Top Creators</h2>
          <p class="text-white mt-2">Checkout Top Rated Creators on the NFT Marketplace.</p>
        </div>
        <button class="hidden md:flex items-center gap-3 border-2 border-[#A259FF] rounded-2xl py-3 px-8 text-white font-semibold hover:bg-[#A259FF]">
          View Rankings
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator1" alt="Creator 1 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">1</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Keepitreal</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator2" alt="Creator 2 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">2</span>
          </div>
          <h5 class="text-white font-semibold text-xl">DigiLab</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator3" alt="Creator 3 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">3</span>
          </div>
          <h5 class="text-white font-semibold text-xl">GravityOne</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator4" alt="Creator 4 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">4</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Juanie</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator5" alt="Creator 5 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">5</span>
          </div>
          <h5 class="text-white font-semibold text-xl">BlueWhale</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator6" alt="Creator 6 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">6</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Mr Fox</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator7" alt="Creator 7 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">7</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Shroomie</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator8" alt="Creator 8 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">8</span>
          </div>
          <h5 class="text-white font-semibold text-xl">robotica</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator9" alt="Creator 9 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">9</span>
          </div>
          <h5 class="text-white font-semibold text-xl">RustyRobot</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator10" alt="Creator 10 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">10</span>
          </div>
          <h5 class="text-white font-semibold text-xl">animakid</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator11" alt="Creator 11 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">11</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Dotgu</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
        
        <div class="bg-[#3B3B3B] rounded-2xl p-5 flex flex-col items-center text-center">
          <div class="relative">
            <img :src="creator12" alt="Creator 12 Avatar" class="w-28 h-28 rounded-full object-cover mb-4" />
            <span class="absolute top-4 left-0 bg-[#2B2B2B] text-gray-400 rounded-full w-7 h-7 flex items-center justify-center">12</span>
          </div>
          <h5 class="text-white font-semibold text-xl">Ghiblier</h5>
          <p class="text-gray-400">Total Sales: <span class="text-white">34.53 ETH</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import creator1 from '@/assets/images/creator-1.png';
import creator2 from '@/assets/images/creator-2.png';
import creator3 from '@/assets/images/creator-3.png';
import creator4 from '@/assets/images/creator-4.png';
import creator5 from '@/assets/images/creator-5.png';
import creator6 from '@/assets/images/creator-6.png';
import creator7 from '@/assets/images/creator-7.png';
import creator8 from '@/assets/images/creator-8.png';
import creator9 from '@/assets/images/creator-9.png';
import creator10 from '@/assets/images/creator-10.png';
import creator11 from '@/assets/images/creator-11.png';
import creator12 from '@/assets/images/creator-12.png';
</script>