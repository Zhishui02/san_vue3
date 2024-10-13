<template>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>灵装：{{person.item.clothes}},能力：{{person.item.power}}</h2>
    <button @click="editName">修改姓名</button>
    <button @click="editAge">修改年龄</button>
    <button @click="editClothes">修改灵装</button>
    <button @click="editPower">修改能力</button>
    <button @click="editItem">修改信息</button>
  </div>
</template>

<script setup lang="ts">
  import {reactive, watch} from "vue";
  let person= reactive({
    name:'三三',
    age:18,
    item:{
      clothes:'第三灵装',
      power:'刻刻帝'
    }
  })

  function editName(){
    person.name += '~'
  }
  function editAge(){
    person.age += 1
  }
  function editClothes(){
    person.item.clothes = '第二灵装'
  }
  function editPower(){
    person.item.power = '嗫告篇帙'
  }
  function editItem(){
    person.item = {
      clothes:'第五灵装',
      power:'灼烂歼鬼'
    }
  }

  //监视,情况5：监视多个数据
  watch(()=>[person.name,person.item.clothes],(value, oldValue)=>{
    console.log('姓名或服装修改了',value,oldValue)
  },{
    immediate: true, //立即监视
    deep:true
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
