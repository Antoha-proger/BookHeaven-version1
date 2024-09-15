<script setup>
const props = defineProps(['title', 'author', 'imgLink'])
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
        <p class="book-search-card__more">Подробнее</p>
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
    &__author
      color: #A1A1A1
      margin-bottom: 15px
    &__bottom
      display: flex
      justify-content: space-between
      align-items: center
    &__more
      font-size: 18px
      color: $base-brown-color
</style>
