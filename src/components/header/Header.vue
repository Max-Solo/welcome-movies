<template>
  <section class="header">
    <nav class="header__menu">
      <li class="header__item">
        <a class="header__link" href="#">Фильмы</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="#">Сериалы</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="#">Тв шоу</a>
      </li>
    </nav>
    <ul class="header__actions">
      <li class="header__element">
        <button class="header__button">
          <i class="pi pi-bell"></i>
        </button>
      </li>
      <li class="header__element">
        <button class="header__button">
          <span class="header__span">Вход/Регистрация</span>
          <i class="pi pi-sign-in"></i>
        </button>
      </li>
      <li v-if="isMobile" class="header__element">
        <button class="header__button">
          <i class="pi pi-bars"></i>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import { useIsMobileStore } from '@/stores/isMobile'
  import { storeToRefs } from 'pinia'

  const store = useIsMobileStore()
  const { isMobile } = storeToRefs(store)
</script>

<style scoped lang="scss">
  @import '@/components/header/styles/header';
</style>
