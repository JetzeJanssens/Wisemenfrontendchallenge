<template>
  <router-link :to="{name: 'Detail', params: {name: pokemon.name}}">
    <div class="border m-3">
  <h2>{{ pokemon.name }}</h2>
</div>
  </router-link>
</template>

<script>
export default {
    props: ['pokemon']
}
</script>

<style>

</style>