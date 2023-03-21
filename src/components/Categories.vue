<template>
    <p :style="{backgroundColor: setBackgroundColor(type.type.name)}" class="typecard text-center"> {{ capitalized(type.type.name) }} </p>
</template>

<script>
export default {
    props: ['type', 'color'],

    methods: {
      capitalized(name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      },

      setBackgroundColor(categorie) {
        switch(categorie) {
        case 'fire':
          return 'orange';
        case 'water':
          return 'darkblue';
        case 'grass':
          return 'lightgreen';
          case 'poison':
          return 'purple';
          case 'flying':
          return 'lightblue';
          case 'bug':
          return 'brown';
          case 'electric':
          return 'goldenrod';
          case 'ground':
          return 'sienna';
        default:
          return 'gray';
      }
    }
  }
}
</script>

<style>

.typecard {
  position: relative;
  top: 15px;
  background: #4592C3;
  color: #fff;
  text-decoration: none; 
  border-radius: 100px;
  display: inline-block;
  padding: 3px 10px;
  font-family: 'SF Display Pro';
  font-size: 12px;


}
</style>  