<script setup>
import Navigation from '../Navigation/Navigation.vue'
import FooterBlock from '../FooterBlock.vue'
import SearchBlock from '../SearchBlock.vue'
import BookSearchCard from '../cards/bookCard/BookSearchCard.vue'
</script>

<template>
  <Navigation />
  <main>
    <SearchBlock />
    <BookSearchCard />
  </main>
  <FooterBlock />
</template>

<style lang="sass">
.nav
    margin-bottom: 50px
</style>
