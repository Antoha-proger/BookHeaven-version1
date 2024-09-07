<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="books-manage">
    <div class="books-manage__container container">
      <div class="left-part">
        <h2 class="books-manage__title title">Управляй книгами</h2>
        <div class="books-manage__text-block text-block">
          <p class="books-manage__text text">
            Ты можешь отслеживать прогресс чтения выбранных книг, а также добавлять их в свои
            коллекции.
          </p>
          <br />
          <p class="books-manage__text text">
            Управлять книгами ты можешь в профиле, где автоматически будут появляться книги, которые
            ты читаешь.
          </p>
          <br />
          <p class="books-manage__text text">
            А если ты не нашел книгу, то есть возможность создать свою, и указать необходимые
            параметры.
          </p>
        </div>
        <RouterLink to="/search"><Button text="Найти книгу" /></RouterLink>
      </div>
      <div class="right-part"></div>
    </div>
  </section>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.books-manage
  min-height: 600px
</style>
