<template>
  <div>
    <h2>当前值为：{{sum}}</h2>
    <h2>名字：{{person.name}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <button @click="add">点击加一</button>
    <button @click="editName">修改名字</button>
    <button @click="editHobby">修改爱好</button>
    <button @click="editAll">整体替换</button>
    <hr>
    <h2>游戏名:{{games.name}} 发行日期{{games.info.dates}}</h2>
    <button @click="editGame">发行日期</button>
  </div>
</template>

<script setup lang="ts">

import {reactive, ref, shallowReactive, shallowRef} from "vue";

  let sum = shallowRef(0);
  let person = shallowRef({
    name:'Miku',
    hobby:'唱歌',
  })
  let games = shallowReactive({
    name:'艾尔登法环',
    info:{
      dates:'2023'
    }
  })

  function add(){
    sum.value ++
  }
  function editName():void {
    person.value.name = '三三';
  }
  function editHobby():void {
    person.value.hobby = "猫咪"
  }
  function editAll():void {
    person.value = {
      name:'依蕾娜',
      hobby:"旅行"
    }
  }
  function editGame():void {
    games.info.dates = "2024"
  }
</script>

<style scoped>
  button{
    margin-right: 10px;
  }
</style>