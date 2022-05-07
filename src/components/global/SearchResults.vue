<template>
  <div :class="getSearchClasses" v-if="searchActive">
    <MoviesList
      :query="query"
      :moviesSearchData="moviesSearchData"
      @handleResult="$emit('handleResult')"
    />
    <TvShowsList
      :query="query"
      :tvShowsSearchData="tvShowsSearchData"
      @handleResult="$emit('handleResult')"
    />
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import MoviesList from "./MoviesList";
import TvShowsList from "./TvShowsList.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  moviesSearchData: Object,
  tvShowsSearchData: Object,
  searchActive: Boolean,
  query: String,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["handleResult"]);

// Functions

// change the component's layout according to the number of movie and tv shows matched
const getSearchClasses = computed(() => {
  const movies =
    JSON.parse(JSON.stringify(props.moviesSearchData)).results ?? null;
  const tvShows =
    JSON.parse(JSON.stringify(props.tvShowsSearchData)).results ?? null;

  if (!movies || !tvShows) {
    return {
      "seach__list-top": true,
    };
  }

  const length = movies.length + tvShows.length;

  return {
    "seach__list-top": length <= 4,
    "seach__list-top seach__list-top-overflow": length > 4,
  };
});
</script>

<style scoped>
.seach__list-top {
  /* border: 3px solid rgb(142, 160, 160); */
  border-radius: 7.5px;
  position: absolute;
  right: calc(50px - 18.5%);
  top: 50px;
  z-index: 15;
  width: 600px;
  background-color: rgb(51, 59, 59);
}

.seach__list-top-overflow {
  height: 535px;
  overflow-y: scroll;
}

/* Scroller width */
.seach__list-top-overflow::-webkit-scrollbar {
  width: 8px;
}

/* Scroller handle */
.seach__list-top-overflow::-webkit-scrollbar-thumb {
  background: rgba(216, 223, 223, 0.932);
  border-radius: 10px;
}

/* Media Queries */
@media screen and (max-width: 800px) {
  .seach__list-top {
    right: calc(50px - 18.5%);
  }
}

@media screen and (max-width: 750px) {
  .seach__list-top,
  .seach__list-top-overflow {
    display: none;
  }
}
</style>
