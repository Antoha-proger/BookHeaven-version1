<script setup>
import Header from '@/components/Header/Header.vue'
import FooterBlock from '@/components/Footer/FooterBlock.vue'
import BookProgressCard from '@/components/cards/bookCard/BookProgressCard.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import FeaturesBlock from '../features/FeaturesBlock.vue'
import NewModal from '../modal/newsModal/NewModal.vue'
import { useNewsStore } from '@/stores/newsStore'
import { onMounted } from 'vue'

const newsStore = useNewsStore()

onMounted(async () => {
  await newsStore.getAllNews()
})
</script>

<template>
  <Header />
  <main>
    <BookProgressCard />
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
