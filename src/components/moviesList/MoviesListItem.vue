<template>
  <div class="movies-list-item">
    <div class="movies-list-item__content">
      <a href="#" class="movies-list-item__link">
        <picture class="movies-list-item__picture">
          <source srcset="@/assets/images/poster.png" type="image/webp" />
          <img
            alt="poster"
            src="@/assets/images/poster.png"
            class="movies-list-item__poster"
          />
        </picture>
      </a>
      <div class="movies-list-item__description">
        <p class="movies-list-item__name">
          <span class="movies-list-item__caption">How I Met Your Mother</span>
        </p>
        <p
          v-if="isWatched"
          class="movies-list-item__status movies-list-item__status"
        >
          <i class="pi pi-eye"></i>
          <span class="movies-list-item__text">Просмотрено</span>
        </p>
      </div>
      <button type="button" class="movies-list-item__rating">
        <i class="pi pi-star movies-list-item__favorite"></i>
        <span class="movies-list-item__points">6.8</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const isWatched = ref(true)
</script>

<style scoped lang="scss">
  @import '@/components/moviesList/styles/moviesListItem/movies-list-item';
</style>
