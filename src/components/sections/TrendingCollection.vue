<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      
      <div class="mb-8">
        <h2 class="text-white font-bold text-3xl">Trending Collection</h2>
        <p class="text-white mt-2">Checkout our weekly updated trending collection.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="flex flex-col gap-4">
          <img :src="mainImage1" alt="DSGN Animals" class="w-full h-auto rounded-2xl object-cover aspect-square" />
          <div class="flex justify-between gap-4">
            <img :src="secondaryImage1" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <img :src="secondaryImage2" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <div class="w-1/3 bg-[#A259FF] rounded-2xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">1025+</span>
            </div>
          </div>
          <div>
            <h5 class="text-white font-semibold text-[22px] leading-[140%]">DSGN Animals</h5>
            <div class="flex items-center gap-3 mt-2">
              <img :src="artistAvatar1" alt="MrFox Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white font-normal text-base leading-[140%]">MrFox</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <img :src="mainImage2" alt="Magic Mushrooms" class="w-full h-auto rounded-2xl object-cover aspect-square" />
          <div class="flex justify-between gap-4">
            <img :src="secondaryImage3" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <img :src="secondaryImage4" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <div class="w-1/3 bg-[#A259FF] rounded-2xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">1025+</span>
            </div>
          </div>
          <div>
            <h5 class="text-white font-semibold text-[22px] leading-[140%]">Magic Mushrooms</h5>
            <div class="flex items-center gap-3 mt-2">
              <img :src="artistAvatar2" alt="Shroomie Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white font-normal text-base leading-[140%]">Shroomie</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <img :src="mainImage3" alt="Disco Machines" class="w-full h-auto rounded-2xl object-cover aspect-square" />
          <div class="flex justify-between gap-4">
            <img :src="secondaryImage5" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <img :src="secondaryImage6" alt="Secondary Image" class="w-1/3 h-auto rounded-2xl object-cover aspect-square" />
            <div class="w-1/3 bg-[#A259FF] rounded-2xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">1025+</span>
            </div>
          </div>
          <div>
            <h5 class="text-white font-semibold text-[22px] leading-[140%]">Disco Machines</h5>
            <div class="flex items-center gap-3 mt-2">
              <img :src="artistAvatar3" alt="BeKind2Robots Avatar" class="h-6 w-6 rounded-full" />
              <span class="text-white font-normal text-base leading-[140%]">BeKind2Robots</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import mainImage1 from '@/assets/images/dsgn-animals-main.png';
import secondaryImage1 from '@/assets/images/dsgn-animals-thumb1.png';
import secondaryImage2 from '@/assets/images/dsgn-animals-thumb2.png';
import artistAvatar1 from '@/assets/images/creator-6.png';

import mainImage2 from '@/assets/images/magic-mushrooms-main.png';
import secondaryImage3 from '@/assets/images/magic-mushrooms-thumb1.png';
import secondaryImage4 from '@/assets/images/magic-mushrooms-thumb2.png';
import artistAvatar2 from '@/assets/images/creator-7.png';

import mainImage3 from '@/assets/images/disco-machines-main.png';
import secondaryImage5 from '@/assets/images/disco-machines-thumb1.png';
import secondaryImage6 from '@/assets/images/disco-machines-thumb2.png';
import artistAvatar3 from '@/assets/images/creator-10.png';
</script>