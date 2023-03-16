<template>
  <div class="container backcolor">

    <div class="row justify-content-between topbar">
      <div class="col-10">
         <p><i class="fa-solid fa-chevron-left"> <span class="back"> Terug</span> </i></p>
      </div>
      <div class="col-2">
        <p><i class="fa-regular fa-heart"></i></p>
      </div>
    </div>

    <h1 class="pokemonname pt-2">{{ capitalized(pokemon.name) }}</h1>

    <div class="text-center">
        <img class="foto" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"/>
    </div>

    <div>
      <about :pokemon="pokemon" />
    </div>

    <div class="pt-4">
      <stats :pokemon="pokemon" />
    </div>

    <div class="pt-4">
      <moveset :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Stats from '@/components/Stats.vue';
import Moveset from '@/components/Moveset.vue';
import getPokemon from '../api/getdetail';

export default {
components: { About, Stats, Moveset },
props: ['name'],
setup(props) {
  console.log(props.name)
    const {pokemon, error, load} = getPokemon(props.name);

    load();

    return {pokemon, error}
},

methods: {
      capitalized(name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    }
}
</script>

<style scoped>
  
  i {
    color: #fff;
    
  }
  .topbar{
    color: #fff;
    font-size: 23px;

  }
  .back {
    font-family: arial;
  }
  .backcolor {
    background: linear-gradient(180deg, #7ECD8B 0%, #89E2B3 100%);
    padding-bottom: 20px;
  }
  .pokemonname {
    color: #fff;
    font-size: 34px;

  }

  .foto {
    height: 250px;

  }

</style>  