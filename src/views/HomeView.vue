<script setup>
import { ref, watch, inject } from "vue";
import axios from "axios";
import Cardtem from "../components/Cardtem.vue";
import Pagination from "../components/Pagination.vue";
import Loader from "../components/LoaderItem.vue";

const API_KEY = import.meta.env.VITE_API_KEY;
const search = inject("search");
const movies = ref("");
const page = ref(1);
const loading = ref(false);

const fetchMovies = async () => {
  loading.value = true;
  await axios
    .get(`http://www.omdbapi.com`, {
      params: { s: search.value, apikey: API_KEY, page: page.value },
    })
    .then((data) => {
      movies.value = data.data;
      loading.value = false;
    });
};
const pageChanged = (p) => {
  page.value = p;
};
watch(
  search,
  () => {
    if (search.value.length > 2) {
      page.value = 1;
      fetchMovies();
    }
  },
  { immediate: true }
);
watch(page, () => {
  fetchMovies();
});
</script>

<template>
  <main>
    <div v-if="loading" class="loadar">
      <Loader />
    </div>
    <div v-else>
      <div class="search-section-title" v-if="!search">
        <p>Search for a movie</p>
      </div>
      <div v-if="search && !movies.Search" class="noResults">
        <img src="../assets/imgs/noResultsImage.png" alt="noResultsImage" />
        <h2>no results found for {{ search }} !</h2>
      </div>
      <div v-else-if="search && movies.Search" class="cards-data">
        <div v-for="movie in movies.Search" :key="movie.id">
          <Cardtem
            :movieName="movie.Title"
            :movieRating="movie.imdbRating"
            :image="movie.Poster"
            :year="movie.Year"
            :type="movie.Type"
            :imdbId="movie.imdbID"
          />
        </div>
      <div class="pagination" v-if="movies.Search">
        <Pagination
          :count="movies.totalResults"
          :page="page"
          @update:modelValue="pageChanged"
        />
      </div>
      </div>
    </div>
  </main>
</template>