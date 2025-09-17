<template>
  <div class="bg-[#2B2B2B]">
    <Navbar />
    <HeroSection />
    <TrendingCollection />
    <TopCreators />
    <BrowseCategories />
    <DiscoverNfts />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import TrendingCollection from './components/sections/TrendingCollection.vue';
import TopCreators from './components/sections/TopCreators.vue';
import BrowseCategories from './components/sections/BrowseCategories.vue';
import DiscoverNfts from './components/sections/DiscoverNfts.vue';
</script>