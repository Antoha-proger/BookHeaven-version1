<script setup>
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()

const props = defineProps(['imageURL', 'title', 'author', 'newId'])
</script>

<template>
  <article class="news-card">
    <div class="news-card__top">
      <img :src="imageURL" class="news-card__image" alt="" width="470" height="200" />
    </div>
    <div class="news-card__bottom">
      <h3 class="news-card__title">{{ title }}</h3>
      <p class="news-card__author">{{ author }}</p>
      <button @click="newsStore.openNewsModalWindow" class="news-card__more" :id="newId">
        Подробнее
      </button>
    </div>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.news-card
    min-height: 350px
    width: 500px
    border: 2px solid $base-brown-color
    border-radius: 10px
    background-color: #fff
    padding: 10px
    margin-bottom: 35px
    box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.4)

    &__image
      border-top-left-radius: 10px
      border-top-right-radius: 10px
      object-fit: cover
      object-position: center

    &__bottom
      display: flex
      flex-direction: column

    &__author
        font-size: 20px
        margin-bottom: 15px
        margin-bottom: 10px

    &__title
        color: $base-orange-color
        font-size: 20px
        font-weight: 600
        margin-bottom: 10px
        height: 60px
        overflow: hidden
        text-overflow: ellipsis
        white-space: wrap

    &__more
      text-align: right
      color: #A1A1A1
      font-size: 18px
      border: none
      background-color: transparent
      cursor: pointer
</style>
