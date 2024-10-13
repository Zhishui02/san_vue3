<template>
  <div>
    <h2>游戏列表</h2>
    <slot name="gameName" :game="gameList"></slot>
    <slot name="san"></slot>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  import {nanoid} from "nanoid";

  let gameList = reactive([
      {id:nanoid(),name:'博德之门3'},
      {id:nanoid(),name:'黎明杀机'},
      {id:nanoid(),name:'巫师3'},
      {id:nanoid(),name:'艾尔登法环'}
  ])
</script>

<style scoped>

</style>