<template>
  <div
    :class="`video-container ${trailer ? 'video-container__display' : ''} ${
      backgroundUnfocused ? 'video-container__unfocused' : ''
    }`"
  >
    <div class="iframe-container">
      <iframe
        ref="iframe"
        type="html/"
        width="420"
        height="315"
        :src="`https://www.youtube.com/embed/${official_trailer_id}?start=0&end=`"
      >
      </iframe>
      <div class="close-iframe" @click="$emit('toggleBtnWatch')">
        <i class="fas fa-close"></i>
      </div>
    </div>
  </div>
  <div class=""></div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  trailer: Boolean,
  official_trailer_id: String,
  backgroundUnfocused: Boolean,
});
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["toggleBtnWatch"]);
</script>

<style scoped>
@keyframes pop-up {
  0% {
    transform: translate(-50%, -50%) scale(0.5, 0.5);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: translate(-50%, -50%) scale(1, 1);
    opacity: 1;
    visibility: visible;
  }
}
.video-container {
  background-color: rgba(43, 55, 59, 0.849);
  display: none;
  overflow: hidden;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
}

.video-container__display {
  display: block;
}

.video-container__unfocused {
  opacity: 1;
}

.iframe-container {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5, 0.5);
  opacity: 0;
  visibility: hidden;
  animation: pop-up 250ms ease-in 0s 1 normal forwards;
  width: 950px;
  max-width: 100%;
}

.iframe-container::after {
  padding-top: 56.25%;
  display: block;
  content: "";
}

.iframe-container > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.close-iframe {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
  background-color: rgb(218, 22, 22);
  text-align: center;
  cursor: pointer;
}
.close-iframe > i {
  padding: 5px 10px;
  font-size: 1.5rem;
}
</style>
