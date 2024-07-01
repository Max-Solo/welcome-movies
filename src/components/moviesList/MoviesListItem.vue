<template>
  <div class="movies-list-item">
    <div class="movies-list-item__content">
      <a href="#" class="movies-list-item__link">
        <picture class="movies-list-item__picture">
          <source srcset="@/assets/images/poster.png" type="image/webp" />
          <img alt="poster" src="@/assets/images/poster.png" class="movies-list-item__poster" />
        </picture>
      </a>
      <div class="movies-list-item__description">
        <p class="movies-list-item__name">
          <span class="movies-list-item__caption">How I Met Your Mother</span>
        </p>
        <p v-if="isWatched" class="movies-list-item__status movies-list-item__status">
          <i class="pi pi-eye"></i>
          <span class="movies-list-item__text">Просмотрено</span>
        </p>
        <p v-if="isNoComeOut" class="movies-list-item__status movies-list-item__status">
          <i class="pi pi-clock"></i>
          <span class="movies-list-item__text"> Скоро </span>
        </p>
      </div>
      <button
        @click="addToFavorite"
        v-tooltip="ratingData.tooltip"
        type="button"
        class="movies-list-item__rating"
      >
        <i class="pi movies-list-item__favorite" :class="ratingData.ico"> </i>
        <span class="movies-list-item__points">6.8</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref, unref } from 'vue'

  const isWatched = ref(false)
  const isNoComeOut = ref(false)
  const isFavorite = ref(true) // TODO триггер добавления в избранное

  function addToFavorite() {
    isFavorite.value = !isFavorite.value
  }

  const ratingData = computed(() =>
    !unref(isFavorite)
      ? {
          tooltip: 'Добавить в избранное',
          ico: 'pi-star'
        }
      : {
          tooltip: 'Убрать из избранного',
          ico: 'pi-star-fill'
        }
  )
</script>

<style scoped lang="scss">
  @import '@/components/moviesList/styles/moviesListItem/movies-list-item';
</style>
