<template>
  <div class="modal-back">
    <slot />
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.modal-back
    width: 100vw
    height: 100vh
    background-color: rgba(95, 95, 95, 0.8)
    z-index: 10
    position: fixed
    display: flex
    justify-content: center
    align-items: center
</style>
