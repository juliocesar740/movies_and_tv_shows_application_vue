<template>
  <div class="tv-show-container">
    <div
      class="tv-show-background"
      :style="{
        backgroundImage: !tvShow
          ? ''
          : `url(${
              'https://image.tmdb.org/t/p/original/' + tvShow.backdrop_path
            })`,
      }"
    >
      <TvShowInfo
        :tvShow="tvShow"
        @toggle-btn-watch="$emit('toggleBtnWatch')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import TvShowInfo from "./TvShowInfo.vue";
import getTvShowData from "../../../composables/functions/api/getTvShowData.js";

//route
const route = useRoute();

// Data
const tvShow = ref(null);
tvShow.value = await getTvShowData(route.params.id, process.env.VUE_APP_KEY);
document.title = tvShow.value.name;

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  tvShow.value = await getTvShowData(to.params.id, process.env.VUE_APP_KEY);
});
</script>

<style scoped>
.tv-show-container {
  position: relative;
}

.tv-show-background {
  position: relative;
  transform: translateY(-40px);
  min-height: 500px;
  width: 100%;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.tv-show-background::before {
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
  .tv-show-background {
    min-height: calc(700px + 10em);
  }
}
</style>
