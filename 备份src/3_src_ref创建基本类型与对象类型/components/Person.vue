<template>
  <div class="person">
    <h2>一辆{{car.brand}}车,价值{{car.price}}万</h2>
    <button @click="editPrice">点击升值</button>
    <hr>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{game.name}}</li>
    </ul>
    <button @click="changeGame">点击修改第一个游戏名</button>

  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'

  let car = ref({
    brand:'小米su7',
    price:38
  })
  let games = ref([
    {id:'01',name:'博德之门3'},
    {id:'02',name:'黎明杀机'},
    {id:'03',name:'黑神话:悟空'},
  ])
  console.log(car)
  console.log(games)

  function editPrice(){
    car.value.price += 10
  }
  function changeGame(){
    games.value[0].name = '千恋万花'
  }

</script>

<style scoped>
  .person{
    background-color: aqua;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 10px;
  }
</style>
