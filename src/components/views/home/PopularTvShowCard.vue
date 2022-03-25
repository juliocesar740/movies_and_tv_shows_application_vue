<template>
  <div class="popular-tv-show-card">
    <div class="popular-tv-show__img">
      <router-link
        :to="{
          name: 'tv',
          params: { id: popularTvShow.id },
        }"
      >
        <img
          v-if="popularTvShow.poster_path"
          :src="
            'https://image.tmdb.org/t/p/original/' + popularTvShow.poster_path
          "
          alt=""
        />
        <img v-else src="../../../assets/not_found.jpeg" alt="" />
      </router-link>
    </div>
    <div class="popular-tv-show__info">
      <p>{{ popularTvShow.name }}</p>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  popularTvShow: Object,
});
</script>

<style scoped>
.popular-tv-show-card {
  height: 330px;
  width: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
}

.popular-tv-show-card > .popular-tv-show__img {
  width: 175px;
  height: 250px;
  transform: translateY(0px);
  transition: 150ms ease;
}

.popular-tv-show__img:hover {
  transform: translateY(-10px);
}

.popular-tv-show__img img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
}

.popular-tv-show__info {
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  word-wrap: break-word;
  padding: 0 10px;
  padding-top: 7.5px;
}

@media screen and (max-width: 400px) {
  .popular-tv-show-card {
    width: 175px;
    height: 275px;
  }
  .popular-tv-show-card > .popular-tv-show__img {
    width: 150px;
    height: 220px;
  }
}
</style>
