<template>
  <div>
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script setup lang="ts">
  import useMsgRef from "@/hooks/useMsgRef";

  //hooks
  let {msg} = useMsgRef('',1000);
</script>

<style scoped>
  button{
    margin-right: 10px;
  }
</style>