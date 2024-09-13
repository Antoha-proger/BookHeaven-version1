<script setup></script>

<template>
  <div class="search-by">
    <p class="search-by__text">Искать по :</p>
    <select name="books" id="books-select" class="search-by__select">
      <option value="book-name" selected>Названию книги</option>
      <option value="book-author">Автору</option>
      <option value="book-isbn">ISBN</option>
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
