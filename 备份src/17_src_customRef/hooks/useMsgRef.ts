import {customRef} from "vue";

export default function useMsgRef<T>(initValue: T,delay:number){
    let timer:number
    let msg = customRef((track, trigger)=>{
        return {
            get(){
                track() // 告诉Vue数据msg很重要，要对msg持续跟踪，一旦变化就更新
                return initValue
            },
            set(value){
                //防抖
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    initValue = value
                    trigger() //通知Vue数据msg变化了
                },delay)
            }
        }
    })
    return {msg}
}