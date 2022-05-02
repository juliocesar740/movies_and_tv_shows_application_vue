<template>
  <div class="tv-shows-container-loading">
    <div class="tv-shows-background-loading">
      <div class="tv-shows-info-loading">
        <div class="tv-shows-poster-loading">
          <div class="skeleton-loading skeleton-loading_card"></div>
          <div class="skeleton-loading skeleton-loading_sm"></div>
          <div class="skeleton-loading skeleton-loading_btn"></div>
        </div>
        <div class="flex-col">
          <div class="skeleton-loading skeleton-loading_lg"></div>
          <div
            class="skeleton-loading skeleton-loading_sm skeleton-loading_extended"
          ></div>
          <div
            class="skeleton-loading skeleton-loading_sm skeleton-loading_extended"
          ></div>
          <div
            class="skeleton-loading skeleton-loading_sm skeleton-loading_extended"
          ></div>
          <div
            class="skeleton-loading skeleton-loading_sm skeleton-loading_extended"
          ></div>
          <div class="skeleton-loading skeleton-loading_lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.tv-shows-background-loading {
  height: 500px;
  width: 100%;
  background-color: rgb(39, 41, 44);
  transform: translateY(-40px);
}

.tv-shows-info-loading {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 98.5%;
  margin: 0 auto;
  min-height: 95%;
  padding: 0px 15.75px;
  align-items: center;
  gap: 50px;
}

.tv-shows-poster-loading {
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-width: 225px;
}

.flex-col {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 1000px;
  gap: 12.5px;
  margin-bottom: 20px;
}

.skeleton-loading {
  background-color: rgb(88, 95, 99);
}

.skeleton-loading_sm {
  width: 175px;
  height: 20px;
}

.skeleton-loading_extended {
  width: calc(90% - 5px);
  height: 20px;
}

.skeleton-loading_lg {
  width: calc(90% - 5px);
  height: 38.75px;
}

.skeleton-loading_card {
  width: 225px;
  height: 300px;
  border-radius: 9.5px;
}

.skeleton-loading_btn {
  width: 175px;
  height: 35px;
  border-radius: 5px;
}

/* Media Queries */

@media screen and (max-width: 750px) {
  .tv-shows-background-loading {
    min-height: calc(600px + 10em);
  }
  .tv-shows-info-loading {
    flex-direction: column;
    padding: 27.5px 0;
  }
  .flex-col {
    width: 90%;
    margin: 0 auto;
    align-self: flex-start;
  }
  .skeleton-loading_extended {
    width: calc(100% - 5px);
    height: 20px;
  }

  .skeleton-loading_lg {
    width: calc(100% - 5px);
    height: 38.75px;
  }
}
</style>
