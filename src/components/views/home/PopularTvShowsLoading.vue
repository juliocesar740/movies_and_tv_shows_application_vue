<template>
  <div class="popular-tv-shows">
    <div class="flex-row" style="margin-top: 12.5px"></div>
    <div class="popular-tv-shows__container">
      <div class="popular-tv-shows__content">
        <div class="popular-movie-card-container" v-for="i in 20" :key="i">
          <div class="popular-movie-card-loading"></div>
          <div class="skeleton-loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.popular-tv-shows {
  padding-top: 5px;
  background-color: rgb(14, 34, 20);
}
.popular-tv-shows__container {
  height: 350px;
  overflow-x: scroll;
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
  margin: 0 auto;
  padding: 3.5px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.popular-tv-shows__content {
  height: 320px;
  width: 4100px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}

.popular-movie-card-container {
  height: 330px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.popular-movie-card-loading {
  height: 250px;
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(149, 153, 156);
  border-radius: 13px;
}

.skeleton-loading {
  align-self: center;
  background-color: rgb(149, 153, 156);
  width: 90px;
  height: 20px;
}

/* Media Queries  */

@media screen and (max-width: 400px) {
  .popular-tv-shows__content {
    width: 3500px;
    height: 350px;
  }
}
</style>
