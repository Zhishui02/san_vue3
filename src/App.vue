<template>
	<div class="app">
    <h2>APP组件</h2>
    <img src="" alt="">
    <Home></Home>
	</div>
</template>

<script setup lang="ts">
import Home from "@/components/Home.vue"
</script>

<style scoped>
 .app{
   height: 550px;
   width: 60%;
   background-color: #8dc3e2;
   padding: 5px;
   border-radius: 10px;
   box-shadow: 2px 2px 5px black;
   filter:saturate(0%) ;
 }
</style>