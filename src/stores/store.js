import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
  let news = ref([])

  function getNews() {}

  return { news, getNews }
})
