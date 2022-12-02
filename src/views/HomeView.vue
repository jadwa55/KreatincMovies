<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Cardtem from '../components/Cardtem.vue'
const movies = ref("")
fetch('http://www.omdbapi.com/?s=batt&apikey=77323777')
  .then((res) => res.json())
  .then((json) => (movies.value = json))
</script>

<template>
  <main>
    {{ movies }}
    <div v-for="movie in movies" :key="movie.id">
    <Cardtem :movieName="movie.Title" :movieRating="movie.imdbRating"/>
    </div>
  </main>
</template>
