//接口限制类型
export interface PersonInter <T>{
    name: string,
    age: number,
    address: T,
}
// 自定义类型
// type Persons = Person<string>[]
export type Persons = Array<PersonInter<string>>
