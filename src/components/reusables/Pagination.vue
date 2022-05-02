<template>
  <div class="pagination">
    <div class="prev-page" @click="getPrevPage">
      <span>Previous</span>
    </div>
    <div class="page">
      <span>{{ $route.params.page }}</span>
    </div>
    <div class="next-page" @click="getNextPage">
      <span>Next</span>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

// router and routes
const router = useRouter();
const route = useRoute();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  route: Object,
  total_pages: Number,
});

// Functions

// Go to the previous page
const getPrevPage = () => {
  if (Number(route.params.page) === 1) {
    return -1;
  }
  router.push({
    name: route.params.name,
    params: {
      type: route.params.type ? route.params.type : null,
      query: route.params.query ? route.params.query : null,
      page: `${Number(route.params.page) - 1}`,
    },
  });
};
// Go to the next page
const getNextPage = () => {
  if (Number(route.params.page) === props.total_pages) {
    return -1;
  }

  router.push({
    name: route.params.name,
    params: {
      type: route.params.type ? route.params.type : null,
      query: route.params.query ? route.params.query : null,
      page: `${Number(route.params.page) + 1}`,
    },
  });
};
</script>

<style scoped>
.pagination {
  /* border: 1px solid red; */
  margin-top: 50px;
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
.prev-page {
  width: 100px;
}
</style>
