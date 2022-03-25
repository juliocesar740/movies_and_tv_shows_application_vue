<template>
  <div class="movie-info">
    <div class="movie-post">
      <img
        v-if="!movie.poster_path"
        src="../../../assets/not_found.jpeg"
        alt=""
      />
      <img
        v-else
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
        alt=""
      />
      <div class="flex-row">
        <h4>Average Score</h4>
        <div class="score-container">
          <canvas height="60" width="60" ref="score" id="score"></canvas>
          <span>
            <span ref="score_result">
              {{ Number(!movie ? "" : movie.vote_average) * 10 }}</span
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
      <h1 id="movie-title">{{ !movie ? "" : movie.title }} ({{ getYear }})</h1>
      <div class="flex-row flex-col-toggle">
        <p style="font-size: 1.125rem">
          <span class="span-active">Release date :</span>
          {{
            !movie || !movie.release_date ? "Not Avaliable" : movie.release_date
          }}
        </p>
        <span class="dot">&#8226;</span>
        <ul class="flex-row" style="gap: 2px">
          <span class="span-active">Genres :</span>
          <li
            v-for="genre in !movie
              ? [{ name: 'undefined', id: 0 }]
              : movie.genres"
            :key="genre.id"
          >
            {{ !genre.name ? "" : genre.name
            }}{{
              movie.genres.indexOf(genre) === movie.genres.length - 1 ? "" : ","
            }}
          </li>
        </ul>
        <span class="dot">&#8226;</span>
        <p>
          <span class="span-active">Runtime :</span>
          {{ getFormatRunTime }}
        </p>
      </div>
      <p style="font-size: 1.125rem; color: rgb(198, 203, 208)">
        <i>{{ !movie.tagline ? "" : movie.tagline }}</i>
      </p>
      <h3 style="text-align: justify">Overview</h3>
      <p id="movie-overview">
        {{ !movie.overview ? "" : movie.overview }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { onBeforeRouteUpdate } from "vue-router";
import formatRunTime from "../../../composables/functions/components/formatRunTime";
import canvasPercentage from "../../../composables/functions/components/canvasPercentage.js";

// eslint-disable-next-line no-unused-vars
const props = defineProps({ movie: Object });

// template refs
const score_result = ref(null);
const score = ref(null);

// computed functions
const getYear = computed(() => {
  return !props.movie || !props.movie.release_date
    ? "Not Avaliable"
    : props.movie.release_date.split("-")[0];
});
const getFormatRunTime = computed(() => {
  return formatRunTime(props.movie.runtime);
});

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
.movie-info {
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

.movie-info::before {
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

#movie-overview {
  text-align: justify;
  font-size: 14px;
}
.movie-post {
  position: relative;
  z-index: 5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.5px;
  min-width: 225px;
}

.movie-post > img {
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

#movie-title {
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
  .movie-info {
    flex-wrap: wrap;
    justify-content: center;
  }
  .movie-post {
    align-self: center;
    flex-direction: column;
    align-items: center;
    gap: 11.5px;
    min-width: 300px;
  }
  .movie-post > img {
    width: 100%;
    height: 400px;
  }
  #movie-overview {
    font-size: 14px;
    margin-bottom: 35px;
  }
  .flex-col {
    min-height: 300px;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 500px) {
  #movie-title {
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
  .movie-post {
    min-width: 250px;
  }
  .movie-post > img {
    width: 100%;
    height: 300px;
  }
}
</style>
