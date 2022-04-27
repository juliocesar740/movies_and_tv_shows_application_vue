<template>
  <div class="movie" v-show="movie">
    <MovieContainer :movie="movie" @toggle-btn-watch="toggleBtnWatch" />
    <Cast :cast="cast" />
    <Footer />
    <VideoContainer
      ref="video_container"
      :trailer="trailer"
      :official_trailer_id="official_trailer_id"
      :backgroundUnfocused="backgroundUnfocused"
      @toggle-btn-watch="toggleBtnWatch"
    />
  </div>
</template>

<script setup>
/* Components */
import MovieContainer from "../components/views/movie/movieContainer.vue";
import Cast from "../components/reusables/cast.vue";
import Footer from "../components/global/Footer.vue";
import VideoContainer from "../components/reusables/VideoContainer.vue";
/* Components */
import getMovieData from "../composables/functions/api/getMovieData.js";
import getMovieCast from "../composables/functions/api/getMovieCast.js";
import getMovieTrailer from "../composables/functions/api/getMovieTrailer.js";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

//route
const route = useRoute();
// template refs
const video_container = ref(null);

// Data
const movie = ref(null);
movie.value = await getMovieData(route.params.id, process.env.VUE_APP_KEY);
const cast = ref([]);
cast.value = await getMovieCast(movie.value.id, process.env.VUE_APP_KEY);
const official_trailer_id = ref("");
official_trailer_id.value = await getMovieTrailer(
  movie.value.id,
  process.env.VUE_APP_KEY
);
const trailer = ref(null);
const backgroundUnfocused = ref(null);

// Functions

const toggleBtnWatch = () => {
  video_container.value.$refs.iframe.src = `https://www.youtube.com/embed/${official_trailer_id.value}?start=0&end=`;
  trailer.value = !trailer.value;
  backgroundUnfocused.value = !backgroundUnfocused.value;
};

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  movie.value = await getMovieData(to.params.id, process.env.VUE_APP_KEY);
  cast.value = await getMovieCast(to.params.id, process.env.VUE_APP_KEY);
  official_trailer_id.value = await getMovieTrailer(
    to.params.id,
    process.env.VUE_APP_KEY
  );
});
</script>

<style scoped></style>
