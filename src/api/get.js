import { ref } from 'vue'

const getPokemons = () => {
    const pokemons = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
            if (!data.ok) {
                throw Error('no pokemons found')
            }
            pokemons.value = await data.json()

        } catch (err) {
            error.value = err.message
        }
    }

    return { pokemons, error, load }
}

export default getPokemons;
