<template>
  <div class="tvShow">
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <TvShowContainer @toggle-btn-watch="toggleBtnWatch" />
      </template>

      <!-- loading state -->
      <template #fallback>
        <TvShowContainerLoading />
      </template>
    </Suspense>

    <Suspense>
      <!-- Main Content -->
      <template #default>
        <CastLoading />
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
import TvShowContainer from "../components/views/tvShow/tvShowContainer.vue";
import TvShowContainerLoading from "../components/views/tvShow/TvShowContainerLoading.vue";
// import Cast from "../components/reusables/Cast.vue";
import CastLoading from "../components/reusables/CastLoading.vue";
import Footer from "../components/global/Footer.vue";
import VideoContainer from "../components/reusables/VideoContainer.vue";
import getTvShowTrailer from "../composables/functions/api/getTvShowTrailer.js";
/* Components */
import { ref } from "@vue/reactivity";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

//route
const route = useRoute();

// template refs
const video_container = ref(null);

const official_trailer_id = ref("");
official_trailer_id.value = await getTvShowTrailer(
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
  official_trailer_id.value = await getTvShowTrailer(
    to.params.id,
    process.env.VUE_APP_KEY
  );
});
</script>

<style scoped></style>
