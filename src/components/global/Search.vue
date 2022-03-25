<template>
  <div class="search" ref="search">
    <form @submit.prevent>
      <input
        id="input-text"
        v-model="query"
        type="text"
        ref="search_field"
        placeholder="Search for a Movie or a Tv Show"
        autocomplete="off"
      />
      <div v-if="!searchDropwdownActive" class="icons">
        <button type="submit" class="btn-submit" @click="handleSearch">
          <i class="fas fa-search search-icon"></i>
        </button>
        <i
          v-if="searchActive"
          class="fas fa-close close-icon"
          @click="$emit('toggleFalse')"
        ></i>
      </div>
    </form>
    <SearchResults
      :moviesSearchData="moviesSearchData"
      :tvShowsSearchData="tvShowsSearchData"
      :searchActive="searchActive"
      :query="query"
      @handle-result="handleResult"
    />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import getSearchData from "../../composables/functions/api/getSearchData";
import SearchResults from "./SearchResults.vue";
import { getCurrentInstance, onMounted, onUnmounted } from "@vue/runtime-core";

const { emit } = getCurrentInstance();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  searchActive: Boolean,
  searchDropwdownActive: Boolean,
});

// Data
const moviesSearchData = ref([]);
const tvShowsSearchData = ref([]);
const query = ref("");

// Functions

// it handles the click event on the search icon
const handleSearch = async () => {
  if (document.documentElement.clientWidth < 750) {
    // Active search dropdown component
    emit("searchDropdownActive");
    query.value = "";
    return -1;
  }
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
  // Active the search component
  emit("toggleTrue");
};
const handleResult = () => {
  // Clear text input
  query.value = "";
};

onMounted(() => {
  // if the viewport is less than 750 the search component is hidden
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 750) {
      emit("toggleFalse");
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", () => {});
});
</script>

<style scoped>
.search {
  position: relative;
  border: 2px solid rgb(199, 213, 216);
  border-radius: 7.5px;
  width: 310px;
  height: 45px;
}

.search > form {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.search > form > input[type="text"] {
  position: relative;
  background-color: inherit;
  color: #fff;
  outline: none;
  border: none;
  height: 25px;
  width: 248px;
  font-size: 1rem;
  margin-left: 5px;
  padding: 0px 5px;
}

.search > form > input[type="text"]::placeholder {
  color: rgb(199, 213, 216);
}

.icons {
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7.5px;
}

.search-icon {
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
}

.close-icon {
  font-size: 1.65rem;
  cursor: pointer;
}

.btn-submit {
  outline: none;
  border: none;
  background-color: inherit;
}

/* Media Queries */

@media screen and (max-width: 750px) {
  .search {
    position: relative;
    border: none;
    width: 30px;
    height: 45px;
  }
  .search > form > #input-text {
    display: none;
  }

  .icons {
    position: relative;
    z-index: 2;
    visibility: visible;
  }
}
</style>
