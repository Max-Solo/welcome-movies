<template>
  <h1 class="welcome-movies__title">Вышли недавно</h1>
  <Search class="welcome-movies__search" />
  <MoviesList />
</template>

<script setup lang="ts">
  import MoviesList from '@/components/moviesList/MoviesList.vue'
  import Search from '@/components/search/Search.vue'
</script>
