<template>
  <div class="person">
    <h2>求和：{{sum}}</h2>
    <button @click="addSum">点击加一</button>
    <hr>
    <img v-for="(dog,index) in dogList" :key="index" :src="dog" alt="">
    <br>
    <button @click="addDog">点击添加新的狗狗照片</button>
  </div>
</template>

<script setup lang="ts">
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

const {dogList,addDog} = useDog()
const {sum,addSum} = useSum()
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
img{
  width: 200px;
  margin-right: 10px;
}
</style>
