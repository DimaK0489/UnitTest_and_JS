import {CityType, HousesType, ShoppingCentresType} from "../example_Obj/Example2";

const sum = (a:number, b:number) => {
    return a + b;
}
export const addSkill = (student: StudentType, skill: string) => {
    student.tehnologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}
export const liveStudent = (st: StudentType, cityName: string) => {
    return st.address.city.title  === cityName;
}
export const addMoneyToBudget = (building: ShoppingCentresType, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (houseType: HousesType) => {
    houseType.repaired = true
}
export const toCenterGippoStaff = (building: ShoppingCentresType, staffGippo: number) => {
    building.staffCount -= staffGippo
}
export const toCenterGreenStaff = (building: ShoppingCentresType, staffGreen: number) => {
    building.staffCount += staffGreen
}
export const createMessage = (props: CityType) => {
    return `Hello ${props.title}`
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string,
    age: number
    isActive: boolean
    address: AddressType
    tehnologies: TechnologiesType[]
}
export const student: StudentType = {
    id: 1,
    name: "Dima",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Goretskogo 1",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    tehnologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"},
    ]
}
