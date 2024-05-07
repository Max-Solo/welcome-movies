<template>
  <section class="search">
    <h1 class="search__title">Вышли недавно</h1>
    <div class="search__body">
      <label for="search">
        <i class="search__ico pi pi-search"></i>
      </label>
      <input
        placeholder="Ищите, что нравится"
        type="text"
        id="search"
        autocomplete="off"
        ref="searchInput"
        v-model="inputValue"
        class="search__input"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const inputValue = ref('')
</script>

<style scoped lang="scss">
  @import '@/components/search/styles/search';
</style>
