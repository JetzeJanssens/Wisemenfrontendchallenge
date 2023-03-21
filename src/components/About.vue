<template>
  <p class="text-white">INFO</p>
  <div class="frame py-1">
    <p class="m-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi animi voluptate iure. Voluptas ullam molestiae, quam aliquid repellendus voluptatum ad aliquam ex repudiandae.</p>
    
    <table class="m-4">
        <tr>
            <td class="textgray">Type</td>
            <td v-for="type in pokemon.types" :key="type.id" class="col-5">
                          <Categories :type="type"/>
            </td>
        </tr>
        <tr>
            <td class="textgray">Nummer</td>
            <td>{{ pokemon.id }}</td>
        </tr>
        <tr>
            <td class="textgray">Hoogte</td>
            <td>{{ pokemon.height/10 }} m</td>
        </tr>
        <tr>
            <td class="textgray">Gewicht</td>
            <td>{{ pokemon.weight/10 }} kg</td>
        </tr>
        <tr>
            <td class="textgray">Categorie</td>
            <td>{{ pokemon.category }}</td>
        </tr>
        <tr>
            <td class="textgray">Geslacht</td>
            <td>{{ pokemon.gender }}</td>
        </tr>
        <tr>
            <td class="textgray">Vaardigheden</td>
            <td>{{ pokemon.height }}</td>
        </tr>
    </table>
 </div>
</template>

<script>
import Categories from './Categories.vue'

export default {
    components: {Categories},
    name: 'About',
    props: ['pokemon']

}
</script>

<style>
.frame {
    background-color: #fff;
    border-radius: 10px;
}
.infotext {
    padding-top: 23px;
    padding-left: 20px;
    padding-right: 20px;
}
.textgray {
    color: #ACB2C1;
}

</style>