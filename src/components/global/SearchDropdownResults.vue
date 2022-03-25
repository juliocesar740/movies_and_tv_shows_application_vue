<template>
  <div v-if="resultsList" class="search-dropdown-results">
    <MoviesList
      :query="query"
      :moviesSearchData="moviesSearchData"
      @handle-result="$emit('handleResult')"
    />
    <TvShowsList
      :query="query"
      :tvShowsSearchData="tvShowsSearchData"
      @handle-result="$emit('handleResult')"
    />
  </div>
</template>

<script setup>
import MoviesList from "./MoviesList";
import TvShowsList from "./TvShowsList.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  moviesSearchData: Object,
  tvShowsSearchData: Object,
  resultsList: Boolean,
  query: String,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["handleResult"]);
</script>

<style scoped>
.search-dropdown-results {
  position: relative;
  background-color: rgb(62, 76, 80);
}
</style>
