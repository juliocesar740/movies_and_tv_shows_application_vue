<template>
  <Suspense>
    <!-- Main Content -->
    <template #default>
      <div class="carousel-cointainer">
        <!-- slide-carousel -->
        <div class="slider-carousel-container">
          <SliderCarousel :position="position" ref="carousel_component" />
          <div class="slider-arrow">
            <ArrowContainer
              @right-arrow-event="handleArrowEvent"
              @left-arrow-event="handleArrowEvent"
            />
          </div>
        </div>
      </div>
    </template>
    <!-- loading state -->
    <template #fallback>
      <div class="carousel-cointainer">
        <div class="slider-carousel-container">
          <!-- slide-carousel -->
          <SliderCarouselLoading />
        </div>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import SliderCarousel from "./SliderCarousel.vue";
import ArrowContainer from "./ArrowContainer.vue";
import { ref } from "@vue/reactivity";
import { onMounted, onUpdated } from "@vue/runtime-core";
import handleArrow from "../../../composables/functions/components/handleArrow";
import SliderCarouselLoading from "./SliderCarouselLoading.vue";

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
  height: 350px;
  overflow: visible;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.slider-carousel-container {
  height: 100%;
  width: 700px;
}

.slider-arrow {
  position: absolute;
  top: 0;
  width: 700px;
  max-width: 100%;
  height: 100%;
}

/* Media Queries */
@media screen and (max-width: 800px) {
  .carousel-cointainer {
    height: 400px;
  }
  .slider-carousel-container,
  .slider-arrow {
    width: 600px;
  }
}

@media screen and (max-width: 720px) {
  .carousel-cointainer {
    height: 375px;
  }
  .slider-carousel-container,
  .slider-arrow {
    width: 500px;
  }
}

@media screen and (max-width: 605px) {
  .carousel-cointainer {
    position: relative;
    height: 600px;
  }
  .slider-carousel-container {
    width: 300px;
  }
  .slider-arrow {
    width: 300px;
  }
}

@media screen and (max-width: 400px) {
  .slider-carousel-container {
    width: calc(320px - 8.5%);
  }
  .slider-arrow {
    width: calc(320px - 8.5%);
  }
}

@media screen and (max-width: 370px) {
  .slider-carousel-container {
    width: calc(250px - 8.5%);
  }
  .slider-arrow {
    width: calc(250px - 8.5%);
  }
}

@media screen and (max-width: 320px) {
  .slider-carousel-container {
    width: 200px;
  }
  .slider-arrow {
    width: 200px;
  }
}
</style>
