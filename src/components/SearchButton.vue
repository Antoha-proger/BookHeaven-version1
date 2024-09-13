<script setup></script>

<template>
  <button class="search-button">Поиск</button>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.search-button
    width: 100px
    height: 40px
    border: 2px solid #fff
    border-radius: 50px
    background-color: #fff
    font-size: 20px
    color: $base-green-color
    cursor: pointer
    transition: 0.3s
    &:hover
        color: #fff
        background-color: $base-green-color
</style>
