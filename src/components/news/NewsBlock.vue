<script setup>
import NewsCard from './NewsCard.vue'
import { useRootStore } from '@/stores/store'
import { register } from 'swiper/element/bundle'

register()

const store = useRootStore()
let newsId = 0
</script>

<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Books News</h2>
      <div class="news__content">
        <swiper-container
          :slides-per-view="2.2"
          :space-between="20"
          :grabCursor="true"
          :scrollbar="{
            init: true
          }"
          :autoplay="{
            delay: 5000
          }"
        >
          <swiper-slide v-for="(items, key) in store.news" :key="key">
            <NewsCard
              :imageURL="items.urlToImage"
              :title="items.title"
              :author="items.author"
              :newId="newsId++"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.news
    background-color: $base-body-color
    min-height: 600px
    padding-top: 50px

    &__title
        color: $base-brown-color
        font-weight: 600
        font-size: 36px
        margin-bottom: 55px
        text-align: center
        text-decoration: underline
        text-underline-offset: 10px
</style>
