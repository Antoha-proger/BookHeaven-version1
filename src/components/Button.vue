<script setup>
defineProps(['text'])
</script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style lang="sass">


.button
    padding: 15px 30px
    background-color: transparent
    border-radius: 15px
    cursor: pointer
    font-size: 20px
    font-weight: 600
</style>
