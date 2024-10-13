<template>
  <div class="app">
    <button @click="changeShow">点击卸载</button>
    <Person v-if="isShow"></Person>
  </div>
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue";
import {onMounted, ref} from "vue";
let isShow = ref(true)
function changeShow(): void {
  isShow.value = !isShow.value;
}
//挂载完毕
onMounted(()=>{
  console.log('父组件-挂载后')
})
</script>

<style scoped>
.app{
  background-color: lightslategray;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
