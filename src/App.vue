<script setup lang="ts">
import { ref, provide, readonly } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
const route = useRoute();
const search = ref("best");

provide("search", readonly(search));
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <div class="navbar-link">
          <RouterLink to="/">IMDB</RouterLink>
        </div>
        <div class="navbar-search" v-if="route.name === 'home'">
          <input
            type="text"
            v-model="search"
            placeholder="Search for a movie"
          />
        </div>
      </nav>
    </div>
  </header>
  <div>
    <RouterView />
  </div>
</template>