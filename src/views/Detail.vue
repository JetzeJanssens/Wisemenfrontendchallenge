<template>
  <div>
    <h1>Detail pagina</h1>
    <p>{{ pokemon.name  }}</p>
  </div>
</template>

<script>
import getPokemon from '../api/getdetail';

export default {
props: ['name'],
setup(props) {
  console.log(props.name)
    const {pokemon, error, load} = getPokemon(props.name);

    load();

    return {pokemon, error}
}
}
</script>

<style>

</style>  