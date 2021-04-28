// const deleteUser = (userId) => {
//     const action = {
//         type: "DELETE-USER",
//         payload: {
//             userId: userId
//         }
//     }
//     return action;
// }
// const action1 = deleteUser("1234");
// const action2 = deleteUser("4321");
// console.log(action1);
// console.log(action2);
const userFabric = (name) => {
    const user = {
        name: name,
        site: "it-incubator",
        dateOfBirth: new Date(1989,4,4),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}
const u1 = userFabric("Dima")
const u2 = userFabric("Alena")
console.log(u1);
console.log(u2);