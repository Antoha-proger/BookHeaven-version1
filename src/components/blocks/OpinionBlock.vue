<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="opinion">
    <div class="opinion__container container">
      <div class="left-part">
        <h2 class="opinion__title title">Отзывы</h2>
        <div class="opinion__text-block text-block">
          <p class="opinion__text text">
            Если ты хочешь оценить прочитанную книгу или написать о ней свое мнение, а может то и
            другое, если да, то для тебя созданы отзывы.
          </p>
          <br />
          <p class="opinion__text text">
            Чтобы оставить отзыв тебе, сначала, нужно выбрать книгу, и затем оценивать её.
          </p>
          <br />
          <p class="opinion__text text">
            Все оставленные отзывы хранятся в профиле во вкладке “Мои отзывы”.
          </p>
        </div>
        <RouterLink to="/profile"><Button text="Оставить отзыв" /></RouterLink>
      </div>
      <div class="right-part"></div>
    </div>
  </section>
</template>

<style lang="sass">
.opinion
    min-height: 600px
</style>
