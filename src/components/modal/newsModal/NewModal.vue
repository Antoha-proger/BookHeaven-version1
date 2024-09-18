<script setup>
import { useNewsStore } from '@/stores/newsStore'
import ModalButtonClose from '../ModalButtonClose.vue'
import ModalBack from '../ModalBack.vue'

const newsStore = useNewsStore()
</script>

<template>
  <ModalBack>
    <div class="modal-window">
      <div class="modal-window__left-part">
        <img
          :src="newsStore.selectedNew.urlToImage"
          alt=""
          class="modal-window__new-image"
          width="250"
          height="400"
        />
      </div>
      <div class="modal-window__right-part">
        <div class="modal-window__content">
          <h3 class="modal-window__new-title">
            {{ newsStore.selectedNew.title }}
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
          <p class="modal-window__new-author">{{ newsStore.selectedNew.author }}</p>
        </div>
      </div>
      <ModalButtonClose @close="newsStore.closeNewsModalWindow" />
    </div>
  </ModalBack>
</template>

<style lang="sass">
@import '@/assets/main.scss'

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
</style>
