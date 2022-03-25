<template>
  <div class="movie-container">
    <div
      class="movie-background"
      :style="{
        backgroundImage: !movie
          ? ''
          : `url(${
              'https://image.tmdb.org/t/p/original/' + movie.backdrop_path
            })`,
      }"
    >
      <MovieInfo :movie="movie" @toggle-btn-watch="$emit('toggleBtnWatch')" />
    </div>
  </div>
</template>

<script setup>
import MovieInfo from "./MovieInfo.vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({ movie: Object });
</script>

<style scoped>
.movie-container {
  position: relative;
}

.movie-background {
  position: relative;
  transform: translateY(-40px);
  min-height: 500px;
  width: 100%;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.movie-background::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(80, 69, 53, 0.911);
  background: linear-gradient(
    to right,
    rgb(44, 49, 49) 150px,
    rgba(51, 63, 66, 0.84) 100%
  );
  opacity: 0.9;
}

/* Media Queries */

@media screen and (max-width: 750px) {
  .movie-background {
    min-height: calc(700px + 10em);
  }
}
</style>
