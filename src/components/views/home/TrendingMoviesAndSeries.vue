<template>
  <div class="trending-movies-series-container">
    <!-- Trending audio-visual media contents -->
    <h1 style="margin-left: 10px">Trending</h1>
    <div class="trending-audio-visual-contents">
      <TrendingAudioVisualContent
        v-for="trending_audiovisual_content in trending_movies_and_series"
        :key="trending_audiovisual_content.id"
        :trending_audiovisual_content="trending_audiovisual_content"
      />
    </div>
  </div>
</template>

<script setup>
import TrendingAudioVisualContent from "./TrendingAudiovisualContent.vue";
import getTrendingContent from "../../../composables/functions/api/getTrendingContent";

// data
// Get movies and series trending at the moment
const trending_movies_and_series = await getTrendingContent(
  process.env.VUE_APP_KEY
);
</script>

<style scoped>
.trending-movies-series-container {
  width: 85%;
  margin: 27.5px auto;
}
.trending-audio-visual-contents {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px 10px;
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
}
@media screen and (max-width: 410px) {
  .trending-audio-visual-contents {
    grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
}
</style>
