<script setup>
import ModalBack from '../ModalBack.vue'
import ModalButtonClose from '../ModalButtonClose.vue'
import { useBookStore } from '@/stores/bookStore'

const booksStore = useBookStore()
</script>

<template>
  <ModalBack>
    <div class="books-modal">
      <div class="books-modal__top">
        <div class="books-modal__image">
          <img :src="booksStore.selectedBook.img" alt="" width="150" height="225" />
        </div>
        <div class="books-modal__content">
          <h3 class="books-modal__title">{{ booksStore.selectedBook.title }}</h3>
          <p class="books-modal__author">{{ booksStore.selectedBook.author[0] }}</p>
          <div class="books-modal__descr">
            <p class="books-modal__descr-item">ISBN: {{ booksStore.selectedBook.isbn }}</p>
            <p class="books-modal__descr-item">
              Количество страниц: {{ booksStore.selectedBook.pageCount }}
            </p>
            <p class="books-modal__descr-item">
              Издательство: {{ booksStore.selectedBook.publisher }}
            </p>
          </div>
        </div>
        <ModalButtonClose @close="booksStore.closeBooksModalWindow" />
      </div>
      <div class="books-modal__bottom">
        <p class="books-modal__text">
          {{ booksStore.selectedBook.description }}
        </p>
        <p class="books-modal__add-to-collection">Добавить в коллекцию</p>
      </div>
    </div>
  </ModalBack>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.books-modal
    width: 800px
    height: 550px
    background-color: rgba(255, 255, 255, 1)
    border-radius: 20px
    z-index: 20
    padding: 50px
    &__top
      display: flex
      justify-content: space-between
      column-gap: 20px
      margin-bottom: 30px
    &__content
      display: flex
      flex-direction: column
      flex-grow: 1
      align-items: start
    &__title
      font-size: 20px
      margin-bottom: 10px
    &__author
      font-size: 16px
      color: #A1A1A1
      margin-bottom: 30px
    &__descr
      display: flex
      flex-direction: column
      row-gap: 5px
    &__bottom
      display: flex
      flex-direction: column
    &__text
      width: 680px
      height: 150px
      overflow: hidden
      overflow-y: scroll
      margin-bottom: 50px
    &__add-to-collection
      cursor: pointer
      color: $base-orange-color
      display: inline
      align-self: flex-end
      font-size: 18px
</style>
