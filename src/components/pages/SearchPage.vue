<script setup>
import Navigation from '../Navigation/Navigation.vue'
import FooterBlock from '../FooterBlock.vue'
import SearchBlock from '../SearchBlock.vue'
import BookSearchCard from '../cards/bookCard/BookSearchCard.vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()
</script>

<template>
  <div class="wrapper">
    <Navigation />
    <main>
      <SearchBlock />
      <div class="search-content container">
        <BookSearchCard
          v-for="(items, i) of bookStore.books"
          :key="i"
          :title="items.title"
          :author="items.author[0]"
          :imgLink="items.image"
        />
      </div>
    </main>
    <FooterBlock />
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.wrapper
  display: grid
  grid-template-rows: auto 1fr auto
  min-height: 100%

.nav
    margin-bottom: 50px

.search-content
  min-height: 700px
  padding-top: 50px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  column-gap: 100px
  row-gap: 30px
</style>
