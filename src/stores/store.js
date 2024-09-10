import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
  let news = ref([])

  let isModalShow = false

  function getNews() {}

  return {
    news,
    isModalShow,
    getNews
  }
})
