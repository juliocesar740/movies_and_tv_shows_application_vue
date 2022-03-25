<template>
  <div class="tvShow" v-show="tvShow">
    <TvShowContainer :tvShow="tvShow" @toggle-btn-watch="toggleBtnWatch" />
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
import TvShowContainer from "../components/views/tvShow/tvShowContainer.vue";
import Cast from "../components/global/cast.vue";
import Footer from "../components/global/Footer.vue";
import VideoContainer from "../components/reusables/VideoContainer.vue";
import getTvShowData from "../composables/functions/api/getTvShowData.js";
import getTvShowCast from "../composables/functions/api/getTvShowCast.js";
import getTvShowTrailer from "../composables/functions/api/getTvShowTrailer.js";
/* Components */
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();

// template refs
const video_container = ref(null);

// Data
const tvShow = ref(null);
tvShow.value = await getTvShowData(route.params.id, process.env.VUE_APP_KEY);
const cast = ref([]);
cast.value = await getTvShowCast(tvShow.value.id, process.env.VUE_APP_KEY);
const official_trailer_id = ref("");
official_trailer_id.value = await getTvShowTrailer(
  tvShow.value.id,
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
  tvShow.value = await getTvShowData(to.params.id, process.env.VUE_APP_KEY);
  cast.value = await getTvShowCast(to.params.id, process.env.VUE_APP_KEY);
  official_trailer_id.value = await getTvShowTrailer(
    to.params.id,
    process.env.VUE_APP_KEY
  );
});
</script>

<style scoped></style>
