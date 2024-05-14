<template>
  <section class="movies-list">
    <MoviesListItem />
  </section>
</template>
<script setup lang="ts">
  import MoviesListItem from '@/components/moviesList/MoviesListItem.vue'
</script>

<style scoped lang="scss">
  @import '@/components/moviesList/styles/moviesList/movies-list';
</style>
