import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {
  const books = ref([])
  const isBooksFound = ref(false)
  const isLoaderShow = ref(false)
  const isBooksModalShow = ref(false)
  const selectedBook = ref()

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

    for (let i of selectItems) {
      let k = i['volumeInfo']
      if (k.imageLinks && k.title && k.authors) {
        books.value.push({
          id: i.id,
          title: k.title,
          author: k.authors,
          image: k.imageLinks.thumbnail
        })
      }
    }

    isBooksFound.value = true
    isLoaderShow.value = false
    console.log(books)
  }

  async function openBooksModalWindow(event) {
    const selectBookId = event.target.id
    await getCurrentBook(selectBookId)
    isBooksModalShow.value = true
  }

  function closeBooksModalWindow() {
    isBooksModalShow.value = false
  }

  async function getCurrentBook(id) {
    const apiAnswer = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    const answerToJson = await apiAnswer.json()
    const answerVolInfo = await answerToJson['volumeInfo']

    if (
      answerVolInfo.imageLinks &&
      answerVolInfo.title &&
      answerVolInfo.authors &&
      answerVolInfo.industryIdentifiers
    ) {
      selectedBook.value = {
        id: answerVolInfo.id,
        title: answerVolInfo.title,
        author: answerVolInfo.authors,
        img: answerVolInfo.imageLinks.thumbnail,
        description: answerVolInfo.description,
        isbn: answerVolInfo.industryIdentifiers[0].identifier,
        pageCount: answerVolInfo.pageCount,
        publisher: answerVolInfo.publisher
      }
    }

    console.log(selectedBook.title)
  }

  return {
    books,
    isBooksFound,
    isLoaderShow,
    isBooksModalShow,
    selectedBook,
    getBooks,
    openBooksModalWindow,
    closeBooksModalWindow
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
