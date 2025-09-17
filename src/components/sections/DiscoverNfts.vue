<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      
      <div class="mb-8 flex justify-between items-end">
        <div>
          <h2 class="text-white font-bold text-3xl">Discover More NFTs</h2>
          <p class="text-white mt-2">Explore new trending NFTs.</p>
        </div>
        <button class="hidden md:flex items-center gap-3 border-2 border-[#A259FF] rounded-2xl py-3 px-8 text-white font-semibold hover:bg-[#A259FF]">
          See All
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-[#3B3B3B] rounded-2xl">
          <img :src="nft1" alt="Distant Galaxy NFT" class="w-full h-auto rounded-t-2xl">
          <div class="p-5">
            <h5 class="text-white font-semibold text-xl">Distant Galaxy</h5>
            <div class="flex items-center gap-3 mt-2 mb-4">
              <img :src="avatar1" alt="MoonDancer Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white">MoonDancer</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Price</span>
              <span class="text-white">1.63 ETH</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Highest Bid</span>
              <span class="text-white">0.33 wETH</span>
            </div>
          </div>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl">
          <img :src="nft2" alt="Life On Edena NFT" class="w-full h-auto rounded-t-2xl">
          <div class="p-5">
            <h5 class="text-white font-semibold text-xl">Life On Edena</h5>
            <div class="flex items-center gap-3 mt-2 mb-4">
              <img :src="avatar2" alt="NebulaKid Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white">NebulaKid</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Price</span>
              <span class="text-white">1.63 ETH</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Highest Bid</span>
              <span class="text-white">0.33 wETH</span>
            </div>
          </div>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl">
          <img :src="nft3" alt="AstroFiction NFT" class="w-full h-auto rounded-t-2xl">
          <div class="p-5">
            <h5 class="text-white font-semibold text-xl">AstroFiction</h5>
            <div class="flex items-center gap-3 mt-2 mb-4">
              <img :src="avatar3" alt="Spaceone Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white">Spaceone</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Price</span>
              <span class="text-white">1.63 ETH</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-400">Highest Bid</span>
              <span class="text-white">0.33 wETH</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import nft1 from '@/assets/images/distant-galaxy.png';
import avatar1 from '@/assets/images/distant-galaxy-avatar.png';
import nft2 from '@/assets/images/life-on-edena.png';
import avatar2 from '@/assets/images/life-on-edena-avatar.png';
import nft3 from '@/assets/images/astro-fiction.png';
import avatar3 from '@/assets/images/astro-fiction-avatar.png';
</script>