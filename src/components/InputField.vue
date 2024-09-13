<script setup>
const model = defineModel()
</script>

<template>
  <input type="text" class="input-field" placeholder="Найти книгу" v-model="model" />
</template>

<style lang="sass">
@import '@/assets/main.scss'

.input-field
    height: 40px
    width: 500px
    border: 1px solid #fff
    border-radius: 500px
    padding-left: 20px
    font-size: 20px
    color: $base-green-color
    &:focus-visible
        outline-color: $base-green-color
</style>
