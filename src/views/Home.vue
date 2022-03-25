<template>
  <div class="home-page" @click="handleApp">
    <CarouselContainer :cancelCarousel="cancelCarousel" />
    <TrendingMoviesAndSeries />
    <PopularMovies />
    <PopularTvShows />
    <Footer />
  </div>
</template>

<script setup>
import CarouselContainer from "../components/views/home/CarouselContainer.vue";
import TrendingMoviesAndSeries from "../components/views/home/TrendingMoviesAndSeries.vue";
import PopularMovies from "../components/views/home/PopularMovies.vue";
import PopularTvShows from "../components/views/home/PopularTvShows.vue";
import Footer from "../components/global/Footer.vue";
import { ref } from "@vue/reactivity";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

// Data
const cancelCarousel = ref(null);

// start the carousel loop
onBeforeRouteUpdate(() => {
  cancelCarousel.value = null;
});

// stop the carousel loop
onBeforeRouteLeave(() => {
  cancelCarousel.value = true;
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
}

body {
  background-color: rgb(38, 41, 41);
  color: white;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

img {
  user-select: none;
}

.btn-get-info {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 170px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: rgb(243, 73, 21);
  transform: scale(1, 1);
  color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  text-align: center;
  transition: 250ms ease;
}
.btn-get-info:hover {
  background-color: rgb(214, 63, 16);
  transform: scale(0.95, 0.95);
}
</style>
