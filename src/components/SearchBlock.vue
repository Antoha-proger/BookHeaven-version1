<script setup>
import SearchBy from './SearchBy.vue'
import InputField from './InputField.vue'
import SearchButton from './SearchButton.vue'
</script>

<template>
  <section class="search-block">
    <div class="container search-block__container">
      <SearchBy />
      <InputField />
      <SearchButton />
    </div>
  </section>
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
