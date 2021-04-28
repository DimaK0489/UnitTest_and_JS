// function DeleteUserAction(userId) {
//     // this = {}
//     this.type = "DELETE-USER";
//     this.payload = {
//         userId: userId
//     }
//     //return this;
// }
// const action1 = new DeleteUserAction(1234)
// const action2 = new DeleteUserAction(4321)
// console.log(action1)
// console.log(action2)

function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}
User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User("Dima", "it-incubator", new Date(1989,4,4))
const u2 = new User("Alena", "n-able", new Date(1990,3,23))
u1.hello();
u2.hello();