import {ref} from "vue";
import axios from "axios";

export default function useDog() {
    //数据
    let dogList = ref([''])
    //方法
    function addDog(){
        axios.get('https://dog.ceo/api/breed/pembroke/images/random').then((res)=>{
            // console.log(res)
            dogList.value.push(res.data.message)
        }).catch(reason => {
            console.log(reason)
        })
    }
    //返回数据
    return {dogList,addDog}
}
