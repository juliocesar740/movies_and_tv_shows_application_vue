<template>
  <div class="search-view">
    <SearchContainer :searchResults="searchResults" />
    <Pagination
      :route="{
        name: 'search',
        type: $route.params.type,
        query: $route.params.query,
      }"
      :total_pages="total_pages"
    />
    <br />
    <Footer />
  </div>
</template>

<script setup>
import getSearchData from "../composables/functions/api/getSearchData.js";
import SearchContainer from "../components/views/search/SearchContainer.vue";
import Pagination from "../components/reusables/Pagination.vue";
import Footer from "../components/global/Footer.vue";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();

// Data
const data = ref(null);
data.value = await getSearchData(
  route.params.type,
  route.params.query,
  route.params.page,
  process.env.VUE_APP_KEY
);
const searchResults = ref([]);
searchResults.value = data.value.results;
const total_pages = ref(0);
total_pages.value = data.value.total_pages;

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  data.value = await getSearchData(
    to.params.type,
    to.params.query,
    to.params.page,
    process.env.VUE_APP_KEY
  );
  searchResults.value = data.value.results;
  total_pages.value = data.value.total_pages;
});
</script>

<style></style>
