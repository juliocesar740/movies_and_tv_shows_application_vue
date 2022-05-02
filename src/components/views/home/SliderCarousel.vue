<template>
  <div class="slider-carousel">
    <div class="movie-carousel" ref="movie_carousel">
      <div class="movie-poster">
        <img
          :src="`https://image.tmdb.org/t/p/original/${
            movie ? movie.poster_path : ''
          }`"
          alt=""
        />
      </div>
      <div class="movie-info">
        <h1>{{ movie ? movie.title : "" }}</h1>
        <h4>Year : {{ movie ? movie.release_date.split("-")[0] : "" }}</h4>
        <h4>Rating : {{ movie ? movie.vote_average : "" }}</h4>
        <h4 id="overview">{{ movie ? getOverview : "" }}</h4>
        <router-link
          class="btn-get-info"
          :to="{ name: 'movie', params: { id: movie ? movie.id : 0 } }"
          >Get more details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onUpdated, ref } from "@vue/runtime-core";
import getMoviesPlaying from "../../../composables/functions/api/getMoviesPlaying";

// eslint-disable-next-line no-unused-vars
const props = defineProps({ position: Number });

// template refs
const movie_carousel = ref(null);

// Data
const moviesCarousel = await getMoviesPlaying(process.env.VUE_APP_KEY);

// Computed functions
const movie = computed(() => {
  // Update the movie in the slider
  return moviesCarousel[props.position];
});
const getOverview = computed(() => {
  return moviesCarousel[props.position].overview.slice(0, 111) + "...";
});

// animation carousel
onUpdated(() => {
  if (
    movie_carousel.value.className === "movie-carousel movie-carousel-active"
  ) {
    setTimeout(() => {
      movie_carousel.value.classList.remove("movie-carousel-active");
    }, 250);
  }
});
</script>

<style scoped>
@keyframes show-up {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

.slider-carousel {
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: row;
  transition: 250ms ease;
}

.movie-carousel {
  position: relative;
  transform: translateX(0px);
  z-index: 10;
  display: flex;
  flex-direction: row;
  transition: 400ms ease;
  height: 350px;
  width: 100%;
}

.movie-carousel-active {
  position: relative;
  transform: translateX(0px);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  display: flex;
  flex-direction: row;
  transition: 250ms ease;
  width: 100%;
  animation: show-up 250ms ease-in 0s 1 normal forwards;
}

.movie-poster {
  width: 250px;
  height: 100%;
}

.movie-poster > img {
  width: 100%;
  height: 100%;
}

.movie-info {
  position: relative;
  z-index: 15;
  background: rgb(50, 54, 58);
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 15px;
  gap: 15px;
}

.movie-info h1 {
  margin-bottom: 7.5px;
}

.movie-info h4 {
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-top: s5px;
}

#overview {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 18px;
  line-height: 1.5rem;
  word-wrap: break-word;
  word-spacing: 1.5px;
  margin-top: 3.5px;
  text-align: start;
}

.movie-info a {
  margin-top: 20px;
}

/* Media Queries */
@media screen and (max-width: 800px) {
  .movie-carousel {
    height: 400px;
  }
  .movie-poster {
    width: 250px;
  }
  .movie-info {
    width: 350px;
  }
  #overview {
    font-size: 18px;
    line-height: 1.5rem;
  }
  .movie-info a {
    margin-top: 15px;
  }
}
@media screen and (max-width: 720px) {
  .movie-carousel {
    height: 375px;
  }
  .movie-poster {
    width: 200px;
  }
  .movie-info {
    width: 300px;
  }

  .movie-info h1 {
    font-size: 1.85rem;
  }

  #overview {
    font-size: 16px;
  }
  .movie-info a {
    margin-top: 15px;
  }
}

@media screen and (max-width: 605px) {
  .movie-info h1 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .movie-info h4 {
    font-size: 15px;
  }
  .movie-info a {
    align-self: center;
    width: 150px;
    height: 40px;
    font-size: 16px;
    margin-top: 12.5px;
  }
  .movie-carousel {
    height: 600px;
    flex-direction: column;
  }
  .movie-poster {
    height: 280px;
    width: 270px;
  }
  .movie-carousel,
  .movie-carousel-active {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .movie-info {
    height: 325px;
    width: 270px;
    padding: 15.75px 7.5px;
    gap: 7.5px;
  }
}

@media screen and (max-width: 400px) {
  .movie-poster {
    height: 300px;
    width: calc(300px - 8.5%);
  }
  .movie-info {
    width: calc(300px - 8.5%);
  }
}

@media screen and (max-width: 370px) {
  .movie-poster {
    width: calc(250px - 8.5%);
  }
  .movie-info {
    width: calc(250px - 8.5%);
  }
}
@media screen and (max-width: 320px) {
  .movie-poster {
    width: 200px;
  }
  .movie-info {
    height: 400px;
    width: 200px;
  }
}
</style>
