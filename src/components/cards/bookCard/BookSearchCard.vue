<script setup></script>

<template>
  <article class="book-search-card">
    <div class="book-search-card__image">
      <img src="@/assets/image/book.png" width="200" height="300" alt="" />
    </div>
    <div class="book-search-card__book-descr">
      <div class="book-search-card__wrapper">
        <h4 class="book-search-card__title">Герой нашего времени</h4>
        <p class="book-search-card__author">М.Ю. Лермонтов</p>
        <p class="book-search-card__more">Подробнее</p>
      </div>
    </div>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.book-search-card
    display: flex
    &__image
        position: relative
        left: 143px
        bottom: -5px
        // z-index: 10
        margin-right: 30px
        // -webkit-box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
        // -moz-box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
        // box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
        img
            -webkit-box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
            -moz-box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
            box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.35)
    &__wrapper
        position: relative
        left: 30%
    &__book-descr
        align-self: end
        background-color: $base-green-color
        height: 150px
        border-radius: 15px
        width: 500px
        display: flex
        // align-items: center
        flex-direction: column
        padding-top: 20px
    &__title
        font-weight: 600
        font-size: 22px
        color: $base-brown-color
        margin-bottom: 10px
    &__author
        font-size: 16px
        font-weight: 400
        color: $base-brown-color
        margin-bottom: 25px
    &__more
        font-size: 20px
        color: $base-orange-color
</style>
