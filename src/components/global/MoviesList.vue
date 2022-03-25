<template>
  <div class="movies-list">
    <h2
      v-if="!moviesSearchData.total_results"
      class="movies-list__results result-not-found"
    >
      Movies(0) - View All
    </h2>
    <router-link
      v-else
      :to="{
        name: 'search',
        params: {
          type: 'movie',
          query: query ? query : ' ',
          page: 1,
        },
      }"
      style="color: #fff"
      @click="$emit('handleResult')"
      ><h2 class="movies-list__results">
        Movies({{ moviesSearchData.total_results }}) - View All
      </h2></router-link
    >
    <p
      v-if="!moviesSearchData.total_results"
      style="
        font-weight: 600;
        font-size: 1.175rem;
        word-wrap: break;
        padding: 5px 8.5px;
      "
      class="result-not-found"
    >
      <i
        class="fa-solid fa-circle-exclamation result-not-found"
        style="color: rgb(223, 96, 78); padding-right: 5px"
      ></i>
      Nothing Found
    </p>
    <SearchResult
      v-else
      :type="'movie'"
      :SearchResultData="moviesSearchData"
      @handleResult="$emit('handleResult')"
    />
  </div>
</template>

<script setup>
import SearchResult from "./SearchResult.vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  query: String,
  moviesSearchData: Object,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["handleResult"]);
</script>

<style scoped>
.movies-list {
  line-height: 2rem;
}
.movies-list__results {
  display: inline-block;
  width: 100%;
  padding: 8.5px;
}

.movies-list__results:hover {
  background-color: rgb(83, 85, 85);
}
</style>
