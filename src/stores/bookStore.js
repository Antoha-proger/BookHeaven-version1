import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {
  const books = ref([])

  async function getBooks(searchBy, searchQuery) {
    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+${searchBy}&keyes&key=AIzaSyBUXuvD2tfBcGxrZ79D-gV3Co-Ity1sSGI`
    )

    let jsonRes = res.json()
    console.log(jsonRes)
  }

  return {
    books,
    getBooks
  }
})
