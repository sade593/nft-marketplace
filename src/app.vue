<template>
  <div class="bg-[#2B2B2B] flex flex-col min-h-screen no-scrollbar">
    <Navbar />
    <main class="flex-grow">
      <router-view /> 
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/sections/Footer.vue';
</script>

<style>
/* This is the custom CSS to hide the scrollbar */

/* For Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>