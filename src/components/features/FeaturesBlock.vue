<script setup>
import FeatureCard from './FeatureCard.vue'
import { features } from './setup'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// AOS.init()
</script>

<template>
  <section class="features">
    <div class="container features__container">
      <FeatureCard
        v-for="items in features"
        :title="items.name"
        :text="items.descr"
        :iconURL="items.iconURL"
        data-aos="fade-up"
      />
    </div>
  </section>
</template>

<style lang="sass">
@import '@/assets/main.scss'

.features
    &__container
        display: grid
        grid-template-columns: repeat(2, 1fr)
        row-gap: 200px
        & > *
            grid-column: span 2

            &:nth-child(even)
                justify-self: end
</style>
