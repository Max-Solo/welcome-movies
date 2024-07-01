<template>
  <section class="aside">
    <div class="aside__wrapper">
      <div class="aside__logo aside-logo">
        <img :src="getImageUrl('logo', 'svg')" alt="logo" class="aside-logo__ico" />
        <p class="aside-logo__description">
          <span class="aside-logo__text aside-logo__text--purple">Welcome</span>
          <span class="aside-logo__text aside-logo__text--blue">Movies</span>
        </p>
      </div>
      <nav class="aside__menu">
        <li class="aside__item">
          <RouterLink to="/" class="aside__link">
            <i class="aside__ico pi pi-home"></i>
            <span class="aside__span">Главная</span>
          </RouterLink>
        </li>
        <li class="aside__item">
          <RouterLink to="/favorites" class="aside__link">
            <i class="aside__ico pi pi-heart"></i>
            <span class="aside__span">Избранное</span>
          </RouterLink>
        </li>
        <li class="aside__item">
          <a href="#" class="aside__link">
            <i class="aside__ico pi pi-bolt"></i>
            <span class="aside__span">Популярное</span>
          </a>
        </li>
        <li class="aside__item">
          <a href="#" class="aside__link">
            <i class="aside__ico pi pi-calendar-clock"></i>
            <span class="aside__span">Скоро</span>
          </a>
        </li>
      </nav>
      <button class="aside__button">
        <i class="aside__ico pi pi-sign-out"></i>
        <span class="aside__span">Выход</span>
      </button>
    </div>
    <button class="aside__close">
      <i class="aside__close-ico pi pi-times"></i>
    </button>
  </section>
  <div class="aside__overlay"></div>
</template>

<script setup lang="ts">
  import { getImageUrl } from '@/utils/getImageUrl'
  import { useIsMobileStore } from '@/stores/isMobile'
  import { storeToRefs } from 'pinia'

  const store = useIsMobileStore()
  const { isMobile } = storeToRefs(store)
</script>

<style scoped lang="scss">
  @import '@/components/aside/styles/aside';
</style>
