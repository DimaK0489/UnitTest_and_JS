import React from "react";
import {
    addNewBooksToUser, makeHairstyle, moveUser,
    moveUserToOtherHouse, removeBook, updateBook,
    updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop, UserType, UserWithBooksType, UserWithLaptopType, WithCompaniesType
} from "./example10";

test("reference type test", () => {
    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        }
    }
    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})
test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        }
    }
    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop.title).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Asus")

})
test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        },
        books: ["HTML", "CSS", "JS", "REACT"]
    }
    const userCopy = moveUserToOtherHouse(user, 100)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop.title).not.toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(100)

})
test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        },
        books: ["HTML", "CSS", "JS", "REACT"]
    }
    const userCopy = addNewBooksToUser(user, "TS")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("TS")
    expect(user.books.length).toBe(4)
})
test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        },
        books: ["html", "css", "js", "react"]
    }
    const userCopy = updateBook(user, 'js', "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})
test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        },
        books: ["html", "css", "js", "react"]
    }
    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})
test("update title company", () => {
    let user: UserWithLaptopType & WithCompaniesType= {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 1
        },
        laptop: {
            title: "Asus"
        },
        companies: [{id: 1, title: "Is-Soft"}, {id:2, title:"Exadel"}]
    }
    const userCopy = updateCompanyTitle(user, 1, "IS-SOFT")

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe("IS-SOFT")
})
test("update company", () => {
    let companies = {
        "Dima": [{id: 1, title: "Is-Soft"}, {id: 2, title: "Exadel"}],
        "Alena": [{id: 1, title: "N-ABLE"}]
    }
    const copy = updateCompanyTitle2(companies,"Dima", 1, "IS-SOFT")

    expect(copy["Dima"]).not.toBe(companies["Dima"])
    expect(copy["Alena"]).toBe(companies["Alena"])
    expect(copy["Dima"][0].title).toBe("IS-SOFT")
})