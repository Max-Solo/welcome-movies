import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { MOBILE_SIZE } from '@/types/constants/common'

export const useIsMobileStore = defineStore('isMobile', () => {
  const { width } = useWindowSize()
  const isMobile = computed(() => width.value <= MOBILE_SIZE)

  return { isMobile }
})
