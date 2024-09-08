<script setup>
import AddButtonImage from './AddButtonImage.vue'
</script>

<template>
  <article class="book-card">
    <div class="book-card__wrapper">
      <div class="book-card__progress">
        <img src="@/assets/image/progress.png" alt="" width="750" height="5" />
      </div>
      <div class="book-card__main">
        <div class="book-card__book-image">
          <img src="@/assets/image/book.png" alt="" width="214" height="340" />
        </div>
        <div class="book-card__book-info">
          <p class="book-card__book-title">Герой нашего времени</p>
          <p class="book-card__book-author">М.Ю. Лермантов</p>

          <div class="book-card__book-descr">
            <p class="book-card__book-descr-item">Количество страниц 250</p>
            <p class="book-card__book-descr-item">Страниц прочитано: 150</p>
            <p class="book-card__book-descr-item">Начало чтения: 23.07.24</p>
            <p class="book-card__book-descr-item">Издательство</p>
            <p class="book-card__book-descr-item">ISBN</p>
          </div>

          <p class="book-card__more-button">Подробнее</p>
        </div>
        <div class="book-card__page-increment">
          <AddButtonImage />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.book-card
    background-color: $base-green-color
    width: 800px
    height: 425px
    border-radius: 20px
    padding: 25px

    &__wrapper
        display: flex
        flex-direction: column
        row-gap: 15px

    &__main
        display: flex
        // justify-content: space-between
        column-gap: 25px

    &__book-info
        display: flex
        flex-direction: column
        // justify-content: space-between

    &__book-title
        color: #fff
        font-weight: 600
        font-size: 32px
        margin-bottom: 10px

    &__book-author
        color: #fff
        font-weight: 300
        font-size: 20px
        margin-bottom: 30px

    &__book-descr
        display: flex
        flex-direction: column
        row-gap: 5px
        margin-bottom: 30px
        align-items: start
        &-item
            color: #fff
            font-weight: 300
            font-size: 20px

    &__more-button
        color: #F5F5F5
        font-weight: 300
        font-size: 20px

    &__page-increment
        align-self: end
        margin-left: auto
</style>
