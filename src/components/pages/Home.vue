<script setup>
import Navigation from '@/components/Navigation/Navigation.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'
import BookCard from '@/components/cards/bookCard/BookCard.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import { useRootStore } from '@/stores/store'
import { onBeforeMount } from 'vue'
import { getAllNews } from '@/services/news/news'

const store = useRootStore()

onBeforeMount(async () => {
  store.news = await getAllNews()
})

// console.log(store.news)
</script>

<template>
  <Navigation />
  <main>
    <BookCard />

    <NewsBlock />
  </main>
  <FooterBlock />
</template>

<style lang="sass">
@import '@/assets/main.scss'

main
  display: flex
  flex-direction: column
  row-gap: 100px
  &__container
    display: flex
    flex-direction: column
    row-gap: 100px
</style>
