<template>
  <div class="person">
    <h1>需求</h1>
    <h2 ref="miku">Miku</h2>
    <h3>三三</h3>
    <button @click="showLog">点击输出h2元素的值</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
//ref
let miku = ref()
//数据
let a =ref(0)
let b =ref(1)

function showLog(){
  console.log(miku.value)
}

defineExpose({
  a,b
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
