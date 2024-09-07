<script setup>
import Navigation from '@/components/Navigation/Navigation.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'
import BookCard from '../cards/bookCard/BookCard.vue'
</script>

<template>
  <main>
    <Navigation />
    <BookCard />
    <FooterBlock />
  </main>
</template>

<style lang="sass">
@import '@/assets/main.scss'

main
    display: flex
    flex-direction: column
    row-gap: 100px
</style>
