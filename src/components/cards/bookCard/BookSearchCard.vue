<script setup>
import { useBookStore } from '@/stores/bookStore'

const props = defineProps(['title', 'author', 'imgLink'])

const booksStore = useBookStore()
</script>

<template>
  <article class="book-search-card">
    <div class="book-search-card__image">
      <img :src="imgLink" width="200" height="300" alt="" />
    </div>
    <div class="book-search-card__book-descr">
      <h4 class="book-search-card__title">{{ title }}</h4>
      <p class="book-search-card__author">{{ author }}</p>
      <div class="book-search-card__bottom">
        <button class="book-search-card__more" @click="booksStore.openBooksModalWindow">
          Подробнее
        </button>
        <img src="@/assets/icons/plusIcon.svg" alt="" width="18" height="18" />
      </div>
    </div>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.book-search-card
    display: flex
    flex-direction: column
    max-width: 200px
    margin-bottom: 50px
    max-height: 430px
    transition: 0.3s
    &:hover
      transform: translateY(-10px)
      -webkit-box-shadow: 9px 10px 8px 0px rgba(34, 60, 80, 0.2)
      -moz-box-shadow: 9px 10px 8px 0px rgba(34, 60, 80, 0.2)
      box-shadow: 9px 10px 8px 0px rgba(34, 60, 80, 0.2)
    &__image
        margin-bottom: 15px
        img
            width: 200px
            height: 300px
    &__book-descr
      max-width: 200px
    &__title
      font-weight: normal
      font-size: 18px
      margin-bottom: 5px
      color: $base-brown-color
      max-height: 30px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    &__author
      color: #A1A1A1
      margin-bottom: 15px
      max-height: 20px
      overflow: hidden
    &__bottom
      display: flex
      justify-content: space-between
      align-items: center
      max-height: 30px
      overflow: hidden
      padding: 0 5px
      margin-bottom: 10px
    &__more
      font-size: 18px
      color: $base-brown-color
      background: transparent
      border: none
      cursor: pointer
      &:hover
        color: #000
</style>
