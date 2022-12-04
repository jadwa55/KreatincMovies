<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Loader from "../components/LoaderItem.vue";

const movie = ref("");
const API_KEY = import.meta.env.VITE_API_KEY;
const route = useRoute();
const imdbId = route.params.id;
const loading = ref(false);

const fetchMovie = async () => {
  loading.value = true;
  await axios
    .get(`http://www.omdbapi.com`, {
      params: { i: imdbId, apikey: API_KEY },
    })
    .then((data) => {
      movie.value = data.data;
      loading.value = false;
    });
};

onMounted(() => {
  fetchMovie();
});
</script>

<template>
  <div v-if="loading" class="loadar">
    <Loader />
  </div>
  <div v-else class="movie-info">
    <div class="movie-info-image">
      <img :src="movie.Poster" alt="" />
      <div class="movie-info-title">
        <p>{{ movie.Title }}</p>
        <p class="rating">
          imdb Rating:
          <span>
            {{ movie.imdbRating }}
          </span>
        </p>
      </div>
    </div>
    <div class="movie-info-details">
      <div class="movie-info-head">
        <div class="movie-info-card">
          <h2>Info</h2>
          <div class="movie-info-generale">
            <div>
              <div>
                <p>
                  Year:
                  <span>{{ movie.Year }}</span>
                </p>
              </div>
              <div>
                <p>
                  Released:
                  <span>{{ movie.Released }}</span>
                </p>
              </div>
              <div>
                <p>
                  Runtime:
                  <span>{{ movie.Runtime }}</span>
                </p>
              </div>
              <div>
                <p>
                  Genre:
                  <span>{{ movie.Genre }}</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Director:
                  <span>{{ movie.Director }}</span>
                </p>
              </div>
              <div>
                <p>
                  Writer:
                  <span>{{ movie.Writer }}</span>
                </p>
              </div>
              <div>
                <p>
                  Language:
                  <span>{{ movie.Language }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="movie-info-card">
          <h2>Actors</h2>
          <p>{{ movie.Actors }}</p>
        </div>
      </div>
      <div class="movie-info-card">
        <h2>Plot</h2>
        <p>{{ movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>
