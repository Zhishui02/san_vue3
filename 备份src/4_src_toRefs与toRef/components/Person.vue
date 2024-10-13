<template>
  <div class="person">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <button @click="editName">修改名字</button>&nbsp;
    <button @click="editAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, toRef, toRefs} from 'vue'
  let person = reactive({
    name:'三三',
    age:18
  })
  // 解构赋值,toRefs使其成为响应式对象 也就是指针,使解构赋值的对象指向person
  let {name,age} = toRefs(person)
  // 单个赋值
  let nl = toRef(person,'age')
  console.log(nl)
  function editName(){
    person.name += '~'
    name.value += '~'
  }
  function editAge(){
    person.age += 1
    age.value += 1
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
