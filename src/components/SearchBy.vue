<script setup>
const model = defineModel()
</script>

<template>
  <div class="search-by">
    <p class="search-by__text">Искать по :</p>
    <select name="books" id="books-select" class="search-by__select" v-model="model">
      <option value="intitle" selected>Названию книги</option>
      <option value="inauthor">Автору</option>
      <option value="inpublisher">Издателю</option>
    </select>
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.search-by
    display: flex
    column-gap: 10px
    &__text
        font-weight: 600
        font-size: 20px
        color: #fff
    &__select
        border: 1px solid #fff
        background-color: $base-green-color
        color: #fff
        font-size: 16px
        padding: 6px
        cursor: pointer
        &:focus-visible
            outline-color: $base-green-color
</style>
