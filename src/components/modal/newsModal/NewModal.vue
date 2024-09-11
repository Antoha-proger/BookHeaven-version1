<script setup>
import { useNewsStore } from '@/stores/newsStore'

const store = useNewsStore()
</script>

<template>
  <div class="modal-back">
    <div class="modal-window">
      <div class="modal-window__left-part">
        <img
          :src="store.selectedNew.urlToImage"
          alt=""
          class="modal-window__new-image"
          width="250"
          height="400"
        />
      </div>
      <div class="modal-window__right-part">
        <div class="modal-window__content">
          <h3 class="modal-window__new-title">
            {{ store.selectedNew.title }}
          </h3>
          <div class="modal-window__text">
            Ясность нашей позиции очевидна: сплочённость команды профессионалов говорит о
            возможностях вывода текущих активов. Следует отметить, что глубокий уровень погружения
            позволяет выполнить важные задания по разработке благоприятных перспектив! Прежде всего,
            высокотехнологичная концепция общественного уклада обеспечивает актуальность новых
            предложений. Ясность нашей позиции очевидна: сплочённость команды профессионалов говорит
            о возможностях вывода текущих активов. Следует отметить, что глубокий уровень погружения
            позволяет выполнить важные задания по разработке благоприятных перспектив! Прежде всего,
            высокотехнологичная концепция общественного уклада обеспечивает актуальность новых
            предложений. Ясность нашей позиции очевидна: сплочённость команды профессионалов говорит
            о возможностях вывода текущих активов. Следует отметить, что глубокий уровень погружения
            позволяет выполнить важные задания по разработке благоприятных перспектив! Прежде всего,
            высокотехнологичная концепция общественного уклада обеспечивает актуальность новых
            предложений. Ясность нашей позиции очевидна: сплочённость команды профессионалов говорит
            о возможностях вывода текущих активов. Следует отметить, что глубокий уровень погружения
            позволяет выполнить важные задания по разработке благоприятных перспектив! Прежде всего,
            высокотехнологичная концепция общественного уклада обеспечивает актуальность новых
            предложений.
          </div>
          <p class="modal-window__new-author">{{ store.selectedNew.author }}</p>
        </div>
        <button @click="store.closeNewsModalWindow" class="modal-button-close">
          <img
            class="modal-button-close-image"
            src="@/assets/icons/modalButtonClose.svg"
            alt=""
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.modal-back
    width: 100vw
    height: 100vh
    background-color: rgba(161, 161, 161, 0.8)
    z-index: 10
    position: fixed
    display: flex
    justify-content: center
    align-items: center

.modal-window
    width: 800px
    height: 500px
    background-color: rgba(255, 255, 255, 1)
    border-radius: 20px
    z-index: 20
    padding: 50px
    display: flex
    justify-content: space-between
    column-gap: 20px
    &__new-image
        object-fit: scale-down
    &__right-part
        display: flex
    &__content
        display: flex
        flex-direction: column
        // row-gap: 40px
        justify-content: space-between
    &__new-author
        text-align: right
    &__text
        overflow: hidden
        height: 250px
        overflow-y: scroll


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
