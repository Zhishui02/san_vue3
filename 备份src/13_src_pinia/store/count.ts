import {defineStore} from 'pinia'

const useCountStore = defineStore('count',{
    //状态 data
    state() {
        return {
            sum:1,
            name:'Miku',
            address:'世界第一公主殿下'
        }
    },
    //计算 computed
    getters:{
        bigSum():number{
            return this.sum * 10
        },
        toUpper():string{
            return this.name.toUpperCase();
        }
    },
    //动作 methods
    actions:{
        addStore(value:number){
            console.log('addStore被调用了',value)
            this.sum += value
            this.name = '初音未来'
            this.address = '初始之音,响彻未来'
        }
    },
})

export default useCountStore;