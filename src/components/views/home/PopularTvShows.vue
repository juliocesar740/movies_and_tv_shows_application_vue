<template>
  <div class="popular-tv-shows">
    <div class="flex-row">
      <h2 style="margin-left: 5px">Tv Shows Popular</h2>
      <router-link
        :to="{ name: 'popularTvShows', params: { page: 1 } }"
        class="btn-discover"
        >Discover More Tv Shows</router-link
      >
    </div>
    <div class="popular-tv-shows__container">
      <div class="popular-tv-show__content">
        <PopularTvShowCard
          v-for="popularTvShow in popularTvShows"
          :key="popularTvShow.id"
          :popularTvShow="popularTvShow"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PopularTvShowCard from "./PopularTvShowCard.vue";
import getPopularTvShowsData from "../../../composables/functions/api/getPopularTvShowsData";

//data
const { popularTvShows } = await getPopularTvShowsData(
  1,
  process.env.VUE_APP_KEY
);
</script>

<style scoped>
.popular-tv-shows {
  padding-top: 20px;
  background-color: rgb(14, 34, 20);
}
.popular-tv-shows__container {
  height: 360px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
}

/* Scroller */
.popular-tv-shows__container::-webkit-scrollbar {
  width: 2.75px;
  height: 8px;
}

/* Scroller handle */
.popular-tv-shows__container::-webkit-scrollbar-thumb {
  background: rgba(218, 233, 233, 0.979);
  border-radius: 10px;
}

.flex-row {
  width: 95%;
  margin: 3.5px auto;
  padding: 3.5px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.btn-discover {
  display: inline;
  background: rgb(6, 120, 205);
  background: linear-gradient(
    90deg,
    rgba(6, 120, 205, 1) 0%,
    rgba(51, 207, 207, 0.9332107843137255) 65%
  );
  color: #fff;
  padding: 7.5px 17.5px;
  font-size: 1.25rem;
  border-radius: 25px;
}

.popular-tv-show__content {
  height: 350px;
  width: 4100px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* Media Queries  */
@media screen and (max-width: 520px) {
  h2 {
    display: none;
  }
  .btn-discover {
    display: inline;
    background: rgb(6, 120, 205);
    background: linear-gradient(
      90deg,
      rgba(6, 120, 205, 1) 0%,
      rgba(51, 207, 207, 0.9332107843137255) 65%
    );
    color: #fff;
    padding: 10.5px 17.5px;
    font-size: 1.25rem;
    border-radius: 7.5px;
    margin-left: 12.5px;
  }
}

@media screen and (max-width: 400px) {
  .popular-tv-show__content {
    width: 3500px;
    height: 350px;
  }
}

@media screen and (max-width: 300px) {
  .btn-discover {
    padding: 7.5px 13px;
    font-size: 1.1rem;
  }
}
</style>
