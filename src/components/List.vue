<template>
  <div class="backcolor min-vh-100">
    <div class="container mt-0 mt-lg-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="row justify-content-end pt-3">
            <img class="filter img-fluid" src="../assets/Vector.svg" alt="">
            <img class="filter img-fluid" src="../assets/Vector2.svg" alt="">

          </div>

          <div class="border rounded shadow bg-white m-3 p-2">
            <div>
              <input type="radio" id="nameAscending" name="sortOption" value="nameAscending" v-model="sortOption">
              <label for="nameAscending">Alfabetisch oplopend</label>
            </div>
            <div>
              <input type="radio" id="nameDescending" name="sortOption" value="nameDescending" v-model="sortOption">
              <label for="nameDescending">Alfabetisch aflopend</label>
            </div>
            <div>
              <input type="radio" id="idAscending" name="sortOption" value="idAscending" v-model="sortOption">
              <label for="idAscending">Numeriek oplopend</label>
            </div>
            <div>
              <input type="radio" id="idDescending" name="sortOption" value="idDescending" v-model="sortOption">
              <label for="idDescending">Numeriek aflopend</label>
            </div>
          </div>


          <h1 class="home-title ms-4">Pokédex</h1>

          <div class="row justify-content-center m-1">
            <input v-model="search" class="searchbar col-11 col-lg-12" type="text" placeholder="Pokemon zoeken">
          </div>

          <div class="row justify-content-around mt-3">

            <router-link to="/team" class="col-5 col-lg-6">
              <collectionCard :label="'Mijn team'" :count="TeamLength" class="purple p-1" />
            </router-link>

            <router-link to="/favorites" class="col-5 col-lg-6 mb-3">
              <collectionCard :label="'Favorieten'" :count="FavoriteLength" class="green p-1" />
            </router-link>

          </div>
        </div>

        <div class="col-12 col-lg-6 mt-0 mt-lg-5">
          <div v-for="pokemon in sortedPokemons" :key="pokemon.id">
            <div class="row justify-content-center">
              <pokemonCard :pokemon="pokemon" class="col-11" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import PokemonCard from '@/components/PokemonCard.vue';
import CollectionCard from '@/components/CollectionCard.vue';
import getPokemons from '@/api/get';
import { watchEffect, ref, computed, } from 'vue';

export default {
  components: { PokemonCard, CollectionCard },
  name: "List",

  computed: {
    FavoriteLength() {
      const likedPokemons = JSON.parse(localStorage.getItem('likedPokemons'))
      const length = likedPokemons.length
      return length;
    },

    TeamLength() {
      const myTeam = JSON.parse(localStorage.getItem('myTeam'))
      const length = myTeam.length
      return length;
    }
  },

  setup() {
    const { pokemons, load } = getPokemons()
    const search = ref('')
    const filter = ref([])

    load();
    console.log(pokemons)

    filter.value = pokemons.value
    watchEffect(() => {
      document.search = search.value;
      filter.value = pokemons.value.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.value.toLowerCase())
      })
    })

    const sortOption = ref('');

    const sortedPokemons = computed(() => {
      const sorted = filter.value.slice().sort((a, b) => {
        if (sortOption.value === 'nameAscending') {
          return a.name.localeCompare(b.name);
        } else if (sortOption.value === 'nameDescending') {
          return b.name.localeCompare(a.name);
        } else if (sortOption.value === 'idAscending') {
          return a.id - b.id;
        } else if (sortOption.value === 'idDescending') {
          return b.id - a.id;
        }
      });
      return sorted;
    });


    return { filter, search, sortOption, sortedPokemons };

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

.filter {
  height: 20px;
  width: auto;
  position: relative;
  right: 25px;
}
</style>