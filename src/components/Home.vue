<template>
  <div class="home">
    <button @click="isShow = true">展示弹窗</button>
    <teleport to="body">
      <div v-show="isShow" class="model">
        <h3>弹窗标题</h3>
        <p>弹窗内容</p>
        <button @click="isShow = false">关闭</button>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  let isShow = ref(false)
</script>

<style scoped>
  .model{
    width: 160px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4baba;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    margin-left: -80px;
    top: 30%;
  }
</style>