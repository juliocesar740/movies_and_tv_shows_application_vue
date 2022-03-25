<template>
  <div class="tv-shows-list">
    <h2
      v-if="!tvShowsSearchData.total_results"
      class="tv-shows-list__results result-not-found"
    >
      Tv Shows(0) - View All
    </h2>
    <router-link
      v-else
      :to="{
        name: 'search',
        params: { type: 'tv', query: query ? query : ' ', page: 1 },
      }"
      style="color: #fff"
      @click="$emit('handleResult')"
    >
      <h2 class="tv-shows-list__results">
        Tv Shows({{ tvShowsSearchData.total_results }}) - View All
      </h2>
    </router-link>

    <p
      v-if="!tvShowsSearchData.total_results"
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
      :type="'tv'"
      :SearchResultData="tvShowsSearchData"
      @handle-result="$emit('handleResult')"
    />
  </div>
</template>

<script setup>
import SearchResult from "./SearchResult.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  query: String,
  tvShowsSearchData: Object,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["handleResult"]);
</script>

<style scoped>
.tv-shows-list {
  line-height: 2rem;
}
.tv-shows-list__results {
  display: inline-block;
  width: 100%;
  padding: 8.5px;
}

.tv-shows-list__results:hover {
  background-color: rgb(83, 85, 85);
}
</style>
