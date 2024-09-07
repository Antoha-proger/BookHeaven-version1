<template>
  <footer class="footer">
    <div class="footer__container">
      <img src="@/assets/icons/Logo.svg" alt="Logo" />
    </div>
  </footer>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.footer
    background: $base-green-color
    min-height: 100px

footer .footer__container
    display: flex
    margin: 0 auto
    max-width: 1140px

    // height: 100px
    justify-content: center
    align-items: center
    padding: 30px 0
</style>
