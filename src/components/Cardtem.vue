<template>
  <div class="card">
    <div class="card-image">
      <!-- need to bind alt -->
      <img :src="image" :alt="movieName" />
    </div>
    <div class="card-body">
      <p class="movie-title">Name: {{ movieName }}</p>
      <div class="movie-details">
        <p class="movie-details-rating">Year: {{ year }}</p>
        <p class="movie-details-rating">Type: {{ type }}</p>
      </div>
    </div>
    <router-link
      class="movie-show"
      :to="{ name: 'movieShow', params: { id: imdbId } }"
    >
      <button class="movie-show-btn">view</button>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps([
  "movieName",
  "movieRating",
  "image",
  "year",
  "type",
  "imdbId",
]);
</script>
