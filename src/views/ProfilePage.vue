<template>
  <div>
    <div class="h-64 bg-purple-500">
      <img :src="bannerImage" class="w-full h-full object-cover" alt="Profile Banner">
    </div>

    <div class="max-w-5xl mx-auto px-5 py-8">
      <div class="flex items-start -mt-24">
        <img :src="profileAvatar" class="w-40 h-40 rounded-2xl border-4 border-[#2B2B2B]" alt="User Avatar">
        <div class="ml-6 flex-grow">
          <div class="flex flex-col md:flex-row justify-between items-start">
            <h1 class="text-white text-4xl font-bold mb-4 md:mb-0">{{ userStore.username }}</h1>
            <div class="flex gap-4">
              <button class="bg-[#A259FF] text-white font-semibold py-3 px-6 rounded-2xl">0x{{ emailHash }}...{{ emailEnding }}</button>
              <button class="border-2 border-[#A259FF] text-white font-semibold py-3 px-6 rounded-2xl">Follow</button>
            </div>
          </div>

          <div class="flex gap-8 text-white mt-8">
            <div><span class="font-bold">250k+</span> Volume</div>
            <div><span class="font-bold">50+</span> NFTs Sold</div>
            <div><span class="font-bold">3000+</span> Followers</div>
          </div>
          <div class="mt-8"><h3 class="text-gray-400 font-semibold">Bio</h3><p class="text-white">The Internet's Friendliest Designer Kid.</p></div>
          <div class="mt-8"><h3 class="text-gray-400 font-semibold">Email</h3><p class="text-white">{{ userStore.email }}</p></div>
        </div>
      </div>

      <div class="border-b border-gray-600 mt-12">
        <div class="flex gap-8">
          <button class="text-white font-semibold py-4 border-b-2 border-[#858584]">Created</button>
          <button class="text-gray-500 font-semibold py-4">Owned</button>
          <button class="text-gray-500 font-semibold py-4">Collection</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <NftCard 
          v-for="nft in nfts" 
          :key="nft.title"
          :image="nft.image"
          :title="nft.title"
          :avatar="profileAvatar"
          :artist="userStore.username"
          :price="nft.price"
          :highestBid="nft.highestBid"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/user';
import NftCard from '../components/NftCard.vue';

// Import all the assets
import bannerImage from '@/assets/images/profile-banner.png';
import profileAvatar from '@/assets/images/animakid-avatar.png';
import nftImage1 from '@/assets/images/nft-card-1.png';
import nftImage2 from '@/assets/images/nft-card-2.png';
import nftImage3 from '@/assets/images/nft-card-3.png';
import nftImage4 from '@/assets/images/nft-card-4.png';
import nftImage5 from '@/assets/images/nft-card-5.png';
import nftImage6 from '@/assets/images/nft-card-6.png';
import nftImage7 from '@/assets/images/nft-card-7.png';
import nftImage8 from '@/assets/images/nft-card-8.png';
import nftImage9 from '@/assets/images/nft-card-9.png';

const userStore = useUserStore();

const emailHash = computed(() => userStore.email.length > 0 ? userStore.email.substring(0, 4).split('').reduce((a, b) => (a + b.charCodeAt(0)), 0) : 'c0e3');
const emailEnding = computed(() => userStore.email.length > 3 ? userStore.email.slice(-4) : '879c');

// Data for the 9 NFT cards
const nfts = [
  { image: nftImage1, title: 'Distant Galaxy', price: '1.63', highestBid: '0.33' },
  { image: nftImage2, title: 'Life On Edena', price: '1.63', highestBid: '0.33' },
  { image: nftImage3, title: 'AstroFiction', price: '1.63', highestBid: '0.33' },
  { image: nftImage4, title: 'CryptoCity', price: '2.50', highestBid: '0.85' },
  { image: nftImage5, title: 'ColorfulDog 0524', price: '1.20', highestBid: '0.25' },
  { image: nftImage6, title: 'Space Tales', price: '3.00', highestBid: '1.10' },
  { image: nftImage7, title: 'Cherry Blossom Girl 037', price: '1.63', highestBid: '0.33' },
  { image: nftImage8, title: 'Dancing Robots 0987', price: '1.63', highestBid: '0.33' },
  { image: nftImage9, title: 'IceCream Ape', price: '1.63', highestBid: '0.33' },
];
</script>