<template>
  <div class="app">
    <Person :list="personList"></Person>
  </div>
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue";
import type{Persons} from "@/types";
import {reactive} from "vue";

let personList:Persons = reactive([
  {name:'三三', age:18, address:'约战'},
  {name:'miku', age:18, address:'世界第一公主殿下'},
  {name:'02', age:18, address:'darling'}
])

</script>

<style scoped>
.app{
  background-color: lightslategray;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
