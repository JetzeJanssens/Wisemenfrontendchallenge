<template>
    <p class="typecard text-center"> {{ capitalized(type.type.name) }} </p>
</template>

<script>
export default {
    props: ['type', 'color'],

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