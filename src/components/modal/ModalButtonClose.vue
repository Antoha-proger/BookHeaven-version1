<script setup>
defineEmits(['close'])
</script>

<template>
  <button class="modal-button-close" @click="$emit('close')">
    <img
      class="modal-button-close-image"
      src="@/assets/icons/modalButtonClose.svg"
      alt=""
      width="24"
      height="24"
    />
  </button>
</template>

<style lang="sass">
.modal-button-close
    border: none
    background-color: transparent
    cursor: pointer
    position: relative
    top: -25px
    right: -25px
    width: 24px
    height: 24px
</style>
