<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

const route = useRoute();
// console.log('route',route)
let {query,params} = toRefs(route)

// defineProps(["id","title","content"]);
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list li {
  line-height: 30px;
}
</style>