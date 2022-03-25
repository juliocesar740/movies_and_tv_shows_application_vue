<template>
  <div class="popular-movies-container">
    <div
      class="popular-movie"
      v-for="popularMovie in popularMovies"
      :key="popularMovie.id"
    >
      <img
        :src="'https://image.tmdb.org/t/p/original/' + popularMovie.poster_path"
        alt=""
      />
      <div class="popular-movie__info">
        <p>
          {{ popularMovie.title }}
        </p>
        <router-link
          class="btn-get-info__blue"
          :to="{
            name: 'movie',
            params: { id: popularMovie.id },
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
  popularMovies: Array,
});
</script>

<style scoped>
.popular-movies-container {
  width: 90%;
  margin: 27.5px auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px 10px;
}

.popular-movie {
  justify-self: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 210px;
  height: 290px;
}

.popular-movie:hover .popular-movie__info {
  z-index: 5;
  opacity: 1;
  visibility: visible;
  transform: translateX(0px);
}

.popular-movie__info {
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

.popular-movie:hover img {
  opacity: 0.5;
}

.popular-movie > img {
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
  .popular-movies-container {
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .popular-movie {
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
  .popular-movies-container {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .btn-get-info__blue {
    width: 110px;
    height: 35px;
    font-size: 13.5px;
  }
  .popular-movie {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}
@media screen and (max-width: 330px) {
  .popular-movies-container {
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
    padding: 5px 15px;
  }
}
@media screen and (max-width: 310px) {
  .popular-movies-container {
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
  .popular-movie {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
