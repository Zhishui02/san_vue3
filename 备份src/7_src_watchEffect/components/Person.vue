<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm</h2>
    <h2>当前水温为：{{temp}}°C</h2>
    <h2>当前水位为：{{height}}CM</h2>
    <button @click="editTemp">点击升温</button>
    <button @click="editHeight">水位增加</button>
  </div>
</template>

<script setup lang="ts">
import {ref, watch,watchEffect} from "vue";
  let temp = ref(29)
  let height = ref(0)

  function editTemp(){
    temp.value +=5
  }
  function editHeight(){
    height.value +=10
  }

  /*watch([temp,height],(value)=>{
    let [newTemp,newHeight] = value
    if(newTemp >= 60 || newHeight >= 80){
      console.log('到达了要求')
    }
  },{
    deep: true,
    immediate: true,
  })*/

  watchEffect(()=>{
    if (temp.value >= 60 || height.value >= 80) {
      console.log('到达了要求')
    }
  })
</script>

<style scoped>
.person{
  background-color: aqua;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
button{
  margin-right: 10px;
}
</style>
