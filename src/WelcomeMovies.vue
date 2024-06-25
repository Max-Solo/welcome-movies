<template>
  <div class="welcome-movies">
    <Aside class="welcome-movies__aside" />
    <div class="welcome-movies__body">
      <Header />
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
  import Header from '@/components/header/Header.vue'
  import Aside from '@/components/aside/Aside.vue'
  import { onMounted } from 'vue'
  import { checkWebp } from '@/utils/checkWebp'

  onMounted(checkWebp)
</script>

<style lang="scss">
  @import 'assets/styles/global.scss';
  @import '@/styles/welcome-movies';
</style>
