<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Cardtem.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
<div>
  <RouterView />
</div>
</template>
