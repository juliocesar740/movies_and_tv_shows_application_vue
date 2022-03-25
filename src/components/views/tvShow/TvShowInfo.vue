<template>
  <div class="tv-show-info">
    <div class="tv-show-post">
      <img
        v-if="!tvShow.poster_path"
        src="../../../assets/not_found.jpeg"
        alt=""
      />
      <img
        v-if="tvShow.poster_path"
        :src="`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`"
        alt=""
      />
      <div class="flex-row">
        <h4>Average Score</h4>
        <div class="score-container">
          <canvas height="60" width="60" ref="score" id="score"></canvas>
          <span>
            <span ref="score_result">
              {{
                Number(!tvShow.vote_average ? "" : tvShow.vote_average) * 10
              }}</span
            >
            <span style="font-size: 12.75px">&#37;</span>
          </span>
        </div>
      </div>

      <button class="btn-watch" @click="$emit('toggleBtnWatch')">
        Watch Trailer
      </button>
    </div>
    <div class="flex-col">
      <h1 id="tv-show-title">
        {{ !tvShow.name ? "" : tvShow.name }} ({{ getYear }})
      </h1>
      <div class="flex-row flex-col-toggle">
        <ul class="flex-row" style="gap: 2px">
          <span class="span-active"
            >Genres : {{ !tvShow.genres.length ? "Not Avaliable" : "" }}</span
          >

          <li
            v-for="genre in !tvShow.genres.length
              ? [{ name: 'undefined', id: 0 }]
              : tvShow.genres"
            :key="genre"
          >
            {{ !genre.name ? "" : genre.name
            }}{{
              !tvShow.genres.length
                ? ""
                : tvShow.genres.indexOf(genre) === tvShow.genres.length - 1
                ? ""
                : ","
            }}
          </li>
        </ul>
        <span class="dot">&#8226;</span>
        <p>
          <span class="span-active">Episode runtime :</span
          >{{
            !tvShow.episode_run_time[0]
              ? " Not Avaliable"
              : " " + tvShow.episode_run_time[0] + "m"
          }}
        </p>
      </div>
      <p style="font-size: 1.125rem; color: rgb(198, 203, 208)">
        <i>{{ !tvShow.tagline ? "" : tvShow.tagline }}</i>
      </p>
      <h3>Overview</h3>
      <p id="tv-show-overview">
        {{ !tvShow.overview ? "" : tvShow.overview }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { onBeforeRouteUpdate } from "vue-router";
import canvasPercentage from "../../../composables/functions/components/canvasPercentage.js";

// eslint-disable-next-line no-unused-vars
const props = defineProps({ tvShow: Object });

// template refs
const score_result = ref(null);
const score = ref(null);

// computed functions
const getYear = computed(() => {
  return !props.tvShow.seasons[0].air_date
    ? "Not Avaliable"
    : props.tvShow.seasons[0].air_date.split("-")[0];
});

// functions
const getCanvasPercentage = (score, score_result) => {
  canvasPercentage(score, score_result);
};
onMounted(() => {
  getCanvasPercentage(score.value, score_result.value);
});

onBeforeRouteUpdate(() => {
  getCanvasPercentage(score.value, score_result.value);
});
</script>

<style scoped>
p {
  line-height: 1.5rem;
}
.tv-show-info {
  position: relative;
  top: 25px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 98.5%;
  margin: 0 auto;
  min-height: 95%;
  padding: 0px 15.75px;
  align-items: center;
  gap: 50px;
}

.tv-show-info::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: linear-gradient(
    to right,
    rgb(27, 59, 63) 150px,
    rgba(59, 74, 78, 0.84) 100%
  );
}

#tv-show-overview {
  text-align: justify;
  font-size: 14px;
}
.tv-show-post {
  position: relative;
  z-index: 5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.5px;
  min-width: 225px;
}

.tv-show-post > img {
  width: 100%;
  height: 300px;
  border-radius: 9.5px;
}

.flex-col {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  max-width: 1000px;
  height: 100%;
  gap: 12.5px;
  margin-bottom: 20px;
}

#tv-show-title {
  font-size: 2rem;
}

.dot {
  font-size: 1.5rem;
}

.span-active {
  display: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: baseline;
  gap: 7.5px;
}

.score-container {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.score-container > span {
  position: absolute;
  top: 20px;
  left: 15px;
  font-size: 20px;
}

#score {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: rgb(6, 26, 22);
}

.btn-watch {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(233, 30, 23, 0.932);
  color: rgb(216, 228, 231);
  font-size: 1rem;
  cursor: pointer;
}

/* Media Queries */

@media screen and (max-width: 750px) {
  .tv-show-info {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tv-show-post {
    align-self: center;
    flex-direction: column;
    align-items: center;
    gap: 11.5px;
    min-width: 300px;
  }
  .tv-show-post > img {
    width: 100%;
    height: 400px;
  }
  #tv-show-overview {
    margin-bottom: 35px;
  }
  .flex-col {
    align-self: flex-start;
    min-height: 300px;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 500px) {
  #tv-show-title {
    font-size: 1.5rem;
  }
  .dot {
    display: none;
  }
  .flex-col-toggle {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .span-active {
    display: inline-block;
  }
}
@media screen and (max-width: 400px) {
  .tv-show-post {
    min-width: 250px;
  }
  .tv-show-post > img {
    width: 100%;
    height: 300px;
  }
}
</style>
