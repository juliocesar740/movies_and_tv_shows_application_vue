<template>
  <div class="trending-visual-content">
    <img
      :src="
        'https://image.tmdb.org/t/p/original/' +
        trending_audiovisual_content.poster_path
      "
      alt=""
      srcset=""
    />
    <div class="trending-visual-content__info">
      <p>
        {{
          trending_audiovisual_content.title
            ? trending_audiovisual_content.title
            : trending_audiovisual_content.name
        }}
      </p>
      <router-link
        class="btn-get-info__blue"
        :to="{
          name: `${trending_audiovisual_content.media_type}`,
          params: { id: trending_audiovisual_content.id },
        }"
      >
        Get more details
      </router-link>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({ trending_audiovisual_content: Object });
</script>

<style scoped>
.trending-visual-content {
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 210px;
  height: 290px;
  justify-self: center;
  /* border: 1px solid red; */
}

.trending-visual-content:hover .trending-visual-content__info,
.trending-visual-content:active .trending-visual-content__info {
  z-index: 5;
  opacity: 1;
  visibility: visible;
  transform: translateX(0px);
}

.trending-visual-content__info {
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100px);
  /* border: 1px solid rgb(255, 208, 0); */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 150ms ease;
}

.trending-visual-content:hover img {
  opacity: 0.5;
}

.trending-visual-content img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 13.5px;
}

.btn-get-info__blue {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 170px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: rgb(34, 146, 221);
  transform: scale(1, 1);
  color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  text-align: center;
  transition: 250ms ease;
}
.btn-get-info__blue:hover {
  background-color: rgb(23, 119, 184);
  transform: scale(0.95, 0.95);
}

/* Media Queries */

@media screen and (max-width: 510px) {
  .trending-visual-content {
    width: 160px;
    height: 250px;
  }
  .btn-get-info__blue {
    width: 130px;
    height: 35px;
    font-size: 14.85px;
  }
}
@media screen and (max-width: 400px) {
  .btn-get-info__blue {
    width: 110px;
    height: 35px;
    font-size: 13.5px;
  }
  .trending-visual-content {
    width: 120px;
    height: 180px;
    margin: 0;
  }
}

@media screen and (max-width: 310px) {
  .btn-get-info__blue {
    width: 140px;
    height: 40px;
    font-size: 16.5px;
  }
  .trending-visual-content {
    width: 170px;
    height: 250px;
    margin: 0;
  }
}
</style>
