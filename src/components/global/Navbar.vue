<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }" class="link-route"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'popularMovies', params: { page: 1 } }"
          class="link-route"
          >Movies</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'popularTvShows', params: { page: 1 } }"
          class="link-route"
          >Tv Shows</router-link
        >
      </li>
    </ul>
    <Search
      :searchActive="searchActive"
      :searchDropwdownActive="searchDropwdownActive"
      @toggle-true="$emit('toggleTrue', true)"
      @toggle-false="$emit('toggleFalse', false)"
      @search-dropdown-active="$emit('searchDropdownActive')"
    />
  </div>
</template>

<script setup>
import Search from "./Search.vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  searchActive: Boolean,
  searchDropwdownActive: Boolean,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits([
  "toggleTrue",
  "toggleFalse",
  "searchDropdownActive",
]);
</script>

<style scoped>
.navbar {
  position: relative;
  height: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 150px;
}

.navbar ul {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.navbar ul > * {
  margin-left: 11.5px;
}

.link-route {
  font-size: 1.2675rem;
  color: rgb(238, 241, 241);
}

@media screen and (max-width: 750px) {
  .navbar {
    justify-content: center;
    gap: 35px;
  }
}

@media screen and (max-width: 360px) {
  .navbar {
    gap: 20px;
  }
}

@media screen and (max-width: 310px) {
  .link-route {
    font-size: 17px;
  }
}
</style>
