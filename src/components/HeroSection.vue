<template>
  <div class="max-w-[1280px] mx-auto px-5 py-10 lg:py-20">
    <div class="max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h1 class="text-white font-bold text-4xl lg:text-6xl leading-tight mb-4">
          Discover Digital Art & Collect NFTs
        </h1>
        <p class="text-white text-lg lg:text-xl mb-6">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from over 20k NFT artists.
        </p>
        
        <button class="bg-[#A259FF] text-white font-semibold py-4 px-8 rounded-2xl self-center lg:self-start hover:bg-purple-700 transition-colors duration-300">
          <div class="flex items-center gap-2">
            <img :src="rocketIcon" alt="Rocket Icon" class="w-5 h-5" />
            <span>Get Started</span>
          </div>
        </button>
        
        <div class="hidden md:flex justify-around lg:justify-start lg:gap-20 mt-8">
          <div>
            <h3 class="text-white font-bold text-3xl">240k+</h3>
            <p class="text-white">Total Sale</p>
          </div>
          <div>
            <h3 class="text-white font-bold text-3xl">100k+</h3>
            <p class="text-white">Auctions</p>
          </div>
          <div>
            <h3 class="text-white font-bold text-3xl">240k+</h3>
            <p class="text-white">Artists</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <img :src="rotatingImage" alt="Rotating NFT" class="w-full max-w-sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import rocketIcon from '@/assets/icons/rocket.svg';
// Make sure your GIF is named 'rotating-nft.gif' and is in the 'images' folder
import rotatingImage from '@/assets/images/hero-animakid.png'; 
</script>