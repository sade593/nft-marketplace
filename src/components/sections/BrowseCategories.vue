<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      
      <div class="mb-8">
        <h2 class="text-white font-bold text-3xl">Browse Categories</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div v-for="category in categories" :key="category.name" class="rounded-2xl overflow-hidden">
          <div class="relative">
            <img :src="category.image" class="w-full h-40 object-cover blur-sm" :alt="category.name">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <img :src="category.icon" alt="" class="w-24 h-24">
            </div>
          </div>
          <div class="bg-[#3B3B3B] p-5">
            <h5 class="text-white font-semibold text-xl">{{ category.name }}</h5>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import categoryImageArt from '@/assets/images/category-art.png';
import categoryImageCollectibles from '@/assets/images/category-collectibles.png';
import categoryImageMusic from '@/assets/images/category-music.png';
import categoryImagePhotography from '@/assets/images/category-photography.png';
import categoryImageVideo from '@/assets/images/category-video.png';
import categoryImageUtility from '@/assets/images/category-utility.png';
import categoryImageSport from '@/assets/images/category-sport.png';
import categoryImageVirtualWorlds from '@/assets/images/category-virtual-worlds.png';

import iconArt from '@/assets/icons/icon-art.svg';
import iconCollectibles from '@/assets/icons/icon-collectibles.svg';
import iconMusic from '@/assets/icons/icon-music.svg';
import iconPhotography from '@/assets/icons/icon-photography.svg';
import iconVideo from '@/assets/icons/icon-video.svg';
import iconUtility from '@/assets/icons/icon-utility.svg';
import iconSport from '@/assets/icons/icon-sport.svg';
import iconVirtualWorlds from '@/assets/icons/icon-virtual-worlds.svg';

const categories = [
  { name: 'Art', image: categoryImageArt, icon: iconArt },
  { name: 'Collectibles', image: categoryImageCollectibles, icon: iconCollectibles },
  { name: 'Music', image: categoryImageMusic, icon: iconMusic },
  { name: 'Photography', image: categoryImagePhotography, icon: iconPhotography },
  { name: 'Video', image: categoryImageVideo, icon: iconVideo },
  { name: 'Utility', image: categoryImageUtility, icon: iconUtility },
  { name: 'Sport', image: categoryImageSport, icon: iconSport },
  { name: 'Virtual Worlds', image: categoryImageVirtualWorlds, icon: iconVirtualWorlds },
];
</script>