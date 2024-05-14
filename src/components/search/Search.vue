<template>
  <section class="search" :class="searchClasses">
    <div class="search__body">
      <label for="search">
        <i class="search__ico pi pi-search"></i>
      </label>
      <input
        placeholder="Ищите, что нравится"
        type="text"
        id="search"
        @focus="onFocusBlur"
        @blur="onFocusBlur"
        autocomplete="off"
        v-model="inputValue"
        class="search__input"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref, unref } from 'vue'
  import { EventTypes } from '@/types/enums/eventTypes'

  const inputValue = ref('')

  const isFocused = ref(false)
  const onFocusBlur = (event: FocusEvent) => {
    isFocused.value = event.type === EventTypes.FOCUS
  }

  const searchClasses = computed(() => ({
    'search--is-focus': unref(isFocused)
  }))
</script>

<style scoped lang="scss">
  @import '@/components/search/styles/search';
</style>
