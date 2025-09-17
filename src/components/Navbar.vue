<template>
  <nav class="bg-[#2B2B2B] px-5 md:px-12 py-5 flex justify-between items-center">
    <a href="#" class="flex items-center gap-3">
      <img :src="logo" alt="NFT Marketplace Logo" class="h-8" />
    </a>

    <div class="hidden md:flex items-center gap-10 text-white font-semibold">
      <a href="#" class="hover:text-gray-300">Marketplace</a>
      <a href="#" class="hover:text-gray-300">Rankings</a>
      <a href="#" class="hover:text-gray-300">Connect a wallet</a>
      <button class="bg-[#A259FF] text-white font-semibold rounded-full py-2 px-6 flex items-center gap-3 hover:bg-[#9040ee] ml-4">
        <img :src="userIcon" alt="User" class="h-5 w-5" />
        Sign Up
      </button>
    </div>

    <div class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4" />
      </svg>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/images/logo.svg';
// We've added the userIcon back
import userIcon from '@/assets/icons/user-icon.svg';
</script>