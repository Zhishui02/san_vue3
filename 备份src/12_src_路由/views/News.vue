<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="item in newList" :key="item.id">
        <button @click="showNews(item)">查看新闻</button>
        <!-- query传参 -->
        <router-link :to="{
          name:'detail',
          query:{
            id:item.id,
            title:item.title,
            content:item.content,
            }
        }">{{item.title}}</router-link>

        <!-- params传参(路径传参) -->
        <!-- <router-link :to="{
          name:'detail',
          params:{
            id:item.id,
            title:item.title,
            content:item.content,
            }
        }">{{item.title}}</router-link> -->
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router"

const router = useRouter()

let newList = ref([
  {id:'001',title:'游戏一',content:'艾尔登法环'},
  {id:'002',title:'游戏二',content:'只狼：影逝二度'},
  {id:'003',title:'游戏三',content:'博德之门3'},
  {id:'004',title:'游戏四',content:'巫师3'}
])

interface newsInter {
  id:string,
  title:string,
  content:string,
}

function showNews(news:newsInter) {
  router.push({
    name:'detail',
    query:{
      id:news.id,
      title:news.title,
      content:news.content,
    }
  })
}

</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>