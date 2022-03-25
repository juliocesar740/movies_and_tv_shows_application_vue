<template>
  <div class="carousel-cointainer">
    <!-- slide-carousel -->
    <div class="slider-carousel-container">
      <SliderCarousel :position="position" ref="carousel_component" />
    </div>
    <div class="slider-arrow">
      <ArrowContainer
        @right-arrow-event="handleArrowEvent"
        @left-arrow-event="handleArrowEvent"
      />
    </div>
  </div>
</template>

<script setup>
import SliderCarousel from "./SliderCarousel.vue";
import ArrowContainer from "./ArrowContainer.vue";
import { ref } from "@vue/reactivity";
import { onMounted, onUpdated } from "@vue/runtime-core";
import handleArrow from "../../../composables/functions/components/handleArrow";

// eslint-disable-next-line no-unused-vars
const props = defineProps({ cancelCarousel: Boolean });

// template refs
const carousel_component = ref(null);

// Data
const numberOfClicks = ref(0);
const position = ref(0);
const last_position = ref(5);
const interval = ref(null);

// Functions

// It handles arrow click event
const handleArrowEvent = (direction) => {
  handleArrow({
    direction: direction,
    numberOfClicks: numberOfClicks,
    position: position,
    last_position: last_position,
    carousel_component: carousel_component,
  });
};

const destroyInterval = () => {
  // stops carousel loop
  clearInterval(interval.value);
};

onMounted(() => {
  // carousel loop
  interval.value = setInterval(() => {
    position.value++;
    if (position.value === last_position.value + 1) {
      position.value = 0;
    }
    numberOfClicks.value = 0;

    carousel_component.value.$refs.movie_carousel.classList.add(
      "movie-carousel-active"
    );
  }, 5000);
});

onUpdated(() => {
  // When the route is not on the home page anymore the carousel loop stops
  if (props.cancelCarousel) {
    destroyInterval();
  }
});
</script>

<style scoped>
.carousel-cointainer {
  position: relative;
  max-height: 400;
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.slider-carousel-container {
  height: 100%;
  width: 600px;
}

.slider-arrow {
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  max-width: 100%;
  height: 100%;
}

/* Media Queries */
@media screen and (max-width: 750px) {
  .slider-carousel-container {
    width: 500px;
  }
  .slider-arrow {
    width: 580px;
  }
}

@media screen and (max-width: 670px) {
  .slider-carousel-container {
    width: 450px;
  }
  .slider-arrow {
    width: 530px;
  }
}

@media screen and (max-width: 570px) {
  .carousel-cointainer {
    position: relative;
    height: 490px;
  }
  .slider-carousel-container {
    width: 270px;
  }
  .slider-arrow {
    width: 375px;
    transform: translate(-50%, 10px);
  }
}

@media screen and (max-width: 425px) {
  .slider-arrow {
    width: calc(370px - 11.5%);
  }
}

@media screen and (max-width: 360px) {
  .slider-arrow {
    width: calc(300px - 8.5%);
  }
  .slider-carousel-container {
    width: 200px;
  }
}
</style>
