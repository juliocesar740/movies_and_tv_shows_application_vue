<template>
  <div class="popular-movie-card">
    <div class="popular-movie-img">
      <router-link
        :to="{
          name: 'movie',
          params: { id: popularMovie.id },
        }"
      >
        <img
          v-if="popularMovie.poster_path"
          :src="
            'https://image.tmdb.org/t/p/original/' + popularMovie.poster_path
          "
          alt=""
        />
        <img v-else src="../../../assets/not_found.jpeg" alt="" />
      </router-link>
    </div>
    <div class="popular-movie__info">
      <p>{{ popularMovie.title }}</p>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  popularMovie: Object,
});
</script>

<style scoped>
.popular-movie-card {
  height: 320px;
  width: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
}

.popular-movie-card > .popular-movie-img {
  width: 175px;
  height: 250px;
  transform: translateY(0px);
  transition: 150ms ease;
}

.popular-movie-img:hover {
  transform: translateY(-10px);
}

.popular-movie-img img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
}

.popular-movie__info {
  color: #fff;
  font-weight: 600;
  font-size: 1.025rem;
  word-wrap: break-word;
  padding: 0 10px;
  padding-top: 7.5px;
}

@media screen and (max-width: 400px) {
  .popular-movie-card {
    width: 175px;
    height: 275px;
  }
  .popular-movie-card > .popular-movie-img {
    width: 150px;
    height: 220px;
  }
}
</style>
