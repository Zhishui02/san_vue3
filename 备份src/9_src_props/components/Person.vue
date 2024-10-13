<template>
  <div class="person">
    <ul>
      <li v-for="item in list" key="index">
        {{item.name}} {{item.age}} {{item.address}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {defineProps,withDefaults} from "vue";
import type {Persons} from "@/types";
//接收props
defineProps(['list'])

//接收props+限制类型
// defineProps<{list:Persons}>()

//接收props+限制类型+限制必要性+指定默认值
/*withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{name:'三三', age:18, address:'约战'},]
})*/

//接收props，并保存
/*let result = defineProps(['list'])
console.log(JSON.stringify(result))*/
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
