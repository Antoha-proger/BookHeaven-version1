<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="collections">
    <div class="collections__container container">
      <div class="left-part">
        <h2 class="collections__title title">Коллекции</h2>
        <div class="collections__text-block text-block">
          <p class="collections__text text">
            Благодаря коллекциям ты можешь сортировать книги, как тебе угодно, используя разные
            названия для коллекций.
          </p>
          <br />
          <p class="collections__text text">
            Тебе доступно 6 базовых коллекций: “Читаю”, “В планах”, “Прочитано”, “Отложено”,
            “Брошено” и “Хочу перечитать”. Но никто не ограничивает тебя в создании свои собственных
            коллекций.
          </p>
          <br />
          <p class="collections__text text">Коллекции ты, также, можешь найти в профиле.</p>
        </div>
        <RouterLink to="/search"><Button text="Перейти к коллекциям" /></RouterLink>
      </div>
      <div class="right-part"></div>
    </div>
  </section>
</template>

<style lang="sass">
.collections
    min-height: 600px
</style>
