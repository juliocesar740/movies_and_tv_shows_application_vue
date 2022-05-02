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
  top: 50%;
  transform: translateY(-50%);
  font-size: 3.05rem;
  cursor: pointer;
}

.arrow-right {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3.05rem;
  cursor: pointer;
}

/* Media Queries */

@media screen and (max-width: 850px) {
  .arrow-left {
    left: -40px;
    font-size: 2.95rem;
  }
  .arrow-right {
    right: -40px;
    font-size: 2.95rem;
  }
}

@media screen and (max-width: 570px) {
  .arrow-left {
    font-size: 2.75rem;
  }
  .arrow-right {
    font-size: 2.75rem;
  }
}
@media screen and (max-width: 425px) {
  .arrow-left {
    left: -35px;
  }
  .arrow-right {
    right: -35px;
  }
}

@media screen and (max-width: 370px) {
  .arrow-left {
    left: -40.75px;
    font-size: 2.25rem;
  }
  .arrow-right {
    right: -40.75px;
    font-size: 2.25rem;
  }
}

@media screen and (max-width: 320px) {
  .arrow-left {
    left: -32px;
    font-size: 2rem;
  }
  .arrow-right {
    right: -32px;
    font-size: 2rem;
  }
}
</style>
