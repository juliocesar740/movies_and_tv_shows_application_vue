<template>
  <div class="cast-loading">
    <h2 style="margin: 0 25px; padding-top: 10px">Stars</h2>
    <div class="cast-loading-container">
      <div class="skeleton-loading-card" v-for="i in 6" :key="i"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.cast-loading {
  width: 95%;
  margin: 30px auto;
  background-color: rgba(24, 33, 43, 0.904);
}

.cast-loading-container {
  width: 100%;
  margin-top: 3.5px;
  padding: 25px 20px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.skeleton-loading-card {
  width: 275px;
  height: 285px;
  background-color: rgb(88, 95, 99);
  border-radius: 13px;
}
</style>
