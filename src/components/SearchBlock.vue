<script setup>
import { ref } from 'vue'
import SearchBy from './SearchBy.vue'
import InputField from './InputField.vue'
import SearchButton from './SearchButton.vue'
import { useBookStore } from '@/stores/bookStore'

const booksStore = useBookStore()

const searchBy = ref('')
const searchBook = ref('')
</script>

<template>
  <section class="search-block">
    <div class="container search-block__container">
      <SearchBy v-model="searchBy" />
      <InputField v-model="searchBook" />
      <SearchButton @search="booksStore.getBooks(searchBy, searchBook)" />
    </div>
  </section>
  <!-- <p>{{ searchBook }}</p>
  <p>{{ searchBy }}</p> -->
</template>

<style lang="sass">
@import '@/assets/main.scss'

.search-block
    min-height: 150px

    &__container
        min-height: 100px
        background-color: $base-green-color
        border-radius: 500px
        margin: 0 auto
        display: flex
        align-items: center
        padding: 0 60px
        justify-content: space-evenly
</style>
