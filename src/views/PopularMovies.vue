<template>
  <div class="popular-movies">
    <h1 style="text-align: center">Popular Movies</h1>
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <PopularMoviesContainer />
      </template>

      <!-- loading state -->
      <template #fallback> <PopularMoviesContainerLoading /> </template>
    </Suspense>
    <Pagination
      :route="{
        name: 'popularMovies',
      }"
      :total_pages="total_pages"
    />
    <br />
  </div>

  <Footer />
</template>

<script setup>
/* Components */
import getPopularMoviesData from "../composables/functions/api/getPopularMoviesData";
import PopularMoviesContainer from "../components/views/popularMovies/PopularMoviesContainer.vue";
import PopularMoviesContainerLoading from "../components/views/popularMovies/PopularMoviesContainerLoading.vue";
import Pagination from "../components/reusables/Pagination.vue";
import Footer from "../components/global/Footer.vue";
/* Components */

import { ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

// route
const route = useRoute();
document.title = route.meta.title;

// Data
const data = ref(null);
data.value = await getPopularMoviesData(
  route.params.page,
  process.env.VUE_APP_KEY
);

const total_pages = ref(0);
total_pages.value = data.value.total_pages;

// Handles the new route
onBeforeRouteUpdate(async (to) => {
  data.value = await getPopularMoviesData(
    to.params.page,
    process.env.VUE_APP_KEY
  );
  total_pages.value = data.value.total_pages;
});
</script>

<style scoped>
.pagination {
  /* border: 1px solid red; */
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
  padding: 5px;
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
  background-color: rgb(85, 93, 95);
}

.page-highlight {
  background-color: rgb(105, 115, 117);
}
</style>
