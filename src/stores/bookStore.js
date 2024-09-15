import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {
  const books = ref([])
  const isBooksFound = ref(false)
  const isLoaderShow = ref(false)

  async function getBooks(searchBy, searchQuery) {
    isLoaderShow.value = true
    books.value = []
    const book_words = searchQuery.split(' ')
    const parsed_book = book_words.join('+')
    const book_name = parsed_book

    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book_name}+${searchBy}&keyes&maxResults=40&key=AIzaSyBUXuvD2tfBcGxrZ79D-gV3Co-Ity1sSGI`
    )

    let jsonRes = await res.json()
    let selectItems = await jsonRes['items']
    // console.log(selectItems)

    // let f = []

    // // let g = Object.fromEntries(
    // //   Object.entries(selectItems).filter(item => [])
    // // )

    for (let i of selectItems) {
      let k = i['volumeInfo']
      //   console.log(k)
      if (k.imageLinks && k.title && k.authors) {
        books.value.push({
          title: k.title,
          author: k.authors,
          image: k.imageLinks.thumbnail
        })
      }
    }

    isBooksFound.value = true
    isLoaderShow.value = false
    // console.log(this.books)

    // https://openlibrary.org/search.json?q=the+lord+of+the+rings

    //   const book_words = searchQuery.split(' ')
    //   const parsed_book = book_words.join('+')
    //   const book_name = parsed_book

    //   const headers = new Headers({
    //     'User-Agent': 'BookHeaven (kobeleva166@gmail.com)'
    //   })

    //   const options = {
    //     method: 'GET',
    //     headers: headers
    //   }
    //   console.log(book_name)
    //   const url = `https://openlibrary.org/search.json?${searchBy}=${book_name}&limit=12&fields=title,author_name,cover_edition_key,number_of_pages_median,publisher,isbn&language=rus&sort=editions`

    //   const res = await fetch(url, options)
    //   const jres = await res.json()

    //   this.books = await jres.docs

    //   // console.log(this.books, searchBy)

    //   for (let i of books.value) {
    //     i.imageLink = `https://covers.openlibrary.org/b/olid/${i.cover_edition_key}.jpg`
    //   }
    //   console.log(this.books)
    //   // https://covers.openlibrary.org/a/olid/OL23919A-M.jpg
  }

  return {
    books,
    isBooksFound,
    isLoaderShow,
    getBooks
  }
})

/*

Название книги - title
Автор - author_name
Обложка - https://covers.openlibrary.org/b/olid/OL50527399M.jpg edition_key
Количество страниц - number_of_pages_median
Издательство - publisher
ISBN - isbn

*/
