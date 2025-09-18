<template>
  <footer class="bg-[#3B3B3B] text-gray-300">
    <div class="max-w-[1280px] mx-auto px-5">
      <div class="max-w-[1050px] mx-auto py-10 min-h-[191px]">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-600 pb-8">
          
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img :src="logoIcon" alt="Logo Icon" class="w-8 h-8">
              <span class="text-white font-bold text-xl">NFT Marketplace</span>
            </div>
            <p class="mb-4">NFT marketplace UI created with Anima for Figma.</p>
            <p class="mb-4">Join our community</p>
            <div class="flex items-center gap-4">
              <a href="#"><img :src="discordIcon" alt="Discord"></a>
              <a href="#"><img :src="youtubeIcon" alt="YouTube"></a>
              <a href="#"><img :src="twitterIcon" alt="Twitter"></a>
              <a href="#"><img :src="instagramIcon" alt="Instagram"></a>
            </div>
          </div>

          <div>
            <h5 class="text-white font-bold text-xl mb-4">Explore</h5>
            <ul>
              <li class="mb-2"><a href="#" class="hover:text-white">Marketplace</a></li>
              <li class="mb-2"><a href="#" class="hover:text-white">Rankings</a></li>
              <li><a href="#" class="hover:text-white">Connect a wallet</a></li>
            </ul>
          </div>

          <div>
            <h5 class="text-white font-bold text-xl mb-4">Join Our Weekly Digest</h5>
            <p class="mb-4">Get exclusive promotions & updates straight to your inbox.</p>
            <div class="relative">
              <input 
                type="email" 
                placeholder="Enter your email here" 
                class="w-full py-4 pl-5 pr-40 rounded-2xl bg-white text-black placeholder-gray-500 focus:outline-none"
              >
              <button class="absolute right-1 top-1 bottom-1 bg-[#A259FF] text-white font-semibold rounded-2xl px-8 hover:bg-purple-700">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div class="pt-5">
          <p class="text-xs">&copy; NFT Market. Use this template freely.</p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import logoIcon from '@/assets/icons/Store.svg';
import discordIcon from '@/assets/icons/discord.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import youtubeIcon from '@/assets/icons/youtube.svg';
</script>