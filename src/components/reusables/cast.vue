<template>
  <div class="cast">
    <h2 style="margin: 0 25px; padding-top: 10px">Stars</h2>
    <div class="cast-container">
      <div class="cast-card" v-for="star in cast" :key="star.id">
        <div class="cast-card__img">
          <img
            :src="`https://image.tmdb.org/t/p/original/${star.profile_path}`"
            alt=""
          />
        </div>
        <div class="cast-card__info">
          <p>{{ star.name }}</p>
          <p>{{ star.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import getMovieData from "../../composables/functions/api/getMovieData.js";
import getMovieCast from "../../composables/functions/api/getMovieCast.js";
import getTvShowData from "../../composables/functions/api/getTvShowData.js";
import getTvShowCast from "../../composables/functions/api/getTvShowCast.js";

//route
const route = useRoute();

// type
const type = route.fullPath.split("/")[1];
const cast = ref([]);

if (type === "movie") {
  // data
  const movie = ref(null);
  movie.value = await getMovieData(route.params.id, process.env.VUE_APP_KEY);

  cast.value = await getMovieCast(movie.value.id, process.env.VUE_APP_KEY);
} else if (type === "tvShow") {
  // data
  const tv = ref(null);
  tv.value = await getTvShowData(route.params.id, process.env.VUE_APP_KEY);
  cast.value = await getTvShowCast(tv.value.id, process.env.VUE_APP_KEY);
}

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  // type
  const type = to.fullPath.split("/")[1];

  if (type === "movie") {
    // data
    const movie = ref(null);
    movie.value = await getMovieData(to.params.id, process.env.VUE_APP_KEY);

    const cast = ref([]);
    cast.value = await getMovieCast(movie.value.id, process.env.VUE_APP_KEY);
  } else if (type === "tvShow") {
    // data
    const tv = ref(null);
    tv.value = await getTvShowData(to.params.id, process.env.VUE_APP_KEY);

    const cast = ref([]);
    cast.value = await getTvShowCast(tv.value.id, process.env.VUE_APP_KEY);
  }
});
</script>

<style scoped>
.cast {
  width: 95%;
  margin: 30px auto;
  background-color: rgba(24, 33, 43, 0.904);
}

.cast-container {
  width: 100%;
  margin-top: 3.5px;
  padding: 25px 20px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  overflow-x: scroll;
}

/* Scroller */
.cast-container::-webkit-scrollbar {
  width: 2.75px;
  height: 8px;
}

/* Scroller handle */
.cast-container::-webkit-scrollbar-thumb {
  background: rgba(218, 233, 233, 0.979);
  border-radius: 10px;
}

.cast-card {
  position: relative;
  /* border: 1px solid gold; */
  box-shadow: rgba(119, 123, 133, 0.25) 0px 4px 8px -2px,
    rgba(167, 171, 177, 0.08) 0px 0px 0px 1px;
  width: 175px;
  height: 285px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: rgb(39, 45, 49);
  border-radius: 5px;
}

.cast-card__img {
  width: 175px;
  height: 200px;
}

.cast-card__img > img {
  width: 100%;
  height: 100%;
}

.cast-card__info {
  padding: 0 10px;
  padding-top: 5px;
  font-size: 14px;
  word-wrap: break-word;
}
</style>
