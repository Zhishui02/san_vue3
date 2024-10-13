<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="editName">修改名字</button>
    <button @click="editAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  let name= ref('三三')
  let age:number = 18
  let tel:string = 'zhihun02@gmail.com'
  let address:string = '约战'

  console.log(name)
  function editName() {
    name.value = '初音未来'
  }
  function showTel() {

  }
  function editAge() {

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
