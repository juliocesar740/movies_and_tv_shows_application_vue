<template>
  <div class="popular-movies">
    <div class="flex-row" style="margin-top: 12.5px">
      <h2 style="margin-left: 5px">Movies Popular</h2>
      <router-link
        :to="{ name: 'popularMovies', params: { page: 1 } }"
        class="btn-discover"
        >Discover More Movies</router-link
      >
    </div>
    <div class="popular-movies__container">
      <div class="popular-movies__content">
        <PopularMovieCard
          v-for="popularMovie in popularMovies"
          :key="popularMovie.id"
          :popularMovie="popularMovie"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PopularMovieCard from "./PopularMovieCard.vue";
import getPopularMoviesData from "../../../composables/functions/api/getPopularMoviesData";

// data
const { popularMovies } = await getPopularMoviesData(
  1,
  process.env.VUE_APP_KEY
);
</script>

<style scoped>
.popular-movies {
  padding-top: 5px;
  background-color: rgb(42, 78, 78);
}
.popular-movies__container {
  height: 360px;
  overflow-x: scroll;
}

/* Scroller */
.popular-movies__container::-webkit-scrollbar {
  width: 2.75px;
  height: 8px;
}

/* Scroller handle */
.popular-movies__container::-webkit-scrollbar-thumb {
  background: rgba(218, 233, 233, 0.979);
  border-radius: 10px;
}

.flex-row {
  width: 95%;
  margin: 0 auto;
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

.popular-movies__content {
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
  .popular-movies__content {
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
