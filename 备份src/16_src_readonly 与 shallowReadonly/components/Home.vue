<template>
  <div>
    <h2>当前值为：{{sum1}}</h2>
    <h2>当前值为：{{sum2}}</h2>
    <button @click="add1">点击加一</button>
<!--    <button @click="add2">点击加一</button>-->

  </div>
</template>

<script setup lang="ts">

import {readonly, ref} from "vue";

  let sum1 = ref(0);
  const sum2 = readonly(sum1)

  function add1(){
    sum1.value ++
  }
  /*function add2(){
    sum2.value ++
  }*/

</script>

<style scoped>
  button{
    margin-right: 10px;
  }
</style>