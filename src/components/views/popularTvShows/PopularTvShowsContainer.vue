<template>
  <div class="popular-tv-shows-container">
    <div
      class="popular-tv-show"
      v-for="popularTvShow in popularTvShows"
      :key="popularTvShow.id"
    >
      <img
        :src="
          'https://image.tmdb.org/t/p/original/' + popularTvShow.poster_path
        "
        alt=""
      />
      <div class="popular-tv-show__info">
        <p>
          {{ popularTvShow.name }}
        </p>
        <router-link
          class="btn-get-info__blue"
          :to="{
            name: 'tv',
            params: { id: popularTvShow.id },
          }"
        >
          Get more details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  popularTvShows: Array,
});
</script>

<style scoped>
.popular-tv-shows-container {
  width: 90%;
  margin: 27.5px auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px 10px;
}

.popular-tv-show {
  justify-self: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 210px;
  height: 290px;
}

.popular-tv-show:hover .popular-tv-show__info {
  z-index: 5;
  opacity: 1;
  visibility: visible;
  transform: translateX(0px);
}

.popular-tv-show__info {
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100px);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms ease;
}

.popular-tv-show:hover img {
  opacity: 0.5;
}

.popular-tv-show > img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
}

.btn-get-info__blue {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 170px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: rgb(34, 146, 221);
  transform: scale(1, 1);
  color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  text-align: center;
  transition: 250ms ease;
}
.btn-get-info__blue:hover {
  background-color: rgb(23, 119, 184);
  transform: scale(0.95, 0.95);
}

/* Media Queries */

@media screen and (max-width: 515px) {
  .popular-tv-shows-container {
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .popular-tv-show {
    width: 160px;
    height: 250px;
  }
  .btn-get-info__blue {
    width: 130px;
    height: 35px;
    font-size: 14.85px;
  }
}
@media screen and (max-width: 410px) {
  .popular-tv-shows-container {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .btn-get-info__blue {
    width: 110px;
    height: 35px;
    font-size: 13.5px;
  }
  .popular-tv-show {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}
@media screen and (max-width: 330px) {
  .popular-tv-shows-container {
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
    padding: 5px 15px;
  }
}
@media screen and (max-width: 310px) {
  .popular-tv-shows-container {
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px 15px;
  }
  .btn-get-info__blue {
    width: 140px;
    height: 40px;
    font-size: 16.5px;
  }
  .popular-tv-show {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
