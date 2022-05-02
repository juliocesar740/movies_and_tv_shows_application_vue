<template>
  <div class="slider-carousel-loading">
    <div class="movie-carousel-loading" ref="movie_carousel">
      <div class="movie-poster-loading"></div>
      <div class="movie-info-loading">
        <div class="skeleton-loading"></div>
        <div class="skeleton-loading skeleton-loading__md"></div>
        <div class="skeleton-loading skeleton-loading__md"></div>
        <div class="skeleton-loading skeleton-loading__sm"></div>
        <div class="skeleton-loading skeleton-loading__sm"></div>
        <div class="skeleton-loading skeleton-loading__sm"></div>
        <div class="skeleton-loading skeleton-loading__btn"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.slider-carousel-loading {
  position: relative;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition: 250ms ease;
}

.movie-carousel-loading {
  position: relative;
  transform: translateX(0px);
  z-index: 10;
  display: flex;
  flex-direction: row;
  transition: 400ms ease;
  height: 350px;
  width: 100%;
}

.movie-poster-loading {
  width: 250px;
  height: 100%;
  background-color: rgb(76, 81, 85);
}

.movie-info-loading {
  position: relative;
  z-index: 15;
  background: rgb(50, 54, 58);
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 15px;
  gap: 25px;
}

.skeleton-loading {
  width: 90%;
  height: 30px;
  background-color: rgb(72, 76, 79);
}

.skeleton-loading__md {
  width: 50%;
  height: 18px;
}

.skeleton-loading__sm {
  width: 90%;
  height: 15px;
}

.skeleton-loading__btn {
  width: 170px;
  height: 30px;
}

/* Media Queries */
@media screen and (max-width: 800px) {
  .movie-carousel {
    height: 400px;
  }
  .movie-poster {
    width: 250px;
  }
  .movie-info {
    width: 350px;
  }
  #overview {
    font-size: 18px;
    line-height: 1.5rem;
  }
  .movie-info a {
    margin-top: 15px;
  }
}
@media screen and (max-width: 720px) {
  .movie-carousel-loading {
    height: 375px;
  }
  .movie-poster-loading {
    width: 200px;
  }
  .movie-info-loading {
    width: 300px;
  }
}

@media screen and (max-width: 605px) {
  .movie-carousel-loading {
    height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .movie-poster-loading {
    height: 280px;
    width: 270px;
  }

  .movie-info-loading {
    height: 325px;
    width: 270px;
    padding: 15.75px 7.5px;
    gap: 20px;
  }
}

@media screen and (max-width: 400px) {
  .movie-poster-loading {
    height: 300px;
    width: calc(300px - 8.5%);
  }
  .movie-info-loading {
    width: calc(300px - 8.5%);
  }
}

@media screen and (max-width: 370px) {
  .movie-poster-loading {
    width: calc(250px - 8.5%);
  }
  .movie-info-loading {
    width: calc(250px - 8.5%);
  }
}
@media screen and (max-width: 320px) {
  .movie-poster-loading {
    width: 200px;
  }
  .movie-info-loading {
    height: 400px;
    width: 200px;
  }
}
</style>
