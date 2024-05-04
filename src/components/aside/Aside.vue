<template>
  <section class="aside">
    <div class="aside__logo aside-logo">
      <img :src="getImageUrl('logo', 'svg')" alt="logo" class="aside-logo__ico" />
      <p class="aside-logo__description">
        <span class="aside-logo__text aside-logo__text--purple">Welcome</span>
        <span class="aside-logo__text aside-logo__text--blue">Movies</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { getImageUrl } from '@/utils/getImageUrl'
</script>

<style scoped lang="scss"></style>
