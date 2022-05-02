<template>
  <div class="popular-movies-container-loading">
    <div class="skeleton-loading-card" v-for="i in 20" :key="i"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.popular-movies-container-loading {
  width: 90%;
  margin: 27.5px auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px 10px;
}

.skeleton-loading-card {
  border-radius: 13.5px;
  width: 210px;
  height: 290px;
  justify-self: center;
  background-color: rgb(83, 85, 76);
}

/* Media Queries */

@media screen and (max-width: 515px) {
  .popular-movies-container-loading {
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .skeleton-loading-card {
    width: 160px;
    height: 250px;
  }
}
@media screen and (max-width: 410px) {
  .popular-movies-container-loading {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .skeleton-loading-card {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}
@media screen and (max-width: 330px) {
  .popular-movies-container-loading {
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
    padding: 5px 15px;
  }
}
@media screen and (max-width: 310px) {
  .popular-movies-container-loading {
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
  .skeleton-loading-card {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
