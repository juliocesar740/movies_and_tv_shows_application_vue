<template>
  <div class="movie">
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <MovieContainer @toggle-btn-watch="toggleBtnWatch" />
      </template>

      <!-- loading state -->
      <template #fallback>
        <MovieContainerLoading />
      </template>
    </Suspense>

    <Suspense>
      <!-- Main Content -->
      <template #default>
        <Cast />
      </template>

      <!-- loading state -->
      <template #fallback>
        <CastLoading />
      </template>
    </Suspense>

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
import MovieContainerLoading from "../components/views/movie/MovieContainerLoading.vue";
import Cast from "../components/reusables/Cast.vue";
import CastLoading from "../components/reusables/CastLoading.vue";
import Footer from "../components/global/Footer.vue";
import VideoContainer from "../components/reusables/VideoContainer.vue";
import getMovieTrailer from "../composables/functions/api/getMovieTrailer.js";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

//route
const route = useRoute();
// template refs
const video_container = ref(null);

// get trailer
const official_trailer_id = ref("");
official_trailer_id.value = await getMovieTrailer(
  route.params.id,
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
  official_trailer_id.value = await getMovieTrailer(
    to.params.id,
    process.env.VUE_APP_KEY
  );
});
</script>

<style scoped></style>
