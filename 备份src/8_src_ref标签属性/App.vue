<template>
  <div class="app">
    <button @click="showLog">点击显示Person组件的内容</button>
    <Person ref="person"></Person>
  </div>
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue";
import {ref} from "vue";

let person = ref()
function showLog(){
  console.log(person.value)
}
</script>

<style scoped>
.app{
  background-color: lightslategray;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
