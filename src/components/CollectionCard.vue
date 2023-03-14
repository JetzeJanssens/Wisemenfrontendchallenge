<template>
  <div class="card">
    <h2 class="collectioncard-title">{{ label }}</h2>
    <p class="collection-count">{{ count }} pokemons</p>
  </div>
</template>

<script>
export default {
  props: ['label', 'count']

}
</script>

<style scoped>
.card{
    height: 100px;
    border-radius: 10px;
    background-position: right;
    background-repeat: no-repeat;
}
.collectioncard-title {
  color: #fff;
  font-size: 18px;
  position: absolute;
  top: 46px;
}
.collection-count {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 68px;
}
.purple {
  background-image: url(../assets/Group.png), linear-gradient(109.73deg, #46469C 0%, #7E32E0 100%);
}
.green {
  background-image: url(../assets/Group.png), linear-gradient(109.73deg, #65CB9A 0%, #15D0DC 100%);
}
</style>