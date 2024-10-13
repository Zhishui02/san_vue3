<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{fullName}}</span><br>
    <button @click="editName">点击修改全名为：miku</button>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from "vue";

let firstName = ref('san')
let lastName = ref('san')
//只调用了getter方法,属性为只读的
/*let fullName = computed(() => {
  return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
})*/
//只调用了getter、setter方法,可读可写
let fullName = computed({
  get(){
    return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
  },
  set(newVal){
    const [str1, str2] = newVal.split('-')
    firstName.value=str1
    lastName.value=str2
  }
})
function editName(){
  fullName.value='mi-ku'
}

</script>

<style scoped>
.person{
  background-color: aqua;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
