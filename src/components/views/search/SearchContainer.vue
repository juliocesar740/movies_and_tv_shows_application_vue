<template>
  <div class="search-container">
    <div class="result-card" v-for="result in searchResults" :key="result">
      <img
        :src="'https://image.tmdb.org/t/p/original/' + result.poster_path"
        alt=""
        v-if="result.poster_path"
      />
      <div class="img-icon-error" v-else>
        <div class="img-icon-error__container">
          <i class="fas fa-camera" id="icon-camera"></i>
          <i id="line"></i>
          <span id="error-text">Image not found</span>
        </div>
      </div>
      <div class="result-card__info">
        <p>
          {{ result.title ? result.title : result.name }}
        </p>
        <router-link
          class="btn-get-info__blue"
          :to="{
            name: $route.params.type,
            params: { id: result.id },
          }"
        >
          Get more details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import getSearchData from "../../../composables/functions/api/getSearchData.js";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();

// Data
const data = ref(null);
data.value = await getSearchData(
  route.params.type,
  route.params.query,
  route.params.page,
  process.env.VUE_APP_KEY
);

const searchResults = ref([]);
searchResults.value = data.value.results;

const total_pages = ref(0);
total_pages.value = data.value.total_pages;

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  data.value = await getSearchData(
    to.params.type,
    to.params.query,
    to.params.page,
    process.env.VUE_APP_KEY
  );
  searchResults.value = data.value.results;
  total_pages.value = data.value.total_pages;
});
</script>

<style scoped>
.search-container {
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px 10px;
}

.result-card {
  justify-self: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 210px;
  height: 290px;
}

.result-card:hover .result-card__info {
  z-index: 5;
  opacity: 1;
  visibility: visible;
  transform: translateX(0px);
}

.result-card:hover img,
.result-card:hover .img-icon-error {
  opacity: 0.5;
}

.result-card > img {
  width: 100%;
  height: 100%;
  border-radius: 13px;
}

.img-icon-error {
  width: 100%;
  height: 100%;
  border-radius: 13px;
  position: relative;
  background-color: rgb(46, 59, 68);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-icon-error > * {
  color: rgb(164, 187, 199);
}

#icon-camera {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
}

.img-icon-error__container {
  width: 7.25rem;
  height: 7.25rem;
  border: 7px solid rgb(164, 187, 199);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#line::before {
  content: "";
  position: absolute;
  z-index: 2;
  left: 49px;
  top: 144px;
  width: 103px;
  transform: rotate(45deg);
  border: 4px solid rgb(164, 187, 199);
  background-color: rgb(164, 187, 199);
}

#error-text {
  position: absolute;
  bottom: 35px;
  font-weight: 600;
  font-size: 1.125rem;
}

.result-card__info {
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100px);
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
@media screen and (max-width: 410px) {
  .search-container {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .btn-get-info__blue {
    width: 110px;
    height: 35px;
    font-size: 13.5px;
  }
  .result-card {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}
@media screen and (max-width: 330px) {
  .search-container {
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
    padding: 5px 15px;
  }
}
@media screen and (max-width: 310px) {
  .search-container {
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
  .result-card {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
