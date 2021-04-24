
//pending
const promise1 = axios.get("http://google.com")
promise1
    .then( (data) => {
    console.log(data)
})
    .catch( () => {})

//pending
/*const promise2 = findUserInDB(1)
promise2.then( (user) => {
    //resolved
    console.log(user)
})*/
const promise3 = findUserInDB(100)
promise3
    .then( (user) => {console.log(user)})
    .catch( (error) => {
    console.log(error)
})
    .finally(() => {console.log("finish")})
console.log("finish")

//const otherPromise = Promise.all([promise1,promise3])
const otherPromise2 = Promise.allSettled([promise1,promise3])
otherPromise2
    .then( (result) => {
        const  dataFromGoogle = result[0].status === "fulfilled"
            ? result[0].value
            : {data: {vacancies: null}}
        const  userFromDB = result[1].status === "fulfilled"
            ? result[1].value
            : {name: result[1].reason}
        console.log(dataFromGoogle.data.vacancies + "; " + userFromDB.name)
    })
    .catch( () => {
        console.log("initialization failed, Try Later")
    })
// otherPromise
//     .then( (result) => {
//         const  dataFromGoogle = result[0]
//         const  userFromDB = result[1]
//     console.log(dataFromGoogle.data.vacancies + "; " + userFromDB.name)
// })
//     .catch( () => {
//         console.log("initialization failed, Try Later")
//     })