<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
      
    <div class="hidden md:block h-[691px]">
      <img 
        :src="createAccountImage" 
        class="w-full h-full object-cover" 
        alt="Create Account Image"
      >
    </div>
    
    <div class="bg-[#3B3B3B] flex items-center justify-center p-12 h-[691px]">
      <div class="max-w-md w-full">
        <h1 class="text-white text-4xl font-bold mb-4">Create Account</h1>
        <p class="text-white mb-8">Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="relative">
            <img :src="userIcon" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" alt="">
            <input v-model="username" type="text" placeholder="Username" class="w-full pl-12 pr-4 py-3 bg-white text-black placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A259FF]">
          </div>

          <div class="relative">
            <img :src="mailIcon" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" alt="">
            <input v-model="email" type="email" placeholder="Email Address" class="w-full pl-12 pr-4 py-3 bg-white text-black placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A259FF]">
          </div>

          <div class="relative">
            <img :src="lockIcon" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" alt="">
            <input type="password" placeholder="Password" class="w-full pl-12 pr-4 py-3 bg-white text-black placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A259FF]">
          </div>
          
          <div class="relative">
            <img :src="lockIcon" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" alt="">
            <input type="password" placeholder="Confirm Password" class="w-full pl-12 pr-4 py-3 bg-white text-black placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A259FF]">
          </div>
          
          <button type="submit" class="w-full bg-[#A259FF] text-white font-semibold py-3 rounded-2xl hover:bg-purple-700">
            Create account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import createAccountImage from '@/assets/images/create-account-image.png';
import userIcon from '@/assets/icons/icon-form-user.svg';
import mailIcon from '@/assets/icons/icon-form-mail.svg';
import lockIcon from '@/assets/icons/icon-form-lock.svg';

const username = ref('');
const email = ref('');
const router = useRouter();
const userStore = useUserStore();

function handleSubmit() {
  userStore.signUp(username.value, email.value);
  router.push('/'); 
}
</script>