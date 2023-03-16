<template>
  <div class="container backcolor">
    <div class="row justify-content-end pt-3">
      <img class="filter img-fluid" src="../assets/Vector.svg" alt="">
      <img class="filter img-fluid" src="../assets/Vector2.svg" alt="">

    </div>


    <h1 class="home-title ms-4">Pokédex</h1>

    <div class="row justify-content-center">
      <input class="searchbar col-10" type="text" placeholder="Pokemon zoeken">
    </div>

    <div class="row justify-content-center mt-3">
      <collectionCard :label="'Mijn team'" :count="'4'" class="purple col-5 me-1"/> 
      <collectionCard :label="'Favorieten'" :count="'12'" class="green col-5 ms-1"/>
    </div>
 
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="row justify-content-center">
        <pokemonCard :pokemon="pokemon" class="col-11"/>
      </div>
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
.backcolor {
  background-color: #f9f9f9;
}
.home-title {
  font-size: 34px;
  font-family: 'SF Display Pro';
}

.searchbar {
  border: none;
  background-color: #EFF0F1;
  border-radius: 10px;
  height: 36px;
}

.filter{
 height: 20px;
 width: auto;
 position: relative;
 right: 25px;
}

</style>