<template>
  <div class="backcolor">
    <div class="container">

      <div class="row justify-content-between topbar">
        <div class="col-10">
          <router-link to="/">
            <p><i class="fa-solid fa-chevron-left"> <span class="back"> Terug</span> </i></p>
          </router-link>
        </div>
        <div class="col-2">

          <div class="heartbutton" @click="favoritePokemon">
            <i class="fa-heart" :class="[isFavorite ? 'fa-solid red' : 'fa-regular']"></i>
          </div>

        </div>
      </div>

      <h1 class="pokemonname pt-2">{{ capitalized(pokemon.name) }}</h1>

      <button class="btn btn-dark" @click="addToTeam">{{ btntext }}</button>


      <div class="text-center">
        <img class="foto"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`" />
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
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Stats from '@/components/Stats.vue';
import Moveset from '@/components/Moveset.vue';
import getPokemon from '../api/getdetail';

export default {
  name: 'Detail',
  components: { About, Stats, Moveset },

  data() {
    return {
      isFavorite: false,
      isMyTeam: false,
      btntext: 'Toevoegen'

    };
  },

  props: ['id', 'pokemon'],
  setup(props) {
    const { pokemon, error, load } = getPokemon(props.id);

    load();

    return { pokemon, error }
  },

  methods: {
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);

      return capitalizedFirst + rest;
    },

    favoritePokemon() {

      let likedPokemons = JSON.parse(localStorage.getItem('likedPokemons') || '[]');

      let index = likedPokemons.indexOf(this.pokemon.id);
      if (index === -1) {
        likedPokemons.push(this.pokemon.id)
        this.isFavorite = true
        console.log(this.isFavorite)
      } else {
        likedPokemons.splice(index, 1)
        this.isFavorite = false
        console.log(this.isFavorite)
      }

      localStorage.setItem('likedPokemons', JSON.stringify(likedPokemons));

    },

    addToTeam(){
      let myTeam = JSON.parse(localStorage.getItem('myTeam') || '[]');

      let index = myTeam.indexOf(this.pokemon.id);
      if (index === -1) {
        myTeam.push(this.pokemon.id)
        this.isMyTeam = true
        this.btntext = 'Verwijderen uit mijn team '

      } else {
        myTeam.splice(index, 1)
        this.isMyTeam = false
        this.btntext = 'Toevoegen aan mijn team'

      }
      
      localStorage.setItem('myTeam', JSON.stringify(myTeam));
    }
  },
  mounted() {
    const likedPokemons = JSON.parse(localStorage.getItem('likedPokemons'))
    const index = likedPokemons.indexOf(this.pokemon.id)
    if (index > -1){
      this.isFavorite = true
    } else {
      this.isFavorite = false
    }

    const myTeam = JSON.parse(localStorage.getItem('myTeam'))
    const indexteam = myTeam.indexOf(this.pokemon.id)
    if (indexteam > -1) {
      this.btntext = 'Verwijderen uit mijn team'
    } else {
      this.btntext = 'Toevoegen aan mijn team'
    }

  }
}
</script>

<style scoped>
i {
  color: #fff;

}

.topbar {
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


.heartbutton {
  cursor: pointer;
}

.red {
  color: rgb(255, 55, 55);
}


</style>  