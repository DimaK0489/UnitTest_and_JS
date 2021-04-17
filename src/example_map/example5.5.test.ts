import React from "react";
import {createGreetingMessage, ManType} from "./example5";
import {CityType} from "../example_Obj/Example2";
import {createMessages, getStreetsTitle, getStreetsTitleOfHouses} from "./example5.5";

let city: CityType;
beforeEach(() => {
    city = {
        title: "Minsk",
        houses: [
            {
                id: 1, buildedAt: 2015, repaired: true,
                address: {number: 100, street: {title: "Goretskogo"}}
            },
            {
                id: 2, buildedAt: 2010, repaired: false,
                address: {number: 25, street: {title: "Sharongovicha"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: true,
                address: {number: 200, street: {title: "Semenako"}}
            }],
        shoppingCentres: [
            {
                type: "GIPPO", budget: 200000, staffCount: 200,
                address: {
                    street:
                        {title: "Malinovka"}
                }
            },
            {
                type: "GREEN", budget: 500000, staffCount: 1000,
                address: {
                    street:
                        {title: "Pritizkogo"}
                }
            }
        ],
        citizensNumber: 2000000
    }
})
test("list of streets title of shoppingCentres", () => {
    let streetsName = getStreetsTitle(city.shoppingCentres)
    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe("Malinovka")
    expect(streetsName[1]).toBe("Pritizkogo")
})
test("list of streets titles", () => {
    let streetsName = getStreetsTitleOfHouses(city.houses)
    expect(streetsName.length).toBe(3);
    expect(streetsName[0]).toBe("Goretskogo")
    expect(streetsName[1]).toBe("Sharongovicha")
})
test("create greetings messages streets", () => {
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from Goretskogo")
    expect(messages[1]).toBe("Hello guys from Sharongovicha")
    expect(messages[2]).toBe("Hello guys from Semenako")
})