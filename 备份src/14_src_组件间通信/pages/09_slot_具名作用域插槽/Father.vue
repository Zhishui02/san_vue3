<template>
  <div>
    <Game>
      <template #gameName="params">
        <ul>
          <li v-for="g in params.game" :key="g.id">
            {{g.name}}
          </li>
        </ul>
      </template>
      <template #san="params">
        <h2>你好</h2>
      </template>
    </Game>
  </div>
</template>

<script setup lang="ts">
  import Game from "@/components/Game.vue";
</script>

<style scoped>

</style>