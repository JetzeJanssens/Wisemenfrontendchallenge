<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <router-view></router-view>
</template>


<script>
export default {
mounted() {

    if(!localStorage.getItem('likedPokemons')) {
      localStorage.setItem('likedPokemons', JSON.stringify([]))
    }

    if(!localStorage.getItem('myTeam')) {
      localStorage.setItem('myTeam', JSON.stringify([]))
    }
  }
}

</script>

<style>

</style>
