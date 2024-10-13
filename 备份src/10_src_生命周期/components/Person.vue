<template>
  <div class="person">
    <h2>求和：{{sum}}</h2>
    <button @click="addSum">点击加一</button>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";
let sum = ref(0)
function addSum(){
  sum.value++
}
//创建
// setup

//挂载前
onBeforeMount(()=>{
  console.log('挂载前')
})
//挂载后
onMounted(()=>{
  console.log('子组件-挂载后')
})
//更新前
onBeforeUpdate(()=>{
  console.log('更新前')
})
//更新后
onUpdated(()=>{
  console.log('更新后')
})
//卸载前
onBeforeUnmount(()=>{
  console.log('卸载前')
})
//卸载后
onUnmounted(()=>{
  console.log('卸载后')
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
