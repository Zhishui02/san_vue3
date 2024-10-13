import {ref} from "vue";

export default function useSum(){
    //数据
    let sum = ref(0)
    //方法
    function addSum(){
        sum.value++
    }
    //返回数据
    return {sum,addSum}
}
