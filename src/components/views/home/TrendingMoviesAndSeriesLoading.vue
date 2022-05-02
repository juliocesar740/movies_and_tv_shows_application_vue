<template>
  <div class="trending-movies-series-container">
    <!-- Trending audio-visual media contents -->
    <div class="trending-audio-visual-contents">
      <div class="skeleton-loading-card" v-for="i in 20" :key="i"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.trending-movies-series-container {
  width: 85%;
  margin: 40px auto;
}
.trending-audio-visual-contents {
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
  background-color: rgb(76, 81, 85);
}

/* Media Queries */

@media screen and (max-width: 570px) {
  .trending-movies-series-container {
    width: 85%;
    margin: 90px auto;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 510px) {
  .trending-audio-visual-contents {
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .skeleton-loading-card {
    width: 160px;
    height: 250px;
  }
}

@media screen and (max-width: 410px) {
  .trending-audio-visual-contents {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
@media screen and (max-width: 400px) {
  .skeleton-loading-card {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}
@media screen and (max-width: 330px) {
  .trending-audio-visual-contents {
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
    padding: 5px 15px;
  }
}

@media screen and (max-width: 310px) {
  .trending-audio-visual-contents {
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px 15px;
  }
  .skeleton-loading-card {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
