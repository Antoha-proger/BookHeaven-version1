<script setup>
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
  <div class="nav">
    <div class="nav__container container">
      <img
        class="nav__logo logo"
        src="@/assets/icons/Logo.svg"
        alt="logo"
        width="230"
        height="43"
      />
      <NavigationMenu />
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.nav
    background-color: $base-green-color
    &__container
        padding: 30px 15px
        display: flex
        justify-content: space-between
        align-items: end

    &__logo
        margin-right: 170px

// .nav-list
//     justify-self: end
//     margin-right: auto
</style>
