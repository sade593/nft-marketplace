<template>
  <HeroSection />
  <TrendingCollection />
  <TopCreators />
  <BrowseCategories />
  <DiscoverNfts />
  <MashroomSection />
  <HowItWorks />
  <WeeklyDigest />
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import TrendingCollection from '../components/sections/TrendingCollection.vue';
import TopCreators from '../components/sections/TopCreators.vue';
import BrowseCategories from '../components/sections/BrowseCategories.vue';
import DiscoverNfts from '../components/sections/DiscoverNfts.vue';
import MashroomSection from '../components/sections/MashroomSection.vue';
import HowItWorks from '../components/sections/HowItWorks.vue'; // <-- Import the new component
import WeeklyDigest from '../components/sections/WeeklyDigest.vue';
</script>