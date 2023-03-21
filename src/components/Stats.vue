<template>
  <p class="text-white">STATISTIEKEN</p>

  <div class="frame py-1">
    <table class="m-4 col-12">
      <tr v-for="stat in pokemon.stats" :key="stat.id">

        <td class="textgray col-2">{{ stat.stat.name }}</td>

        <td class="col-1">{{ stat.base_stat }}</td>
        
        <td class="col-6">
          <div class="score-bar">
            <div class="score-fill" :class="{ green: stat.base_stat > 50, red: stat.base_stat <= 50 }" :style="{ width: stat.base_stat + '%' }"></div>
          </div>
        </td>

      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "Stats",
  props: ['pokemon']

}
</script>

<style scoped>
.textgray {
  color: #ACB2C1;
}

.score-bar {
  max-width: 80%;
  height: 10px;
  border-radius: 10px;
  background-color: #ccc;
}

.score-fill {
  height: 100%;
}

.score-fill.green {
  background-color: #70C18F;
  border-radius: 10px;
}

.score-fill.red {
  background-color: #DF6563;
  border-radius: 10px;
}
</style>