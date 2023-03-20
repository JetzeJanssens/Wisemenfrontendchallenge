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
                <h1 class="mt-3 text-white">Mijn Team</h1>
            </div>

            <div v-for="pokemon in myTeam" :key="pokemon.id">
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
            myTeam: [],
            myTeamIds: []
        }
    },

    mounted() {
        const myTeamIds = localStorage.getItem('myTeam');
        if (myTeamIds) {
            this.myTeamIds = JSON.parse(myTeamIds);
            this.myTeamIds.forEach((id) =>{
                const { pokemon, load } = getPokemon(id);
                load().then(() => {
                    this.myTeam.push(pokemon._value)
                })
                
            })
        }
        console.log(this.myTeam)
    }


}
</script>

<style scoped>
i {
    color: #fff;

}

.backcolor {
    background: linear-gradient(109.73deg, #46469C 0%, #7E32E0 100%);
}

.back {
    font-family: arial;
}

.topbar {
    color: #fff;
    font-size: 23px;

}
</style>