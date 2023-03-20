j<template>
    <div class="backcolor min-vh-100">
        <div class="container">
            <div class="row justify-content-between topbar">
                <div class="col-10">
                    <router-link to="/">
                        <p><i class="fa-solid fa-chevron-left"> <span class="back"> Terug</span> </i></p>
                    </router-link>
                </div>
            </div>

            <div>
                <h1 class="mt-3 text-white">Favorieten</h1>
            </div>

            <div v-for="pokemon in favoritePokemons" :key="pokemon.id">
                <div class="row justify-content-center">
                    <pokemonCard :pokemon="pokemon" class="col-11" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
import getPokemon from '@/api/getdetail';

export default {
    name: "Favorites",
    components: { PokemonCard },

    data() {
        return {
            favoritePokemons: [],
            favoritePokemonIds: []
        }
    },

    mounted() {
        const favoritePokemonIds = localStorage.getItem('likedPokemons');
        if (favoritePokemonIds) {
            this.favoritePokemonIds = JSON.parse(favoritePokemonIds);
            this.favoritePokemonIds.forEach((id) =>{
                const { pokemon, load } = getPokemon(id);
                load().then(() => {
                    this.favoritePokemons.push(pokemon._value)
                })
                
            })
        }
        console.log(this.favoritePokemons)
    }


}
</script>

<style scoped>
i {
    color: #fff;

}

.backcolor {
    background: linear-gradient(109.73deg, #65CB9A 0%, #15D0DC 100%);
}

.back {
    font-family: arial;
}

.topbar {
    color: #fff;
    font-size: 23px;

}
</style>