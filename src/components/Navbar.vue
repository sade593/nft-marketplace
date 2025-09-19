<template>
  <nav class="bg-[#3B3B3B] px-5 md:px-12 py-5 flex justify-between items-center">
    <router-link to="/" class="flex items-center gap-3">
      <img :src="logoIcon" alt="Logo Icon" class="w-8 h-8">
      <span class="text-white font-bold text-xl">NFT Marketplace</span>
    </router-link>

    <div class="hidden md:flex items-center gap-10 text-white font-semibold">
      <router-link to="/" class="hover:text-white">Marketplace</router-link>
      <a href="#" class="hover:text-white">Rankings</a>
      <a href="#" class="hover:text-white">Connect a wallet</a>
      
      <router-link v-if="!isLoggedIn" to="/signup" class="bg-[#A259FF] text-white font-semibold rounded-2xl py-3 px-6 flex items-center gap-3 hover:bg-purple-700">
        <img :src="userIcon" alt="User">
        Sign Up
      </router-link>
      <router-link v-else to="/profile" class="flex items-center gap-3">
        <img :src="profileAvatar" class="w-8 h-8 rounded-full" alt="User Avatar">
        <span>{{ username }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import logoIcon from '@/assets/icons/Store.svg';
import userIcon from '@/assets/icons/user-icon.svg';
import profileAvatar from '@/assets/images/animakid-avatar.png';

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const username = computed(() => userStore.username);
</script>