<template>
  <div class="search-view">
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <SearchContainer />
      </template>
      <!-- loading state -->
      <template #fallback>
        <SearchContainerLoading />
      </template>
    </Suspense>
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
import SearchContainerLoading from "../components/views/search/SearchContainerLoading.vue";
import Pagination from "../components/reusables/Pagination.vue";
import Footer from "../components/global/Footer.vue";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();
document.title = route.meta.title;

// Data
const data = ref(null);
data.value = await getSearchData(
  route.params.type,
  route.params.query,
  route.params.page,
  process.env.VUE_APP_KEY
);

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
  total_pages.value = data.value.total_pages;
});
</script>

<style></style>
