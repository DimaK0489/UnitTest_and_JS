import React from "react";

type UserType = {
    name: string
    age: number
    address: {title: string}
}
const increaseAge = (u: UserType) => {
    u.age = u.age + 1;
}
test("reference type test", () => {
    let user: UserType = {
        name: "Dima",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    increaseAge(user);
    expect(user.age).toBe(33)

    const superMan = user;
    superMan.age = 1000;
    expect(user.age).toBe(1000)
})
test("array test", () => {
    let users = [
        {
            name: "Dima",
            age: 32
        },
        {
            name: "Alena",
            age: 31
        }
    ]
    let admins = users
    admins.push({name: 'Denis', age: 30})

    expect(users[2]).toEqual({name: 'Denis', age: 30})
})
test("value type test", () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount += 1;

    expect(usersCount).toBe(100)
})
test("reference type test2", () => {
    const address = {
        title: "Minsk"
    }
    let user: UserType = {
        name: "Dima",
        age: 32,
        address: address
    }
    let  user2: UserType = {
        name: "Alena",
        age: 30,
        address: user.address
    }
    address.title = "USA";

    expect(user.address.title).toBe("USA")
    expect(user.address).toBe(user2.address)
})
test("reference type array test", () => {
    const address = {
        title: "Minsk"
    }
    let user: UserType = {
        name: "Dima",
        age: 32,
        address: address
    }
    let  user2: UserType = {
        name: "Alena",
        age: 30,
        address: user.address
    }
    const users = [ user, user2, {name:"Denis", age: 10, address: address}]
    const admins = [user, user2]
    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")
})
test("sort array test", () => {
    const letters = ["a", "c", "w", "u","k"]

    letters.sort();

    expect(letters).toEqual(["a", "c", "k", "u", "w"])
})