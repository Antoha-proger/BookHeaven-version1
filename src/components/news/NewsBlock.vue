<script setup>
import NewsCard from '../cards/NewCard/NewsCard.vue'
import { useNewsStore } from '@/stores/newsStore'
import { register } from 'swiper/element/bundle'
import { VueSpinner } from 'vue3-spinners'

register()

const newsStore = useNewsStore()
let newsId = 0
</script>

<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Books News</h2>
      <div class="news__content">
        <div class="loader-container" v-show="newsStore.isLoaderShow">
          <VueSpinner size="40" color="#4e4035" />
        </div>

        <swiper-container
          v-show="!newsStore.isLoaderShow"
          :slides-per-view="2.2"
          :space-between="20"
          :scrollbar="{
            init: true
          }"
          :autoplay="{
            delay: 5000
          }"
        >
          <swiper-slide v-for="(items, key) in newsStore.news" :key="key">
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

    &__content
      min-height: 400px


.loader-container
  width: 100%
  min-height: inherit
  display: flex
  justify-content: center
  align-items: center
</style>
