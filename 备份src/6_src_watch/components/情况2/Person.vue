<template>
  <div class="person">
    <h1>情况二：监视[ref]定义的[对象类型]数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="editName">修改姓名</button>
    <button @click="editAge">修改年龄</button>
    <button @click="editPerson">修改信息</button>
  </div>
</template>

<script setup lang="ts">
  import {ref, watch} from "vue";
  let person= ref({
    name:'sansan',
    age:18
  })

  function editName(){
    person.value.name += '~'
  }
  function editAge(){
    person.value.age += 1
  }
  function editPerson(){
    person.value= {
      name:'Miku',
      age:17
    }
  }

  //监视,情况2：监视[ref]定义的[基本类型]数据 第三个参数为配置项
  watch(person,(value, oldValue)=>{
    console.log('person修改了',value,oldValue)
  },{
    immediate: true, //立即监视
    deep:true,  //深度监视
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
