
//examples of the use of promise
/*
const resolvedPromise = Promise.resolve([{}])
resolvedPromise
    .then( data => console.log(data))
    .catch( error => console.warn(error))*/

/*const rejectedPromise = Promise.reject({message: "Some error"})
rejectedPromise
    .then( data => console.log(data))
    .catch( error => console.warn(error))*/

const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "Dima"}, {name: "Alena"}])
    },
    login(login, password) {
        if(login !== "123" && password !== "122") {
            return Promise.reject({message: "Incorrect Login and password"})
        }else {
            return Promise.resolve({name: "Dima", id: 1})
        }
    }
}
 const pr = userAPI.getAllUsers()
 pr.then(users => console.log(users))

userAPI.login("123", "343")
    .then( () => {
        // makeRedirect
    })
    .catch( error => {
        // show Error
    })