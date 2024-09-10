import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
  // Список объектов с новостями
  let news = ref([])

  // Переменная, отвечающая за открытие и закрытие модального окна с новостями
  let isNewsModalShow = ref(false)

  // Выбранная новость
  let selectedNew = ref({})

  return {
    news,
    isNewsModalShow,
    selectedNew
  }
})
