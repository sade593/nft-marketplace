<template>
  <div class="max-w-[1280px] mx-auto px-5 py-10 lg:py-20">
    <div class="max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h1 class="text-white font-semibold text-[67px] leading-[110%] mb-4">
          Discover Digital Art & Collect NFTs
        </h1>
        <p class="text-white font-normal text-[22px] leading-[160%] mb-6">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from over 20k NFT artists.
        </p>
        
        <router-link v-if="!userStore.isLoggedIn" to="/signup" class="inline-block bg-[#A259FF] text-white font-semibold py-4 px-8 rounded-2xl self-center lg:self-start hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center gap-2">
            <img :src="rocketIcon" alt="Rocket Icon" class="w-5 h-5" />
            <span>Get Started</span>
          </div>
        </router-link>

        <router-link v-else to="/profile" class="inline-block bg-[#A259FF] text-white font-semibold py-4 px-8 rounded-2xl self-center lg:self-start hover:bg-purple-700 transition-transform duration-300 hover:scale-105">
          <div class="flex items-center gap-2">
            <img :src="userIcon" alt="User Icon" class="w-5 h-5" />
            <span>Go to Your Profile</span>
          </div>
        </router-link>
        
        <div class="hidden md:flex justify-around lg:justify-start lg:gap-20 mt-8">
          <div>
            <h3 class="font-mono text-white font-bold text-[28px] leading-[140%]">240k+</h3>
            <p class="text-white">Total Sale</p>
          </div>
          <div>
            <h3 class="font-mono text-white font-bold text-[28px] leading-[140%]">100k+</h3>
            <p class="text-white">Auctions</p>
          </div>
          <div>
            <h3 class="font-mono text-white font-bold text-[28px] leading-[140%]">240k+</h3>
            <p class="text-white">Artists</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <img :src="rotatingImage" alt="Rotating NFT" class="w-full max-w-sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import rocketIcon from '@/assets/icons/rocket.svg';
import userIcon from '@/assets/icons/user-icon.svg';
import rotatingImage from '@/assets/images/rotating-nft.gif'; 

const userStore = useUserStore();
</script>