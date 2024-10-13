import {defineStore} from 'pinia'
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";

//选项式写法
/*const useTalkStore = defineStore('loveTalk',{
    //状态 data
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || [{id:'001',content:'“我在找一条路”“春熙路？”“不是，阿姨洗铁路。”'}]
        }
    },
    //计算 computed
    getters:{

    },
    //动作 methods
    actions:{
        getTalk(){
            axios.get("https://api.uomg.com/api/rand.qinghua?format=json").then((res)=>{
            // console.log(res)
            let obj = {id:nanoid(),content:res.data.content};
            this.talkList.push(obj)
            }).catch(reason => {
                console.log(reason)
            })
        }
    },
})*/

//组合式写法
const useTalkStore = defineStore("TalkStore", ()=>{
    //数据
    let talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) ||
        [{id:'001',content:'“我在找一条路”“春熙路？”“不是，阿姨洗铁路。”'}]
    )
    //方法
    function getTalk(){
        axios.get("https://api.uomg.com/api/rand.qinghua?format=json").then((res)=>{
            // console.log(res)
            let obj = {id:nanoid(),content:res.data.content};
            talkList.push(obj)
        }).catch(reason => {
            console.log(reason)
        })
    }
    return {talkList,getTalk}
})

export default useTalkStore;