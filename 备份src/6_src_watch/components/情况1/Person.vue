<template>
  <div class="person">
    <h1>情况一：监视[ref]定义的[基本类型]数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点击加1</button>
  </div>
</template>

<script setup lang="ts">
  import {ref, watch} from "vue";
  let sum = ref(0)

  function changeSum(){
    sum.value++
  }
  //监视,情况1：监视[ref]定义的[基本类型]数据
  watch(sum,(value, oldValue)=>{
    console.log('changeSum',value,oldValue)
  })
</script>

<style scoped>
.person{
  background-color: aqua;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
