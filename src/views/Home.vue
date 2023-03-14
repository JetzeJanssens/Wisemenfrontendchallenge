<template>
  <div class="container">
    <h1 class="home-title">Pokédex</h1>

    <div class="row justify-content-center">
      <input class="searchbar col-10" type="text" placeholder="Pokemon zoeken...">
    </div>

    <div class="row justify-content-center mt-3">
      <collectionCard :label="'Mijn team'" :count="'4'" class="purple col-5 m-1"/> 
      <collectionCard :label="'Favorieten'" :count="'12'" class="green col-5 m-1"/>
    </div>
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <pokemonCard :pokemon="pokemon"/>
    </div>
  </div>
</template>

<script>
import getPokemons from '@/api/get';
import PokemonCard from '@/components/PokemonCard.vue';
import CollectionCard from '@/components/CollectionCard.vue';

export default {
  components: { PokemonCard, CollectionCard },
  name: "Home",
  setup() {
    const {pokemons, load, error} = getPokemons()
    load();

    return {pokemons, error}
  }
}
</script>

<style scoped>
.home-title {
  font-size: 34px;
  font-family: 'SF Pro Display';
}

.searchbar {
  border: none;
  background-color: #EFF0F1;
  border-radius: 10px;
  height: 36px;
}

</style>