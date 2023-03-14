import { ref } from 'vue'

const getPokemon = (name) => {
    const pokemon = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
            if (!data.ok) {
                throw Error('no data loaded')
            }
            pokemon.value = await data.json()

        } catch (err) {
            error.value = err.message
        }
    }

    return { pokemon, error, load }
}

export default getPokemon;