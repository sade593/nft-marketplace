<template>
  <div class="max-w-[1280px] mx-auto px-5">
    <div class="max-w-[1050px] mx-auto py-10 lg:py-20">
      
      <div class="mb-8">
        <h2 class="text-white font-bold text-3xl">How It Works</h2>
        <p class="text-white mt-2">Find Out How To Get Started</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="bg-[#3B3B3B] rounded-2xl p-8 flex flex-col items-center text-center gap-5">
          <img :src="image1" alt="Setup Wallet Icon" class="w-40 h-40">
          <div>
            <h5 class="text-white font-semibold text-xl mb-2">Setup Your Wallet</h5>
            <p class="text-gray-400">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl p-8 flex flex-col items-center text-center gap-5">
          <img :src="image2" alt="Create Collection Icon" class="w-40 h-40">
          <div>
            <h5 class="text-white font-semibold text-xl mb-2">Create Collection</h5>
            <p class="text-gray-400">Upload your work and setup your collection. Add a description, social links and floor price.</p>
          </div>
        </div>

        <div class="bg-[#3B3B3B] rounded-2xl p-8 flex flex-col items-center text-center gap-5">
          <img :src="image3" alt="Start Earning Icon" class="w-40 h-40">
          <div>
            <h5 class="text-white font-semibold text-xl mb-2">Start Earning</h5>
            <p class="text-gray-400">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/images/how-it-works-1.png';
import image2 from '@/assets/images/how-it-works-2.png';
import image3 from '@/assets/images/how-it-works-3.png';
</script>