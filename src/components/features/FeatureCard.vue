<script setup>
const props = defineProps(['title', 'text', 'iconURL'])
</script>

<template>
  <article class="feature-card">
    <div class="feature-card__top">
      <h4 class="feature-card__title">{{ title }}</h4>
      <img :src="iconURL" alt="" class="feature-card__icon" width="30" height="30" />
    </div>
    <p class="feature-card__text">
      {{ text }}
    </p>
  </article>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.feature-card
    width: 600px
    height: 300px
    box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.4)
    background-color: #AAE588
    border-radius: 20px
    padding: 30px
    display: flex
    flex-direction: column


    &__top
        display: flex
        justify-content: space-between
        margin-bottom: 45px

    &__title
        font-size: 36px
        font-weight: 600
        color: $base-brown-color

    &__icon
        position: relative
        top: -15px
        right: -15px

    &__text
        color: $base-brown-color
        font-size: 24px
        // align-self: end
        max-width: 400px
</style>
