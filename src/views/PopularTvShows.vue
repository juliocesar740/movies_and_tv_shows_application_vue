<template>
  <div class="popular-tv-shows">
    <h1 style="text-align: center">Popular Tv Shows</h1>
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <PopularTvShowsContainer />
      </template>
      <!-- loading state -->
      <template #fallback>
        <PopularTvShowsContainerLoading />
      </template>
    </Suspense>
    <Pagination
      :route="{
        name: 'popularTvShows',
      }"
      :total_pages="total_pages"
    />
    <br />
    <Footer />
  </div>
</template>

<script setup>
/* Components */
import PopularTvShowsContainer from "../components/views/popularTvShows/PopularTvShowsContainer.vue";
import PopularTvShowsContainerLoading from "../components/views/popularTvShows/PopularTvShowsContainerLoading.vue";
import Pagination from "../components/reusables/Pagination.vue";
import Footer from "../components/global/Footer.vue";

import getPopularTvShowsData from "../composables/functions/api/getPopularTvShowsData.js";
import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();
document.title = route.meta.title;

// Data
const data = ref(null);
data.value = await getPopularTvShowsData(
  route.params.page,
  process.env.VUE_APP_KEY
);

const total_pages = ref(0);
total_pages.value = data.value.total_pages;

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  data.value = await getPopularTvShowsData(
    to.params.page,
    process.env.VUE_APP_KEY
  );
  total_pages.value = data.value.total_pages;
});
</script>

<style scoped>
.pagination {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
}

.prev-page,
.next-page,
.page {
  width: 80px;
  height: 40px;
  background-color: rgb(57, 62, 63);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
}

.prev-page:hover,
.next-page:hover,
.page:hover {
  background-color: rgb(60, 65, 66);
}
</style>
