import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  // Список объектов с новостями
  let news = ref([])

  const isNewsModalShow = ref(false)

  const isLoaderShow = ref(false)

  // Выбранная новость
  let selectedNew = ref({})

  function openNewsModalWindow(event) {
    isNewsModalShow.value = true
    const newId = event.target.id
    selectedNew.value = news.value[newId]
  }

  function closeNewsModalWindow() {
    isNewsModalShow.value = false
  }

  async function getAllNews() {
    isLoaderShow.value = true
    let articles = await fetch(
      'https://newsapi.org/v2/everything?q=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20OR%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8&searchIn=title&sortBy=publishedAt&language=ru&apiKey=8054b29d619f4696aaa3a0c77f34d4ab'
    )
    let formated_articles = await articles.json()
    let all_articles = [...formated_articles.articles]

    news.value = formatNewsArray(all_articles)
    isLoaderShow.value = false
  }

  function formatNewsArray(arr) {
    let correct_array = arr.filter((item) => item.urlToImage !== null && item.author !== null)

    return correct_array.slice(0, 20)
  }

  return {
    news,
    isLoaderShow,
    selectedNew,
    isNewsModalShow,
    openNewsModalWindow,
    closeNewsModalWindow,
    getAllNews
  }
})
