<template>
  <router-link
    :to="{ name: type, params: { id: `${result.id}` } }"
    style="color: white"
    v-for="result in SearchResultData.results.slice(
      0,
      SearchResultData.results.length > 3 ? 3 : undefined
    )"
    :key="result.id"
    @click="$emit('handleResult')"
  >
    <div class="result-list">
      <div class="result-list__image">
        <img
          :src="`https://image.tmdb.org/t/p/original${result.poster_path}`"
          alt=""
          height="100"
          width="75"
          v-if="result.poster_path"
        />
        <img
          src="../../assets/not_found.jpeg"
          alt=""
          height="100"
          width="75"
          v-else
        />
      </div>
      <div class="result-list__info">
        <p class="result-title">
          {{ type === "movie" ? result.title : result.name }}
        </p>
        <p style="font-weight: 600; font-size: 1.1rem">
          {{
            type === "movie"
              ? result.release_date
                ? result.release_date.split("-")[0]
                : "undefined"
              : result.first_air_date
              ? result.first_air_date.split("-")[0]
              : "undefined"
          }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  type: String,
  SearchResultData: Object,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["handleResult"]);
</script>

<style scoped>
.result-list {
  height: 225px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  border-top: 1px solid rgb(182, 187, 189);
  border-bottom: 1px solid rgb(182, 187, 189);
}

.result-list:last-of-type {
  border-bottom: none;
}

.result-list__image,
.result-list__image > img {
  height: 100%;
  width: 150px;
}

.result-list__image > img {
  border-radius: 7.5px;
}

.result-list:hover {
  background-color: rgb(83, 85, 85);
}

.result-title {
  font-weight: 600;
  display: inline-block;
  word-wrap: break-word;
  line-height: 1.3rem;
  font-size: 1.5rem;
  padding-right: 3.5px;
}

/* Media Queries */
@media screen and (max-width: 700px) {
  .result-list {
    height: 230px;
  }

  .result-list__image,
  .result-list__image > img {
    height: 100%;
    width: 180px;
  }
}

@media screen and (max-width: 650px) {
  .result-title {
    font-size: calc(1.35rem - 25%);
  }
}

@media screen and (max-width: 400px) {
  .result-list {
    height: 200px;
  }

  .result-list__image,
  .result-list__image > img {
    height: 100%;
    width: 150px;
  }

  .result-title {
    font-size: calc(1.25rem - 25%);
  }
}

@media screen and (max-width: 300px) {
  .result-title {
    font-size: calc(1.125rem - 15%);
  }
}
</style>
