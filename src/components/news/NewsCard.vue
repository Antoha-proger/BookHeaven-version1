<script setup>
const props = defineProps(['imageURL', 'title', 'author'])
</script>

<template>
  <article class="news-card">
    <div class="news-card__top">
      <img :src="imageURL" class="news-card__image" alt="" width="470" height="200" />
    </div>
    <div class="news-card__bottom">
      <h3 class="news-card__title">{{ title }}</h3>
      <p class="news-card__author">{{ author }}</p>
      <p class="news-card__more">Подробнее</p>
    </div>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.news-card
    height: 350px
    width: 500px
    border: 2px solid $base-brown-color
    border-radius: 10px
    background-color: #fff
    padding: 10px
    margin-bottom: 35px
    // color: $base-brown-color
    box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.4)

    &__image
      border-top-left-radius: 10px
      border-top-right-radius: 10px
      object-fit: cover
      object-position: center

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
        // max-width: 470px
        overflow: hidden
        text-overflow: ellipsis
        white-space: wrap

    &__more
      text-align: right
      color: #A1A1A1
      font-size: 18px
      font-weight: 600
</style>
