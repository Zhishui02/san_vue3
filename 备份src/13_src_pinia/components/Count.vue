<template>
  <div class="count">
    <h2>当前求和为：{{sum}},放大十倍:{{bigSum}}</h2>
    <h2>这是{{name}},{{address}},名字大写:{{toUpper}}</h2>
    <select v-model.number="userSum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, toRefs} from "vue";
import useCountStore from '@/store/count'
import {storeToRefs} from "pinia";

//proxy里的ref自动拆解
/*let test = reactive({
  name:'str',
  age:ref(18)
})
console.log('test',test)
console.log(test.name,test.age)*/

const countStore = useCountStore()
// console.log('@',countStore)
// storeToRefs只会关注store中的数据，不会对方法进行ref包裹
let {sum,name,address,bigSum,toUpper} = storeToRefs(countStore)

let userSum = ref(1)

function add(){
  //第一种修改方式
  // countStore.sum += userSum.value
  // countStore.name = '初音未来'
  // countStore.address = '初始之音，响彻未来'

  //第二种修改方式
  /*countStore.$patch({
    sum: 2,
    name:'初音未来',
    address:'初始之音,响彻未来'
  })*/

  //第三种修改方法
  countStore.addStore(userSum.value)
}
function sub(){
  countStore.sum -= userSum.value
}

</script>

<style scoped>
  .count{
    background-color: darkgray;
    padding: 10px;
    border-radius: 10px;
  }
  select,button{
    margin: 0 10px;
    height: 23px;
  }
</style>