<template>
  <div class="welcome-movies">
    <Aside class="welcome-movies__aside" />
    <div class="welcome-movies__body">
      <Header />
      <h1 class="welcome-movies__title">Вышли недавно</h1>
      <Search class="welcome-movies__search"/>
      <MoviesList />
    </div>
  </div>
</template>
<script setup lang="ts">
  import Header from '@/components/header/Header.vue'
  import Aside from '@/components/aside/Aside.vue'
  import { onMounted } from 'vue'
  import { checkWebp } from '@/utils/checkWebp'
  import Search from '@/components/search/Search.vue'
  import MoviesList from '@/components/moviesList/MoviesList.vue'

  onMounted(checkWebp)
</script>

<style scoped lang="scss">
  @import '@/styles/welcome-movies';
</style>

<style>
  @import 'assets/styles/global.scss';
</style>
