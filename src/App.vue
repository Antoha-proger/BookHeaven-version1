<script setup></script>

<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style lang="sass">
@import '@/assets/main.scss'
main
  // height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
