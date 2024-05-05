<template>
  <section class="aside">
    <div class="aside__logo aside-logo">
      <img :src="getImageUrl('logo', 'svg')" alt="logo" class="aside-logo__ico" />
      <p class="aside-logo__description">
        <span class="aside-logo__text aside-logo__text--purple">Welcome</span>
        <span class="aside-logo__text aside-logo__text--blue">Movies</span>
      </p>
    </div>
    <nav class="aside__menu">
      <li class="aside__item">
        <a href="#" class="aside__link">
          <i class="pi pi-home"></i>
          <span class="aside__span">Главная</span>
        </a>
      </li>
      <li class="aside__item">
        <a href="#" class="aside__link">
          <i class="pi pi-heart"></i>
          <span class="aside__span">Избранное</span>
        </a>
      </li>
      <li class="aside__item">
        <a href="#" class="aside__link">
          <i class="pi pi-bolt"></i>
          <span class="aside__span">Популярное</span>
        </a>
      </li>
      <li class="aside__item">
        <a href="#" class="aside__link">
          <i class="pi pi-calendar-clock"></i>
          <span class="aside__span">Скоро</span>
        </a>
      </li>
    </nav>
    <button class="aside__item">
      <a href="#" class="aside__link">
        <i class="pi pi-sliders-v"></i>
        <span class="aside__span">Выход</span>
      </a>
    </button>
  </section>
</template>

<script setup lang="ts">
  import { getImageUrl } from '@/utils/getImageUrl'
</script>

<style scoped lang="scss">
  @import '@/components/aside/styles/aside';
</style>
