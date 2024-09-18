<script setup>
import Header from '../Header/Header.vue'
import FooterBlock from '../Footer/FooterBlock.vue'
import SearchBlock from '../BooksSearch/SearchBlock.vue'
import BookSearchCard from '../cards/bookCard/BookSearchCard.vue'
import BookModal from '../modal/BooksModal/BookModal.vue'
import { useBookStore } from '@/stores/bookStore'
import { VueSpinner } from 'vue3-spinners'

const bookStore = useBookStore()
</script>

<template>
  <div class="wrapper">
    <Header />
    <main>
      <SearchBlock />
      <div class="lets-search container" v-if="!bookStore.isBooksFound && !bookStore.isLoaderShow">
        <img class="lets-search__img" src="@/assets/image/MainBooks.png" alt="" width="400" />
        <h3 class="lets-search__title">Здесь пока ничего нет</h3>
      </div>
      <div class="loader-container container" v-else-if="bookStore.isLoaderShow">
        <VueSpinner size="40" color="#4e4035" />
      </div>
      <div class="search-content container" v-else>
        <BookSearchCard
          v-for="(items, i) of bookStore.books"
          :key="i"
          :id="items.id"
          :title="items.title"
          :author="items.author[0]"
          :imgLink="items.image"
        />
      </div>
    </main>
    <FooterBlock />
    <BookModal v-if="bookStore.isBooksModalShow" />
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

.loader-container
  min-height: 350px

.lets-search
  display: flex
  flex-direction: column
  align-items: center
  row-gap: 50px
  padding-top: 50px
  margin-bottom: 100px
  &__title
    font-size: 32px
    padding-left: 70px
    // text-align: right
    color: $base-brown-color
</style>
