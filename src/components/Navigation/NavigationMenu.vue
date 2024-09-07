<script setup></script>

<template>
  <ul class="nav-list">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link">Главная</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/search" class="nav-link">Поиск</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/achievement" class="nav-link">Достижения</RouterLink>
    </li>
    <li class="nav-item profile-link">
      <RouterLink class="nav-link" to="/profile"
        ><img src="@/assets/icons/ProfileIcon.svg" alt=""
      /></RouterLink>
    </li>
  </ul>
</template>

<style lang="sass">
@import '@/assets/main.scss'


.nav-list
    display: flex
    list-style-type: none
    column-gap: 35px

.nav-link
    color: #fff
    font-size: 20px
    font-weight: 600
    text-decoration: none
    transition: color scale 0.3s
    &:hover
        color: #F1F1F1

.profile-link
    transition: scale 0.3s
    &:hover
      scale: 1.2
</style>
