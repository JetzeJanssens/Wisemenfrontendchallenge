<template>
  <router-link :to="{name: 'Detail', params: {id: pokemon.id}}">
    <div class="pokecard">
      <div class="row">
        <div class="col-2 my-auto">
          <img class="foto" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"/>
        </div>

        <div class="col-4">
          <h2 class="name">{{ capitalized(pokemon.name) }}</h2>
          <p class="number">Nr. {{ pokemon.id }}</p>
        </div>

        <div class="col-4">
          <div class="row justify-content-end">
            <div v-for="type in pokemon.types" :key="type.id" class="col-5">
              <categories :type="type"/>
            </div>
          </div>
        </div>
        
        <div class="col-2">
          <p class="text-center"><i class="fa-solid fa-chevron-right my-auto"></i></p>  
        </div>
      </div>

</div>
  </router-link>
</template>

<script>
import Categories from './Categories.vue'
export default {
  components: {Categories},
  name: "PokemonCard",
  props: ['pokemon'],


  methods: {
      capitalized(name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    }
}


</script>

<style>
body {
  background-color: #f9f9f9;
}

.pokecard {
  border: none;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff !important;
  position: relative;
}

.foto {
  height: 50px;
  widows: 50px;
  position: relative;
  top: 15px;
}

.name {
  font-family: 'SF Display Pro';
  color: black;
  text-decoration: none;
  position: absolute;
  top: 10px;
}

.number {
  color: #919698;
  position: absolute;
  top: 38px;
}

i{
  color: #BABEC2;
  position: relative;
  top: 20px;
}

</style>