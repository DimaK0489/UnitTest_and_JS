// class DeleteUserAction {
//     constructor() {
//         this.type = "DELETE-USER";
//         this.payload = {
//             userId: userId
//         }
//     }
// }
//
// const action1 = new DeleteUserAction(1234)
// const action2 = new DeleteUserAction(4321)
// console.log(action1)
// console.log(action2)

class User {
    _name = ""
    constructor(name, site, dob) {
        this._name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }
    get name() {
        return this._name + "!!!"
    }
    set name (value) {
        this._name = value
    }
    hello() {
        this.counter ++;
        console.log(`I am ${this._name} from ${this.site}`)
    }
}
const u1 = new User("Dima", "it-incubator", new Date(1989,4,4))
const u2 = new User("Alena", "n-able", new Date(1990,3,23))
// console.log(u1);
// console.log(u2);
//console.log(u1.hello === User.prototype.hello)
u1.name = "Denis"
// let users = [u1,u2]
// users.forEach(u => u.hello())

class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob);
        this.tech = tech
    }
    code() {
        console.log(`I am ${this._name}, here is my ${this.tech} code: const sum = (a,b) => a+b`)
    }
    hello() {
        super.hello();
        console.log("Go away" + this._name)
    }
}
class Hacker extends Coder {
    constructor(a,b,c,d) {
        super();
        this.tech = "xxx"
        this.name = "xx"
    }
    code() {
        console.log(`I'll hack everything`)
    }
    // hello() {
    //     throw new Error("I am Hacker in the Dark")
    // }
}

const coder1 = new Coder("Dima-Coder", "it-incubator", new Date(1989,4,4),"React")
//coder1.hello();
const hacker = new Hacker("Dima-Coder", "it-incubator", new Date(1989,4,4),"React")
//hacker.code();

let users = [u1,u2,coder1,hacker]
users.forEach(u => u.hello())
