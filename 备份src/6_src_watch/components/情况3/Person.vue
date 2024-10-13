<template>
  <div class="person">
    <h1>情况三：监视[reactive]定义的[对象类型]数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="editName">修改姓名</button>
    <button @click="editAge">修改年龄</button>
    <button @click="editPerson">修改信息</button>
  </div>
</template>

<script setup lang="ts">
  import {reactive, watch} from "vue";
  let person= reactive({
    name:'sansan',
    age:18
  })

  function editName(){
    person.name += '~'
  }
  function editAge(){
    person.age += 1
  }
  function editPerson(){
    Object.assign(person,{
      name:'Miku',
      age:17
    })
  }

  //监视,情况3：监视[reactive]定义的[对象类型]数据 默认开启深度监视
  watch(person,(value, oldValue)=>{
    console.log('person修改了',value,oldValue)
  },{
    immediate: true, //立即监视
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
