<template>
  <div class="arrow-container">
    <i
      class="fa-solid fa-angle-left arrow-left"
      @click="$emit('leftArrowEvent', 'left')"
    ></i>
    <i
      class="fa-solid fa-angle-right arrow-right"
      @click="$emit('rightArrowEvent', 'right')"
    ></i>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["leftArrowEvent", "rightArrowEvent"]);
</script>

<style scoped>
.arrow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

.arrow-left {
  position: absolute;
  left: -50px;
  top: 175px;
  font-size: 3.05rem;
  cursor: pointer;
}

.arrow-right {
  position: absolute;
  right: -50px;
  top: 175px;
  font-size: 3.05rem;
  cursor: pointer;
}

/* Media Queries */

@media screen and (max-width: 750px) {
  .arrow-left {
    left: -3.5px;
  }
  .arrow-right {
    right: -3.5px;
  }
}

@media screen and (max-width: 670px) {
  .arrow-left,
  .arrow-right {
    top: 185px;
  }
}

@media screen and (max-width: 570px) {
  .arrow-left {
    top: 245px;
    font-size: 2.75rem;
  }
  .arrow-right {
    top: 245px;
    font-size: 2.75rem;
  }
}
@media screen and (max-width: 425px) {
  .arrow-left {
    font-size: 2.25rem;
  }
  .arrow-right {
    font-size: 2.25rem;
  }
}
@media screen and (max-width: 300px) {
  .arrow-left {
    left: 7.5px;
    font-size: 2rem;
  }
  .arrow-right {
    right: 7.5px;
    font-size: 2rem;
  }
}
</style>
