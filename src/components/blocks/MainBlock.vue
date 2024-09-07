<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="main-block">
    <div class="main-block__container container">
      <div class="main-block__left-part">
        <h1 class="main-block__title">
          Отслеживай свой <span class="orange">книжный</span> прогресс
        </h1>
        <div class="main-block__possibility-block">
          <p class="main-block__possibility-item possibility">
            <img src="@/assets/icons/BookIcon.svg" alt="" class="main-block__possibility-image" />
            Управляй прочитанными книгами
          </p>
          <p class="main-block__possibility-item possibility">
            <img
              src="@/assets/icons/CollectionsIcon.svg"
              alt=""
              class="main-block__possibility-image"
            />
            Создавай коллекции
          </p>
          <p class="main-block__possibility-item possibility">
            <img
              src="@/assets/icons/AchievementIcon.svg"
              alt=""
              class="main-block__possibility-image"
            />
            Получай достижения
          </p>
          <p class="main-block__possibility-item possibility">
            <img
              src="@/assets/icons/OpinionIcon.svg"
              alt=""
              class="main-block__possibility-image"
            />
            Делись мнением
          </p>
        </div>
        <RouterLink to="/search"><Button text="Начать чтение" /></RouterLink>
      </div>
      <div class="main-block__right-part">
        <img src="@/assets/image/MainBooks.png" alt="" width="570" height="500" />
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.main-block
    min-height: 560px
    // &__container
    //     display: flex
    //     align-items: center
    //     padding-top: 40px
    //     justify-content: space-between
    //     color: $base-brown-color

    &__right-part
        height: 100%
        align-self: start

    &__left-part
        padding-top: 40px
        height: 100%

    &__title
        font-size: 40px
        font-weight: 600
        margin-bottom: 60px

    &__possibility-block
        display: flex
        flex-direction: column
        row-gap: 15px
        margin-bottom: 60px


.orange
    color: $base-orange-color

.possibility
    display: flex
    column-gap: 10px
    font-size: 20px
    font-weight: 600

.button
    border: 2px solid $base-orange-color
    color: $base-orange-color
    transition: all 0.3s
    &:hover
        background-color: $base-orange-color
        color: #fff
</style>
