<template>
  <div class="main" @click="handleApp" ref="app">
    <Navbar
      :searchActive="searchActive"
      :searchDropwdownActive="searchDropwdownActive"
      @toggle-true="toggleSearchResults"
      @toggle-false="toggleSearchResults"
      @search-dropdown-active="searchDropdownActive"
    />
    <SearchDropdown
      :active="searchDropwdownActive"
      @search-dropdown-inactive="searchDropdownInactive"
      @search-dropdown-active="searchDropdownActive"
    />
    <Suspense>
      <!-- Main Content -->
      <template #default>
        <router-view></router-view>
      </template>

      <!-- loading state -->
      <template #fallback> {{ msgError }} </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onErrorCaptured } from "@vue/runtime-core";
import Navbar from "./components/global/Navbar.vue";
import SearchDropdown from "./components/global/SearchDropdown.vue";

// template refs
const app = ref(null);
// data
const searchActive = ref(false);
const searchDropwdownActive = ref(false);
const msgError = ref("");

// methods
const handleApp = (e) => {
  if (e.target.className.indexOf("result-not-found") > -1) {
    return -1;
  }

  if (document.querySelector(".seach__list-top")) {
    if (
      !e.target.closest(".search") ||
      e.target.closest(".movies-list") ||
      e.target.closest(".tv-shows-list")
    ) {
      searchActive.value = false;
    }
  }
  if (document.querySelector(".search-dropdown-results")) {
    if (e.target.closest(".search-dropdown-results")) {
      searchDropdownInactive();
    }
  }
};

const toggleSearchResults = (toggle) => {
  searchActive.value = toggle;
};

const searchDropdownActive = () => {
  searchDropwdownActive.value = true;
};
const searchDropdownInactive = () => {
  searchDropwdownActive.value = false;
};

onErrorCaptured(() => {
  msgError.value = "Something went wrong!";
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
}

body {
  background-color: rgba(14, 15, 15, 0.918);
  color: white;
  overflow-x: hidden;
  font-family: "Source-Sans-Pro", Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

img {
  user-select: none;
}

.main {
  position: relative;
}
</style>
