<script setup>
import Navigation from '@/components/Navigation/Navigation.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'
import BookCard from '@/components/cards/bookCard/BookCard.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import FeaturesBlock from '../features/FeaturesBlock.vue'
import NewModal from '../modal/newsModal/NewModal.vue'
import { useNewsStore } from '@/stores/newsStore'
import { onBeforeMount } from 'vue'

const newsStore = useNewsStore()

onBeforeMount(async () => {
  await newsStore.getAllNews()
})
</script>

<template>
  <Navigation />
  <main>
    <BookCard />
    <NewsBlock />
    <FeaturesBlock />
  </main>
  <FooterBlock />

  <NewModal v-if="newsStore.isNewsModalShow" />
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
