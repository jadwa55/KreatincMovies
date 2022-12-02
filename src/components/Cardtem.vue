<template>
  <div class="card">
    <div class="card-image">
      <!-- need to bind alt -->
      <img src="../assets/imgs/hpotter.jpg" alt="movie name" />
    </div>
    <div class="card-body">
      <p class="movie-title">{{ movieName }}</p>
      <span class="movie-rating">{{ movieRating }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["movieName", "movieRating"]);
</script>
