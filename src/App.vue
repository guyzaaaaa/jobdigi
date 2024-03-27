<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Footer from './views/footter.vue'; // Import the Footer component
import Navbaruser from './components/NavbarUser.vue';

</script>

<template>
  <div>
    <div class="wrapper">
      <Navbar/>
     
    </div>

    <RouterView />

    <!-- Include the Footer component -->
    <Footer />
  </div>
</template>

