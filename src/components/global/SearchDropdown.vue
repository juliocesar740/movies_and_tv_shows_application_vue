<template>
  <div
    :class="
      active ? 'search-dropdown search-dropdown-toggle' : 'search-dropdown'
    "
  >
    <form @submit.prevent>
      <div class="input-text__dropdown">
        <input
          v-model="query"
          type="text"
          ref="search_field"
          placeholder="Search for a Movie or a Tv Show"
          autocomplete="off"
        />
        <div class="icons">
          <button type="submit" class="btn-submit" @click="handleSearch">
            <i class="fas fa-search search-icon"></i>
          </button>
          <i class="fas fa-close close-icon" @click="handleResult"></i>
        </div>
      </div>
    </form>
    <SearchDropdownResults
      :moviesSearchData="moviesSearchData"
      :tvShowsSearchData="tvShowsSearchData"
      :resultsList="resultsList"
      :query="query"
      @handle-result="handleResult"
    />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SearchDropdownResults from "./SearchDropdownResults.vue";
import getSearchData from "../../composables/functions/api/getSearchData";
import { getCurrentInstance, onMounted, onUnmounted } from "@vue/runtime-core";

const { emit } = getCurrentInstance();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  active: Boolean,
});

// Data
const moviesSearchData = ref([]);
const tvShowsSearchData = ref([]);
const query = ref("");
const resultsList = ref(null);

// Functions

// it handles the click event on the search icon
const handleSearch = async () => {
  if (!query.value.trim().length) {
    moviesSearchData.value = [];
    tvShowsSearchData.value = [];
    return -1;
  }
  moviesSearchData.value = await getSearchData(
    "movie",
    query.value,
    1,
    process.env.VUE_APP_KEY
  );
  tvShowsSearchData.value = await getSearchData(
    "tv",
    query.value,
    1,
    process.env.VUE_APP_KEY
  );
  // the results become visible
  resultsList.value = true;
};
const handleResult = () => {
  // Clear text input
  query.value = "";

  // the results become hidden
  resultsList.value = null;

  // Deactive the search dropdown
  emit("searchDropdownInactive");
};

onMounted(() => {
  // the search dropdown becomes displayable but not visible yet
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth > 750) {
      handleResult();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {});
});
</script>

<style scoped>
.search-dropdown {
  position: relative;
  top: -10px;
  transform: translateY(-50px);
  z-index: -5;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 45px;
  margin-bottom: 0;
  transition: 350ms ease;
}

.search-dropdown-toggle {
  transform: translateY(0px);
  z-index: 10;
  visibility: visible;
  opacity: 1;
  margin-bottom: 25px;
}

.search-dropdown > form {
  height: 100%;
  width: 100%;
}

.input-text__dropdown {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.input-text__dropdown > input[type="text"] {
  height: 100%;
  width: 100%;
  background-color: rgb(212, 230, 235);
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  padding: 7.5px;
  border-radius: 7.5px;
}

.icons {
  /* border: 1px solid gold;  */
  position: absolute;
  right: 20px;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btn-submit {
  background-color: rgb(212, 230, 235);
  border: none;
  outline: none;
}

.search-icon,
.close-icon {
  font-size: 20.5px;
}

/* Media Queries */

@media screen and (max-width: 700px) {
  .search-dropdown {
    display: block;
  }
}

@media screen and (max-width: 310px) {
  .input-text__dropdown > input[type="text"] {
    font-size: 14px;
  }
  .search-icon,
  .close-icon {
    font-size: 19px;
  }
}
</style>
