
export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    { name: "Oleg Petrov", age: 20},
    { name: "Dmitry Kaleinik", age: 32},
    { name: "Denis Sidorov", age: 30}
]

const transformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const developers = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Oleg", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Kaleinik"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Denis", lastName: "Sidorov"
    }
]
const devs = people.map(transformator);

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)
}