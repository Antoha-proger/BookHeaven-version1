<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
  <section class="achievement">
    <div class="achievement__container container">
      <div class="left-part">
        <h2 class="achievement__title title">Достижения</h2>
        <div class="achievement__text-block text-block">
          <p class="achievement__text text">
            Достижения созданы, чтобы поддерживать твою мотивацию и интерес к чтению.
          </p>
          <br />
          <p class="achievement__text text">
            Их можно получить за разную активность, например: чтение книг, их перечитывание,
            создание коллекций, добавление новых книг и т.д.
          </p>
          <br />
          <p class="achievement__text text">
            Чтобы увидеть свои достижения, нужно перейти на вкладку “Достижения”. А также их можно
            найти в профиле.
          </p>
        </div>
        <RouterLink to="/achievement"><Button text="Поднять мотивацию" /></RouterLink>
      </div>
      <div class="right-part"></div>
    </div>
  </section>
</template>

<style lang="sass">
.achievement
    min-height: 600px
</style>
