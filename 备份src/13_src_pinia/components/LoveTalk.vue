<template>
  <div class="talk">
    <button @click="getTalk">获取一个土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useTalkStore from "@/store/loveTalk";
import {storeToRefs} from "pinia";

const talkStore = useTalkStore();

let {talkList} = storeToRefs(talkStore)

function getTalk() {
  talkStore.getTalk();
}

// 通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化
talkStore.$subscribe((mutation, state)=>{
  // console.log("11111111111",mutation,state)
  localStorage.setItem("talkList",JSON.stringify(state.talkList))
})

</script>

<style scoped>
  .talk{
    background-color: hotpink;
    padding: 10px;
    border-radius: 10px;
  }
</style>