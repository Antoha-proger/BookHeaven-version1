<template>
  <div class="circle">
    <div class="horizontal"><div class="vertical"></div></div>
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'
.circle
    width: 100px
    height: 100px
    background-color: $base-orange-color
    border-radius: 100%
    display: flex
    justify-content: center
    align-items: center

.horizontal
    height: 15px
    width: 50px
    background-color: #fff
    display: flex
    justify-content: center
    align-items: center

.vertical
    width: 15px
    height: 50px
    background-color: #fff
</style>
