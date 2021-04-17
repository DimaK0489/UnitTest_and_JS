import {CityType} from "../example_Obj/Example2";
import {addMoneyToBudget, createMessage, repairHouse, toCenterGippoStaff, toCenterGreenStaff} from "./Example3";

let city: CityType;
beforeEach(() => {
    city = {
        title: "Minsk",
        houses: [
            {
                buildedAt: 2015, repaired: true,
                address: {number: 100, street: {title: "Goretskogo"}}
            },
            {
                buildedAt: 2010, repaired: false,
                address: {number: 25, street: {title: "Sharongovicha"}}
            },
            {
                buildedAt: 2020, repaired: true,
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
test("budget should be changed for GIPPO", () => {
    addMoneyToBudget(city.shoppingCentres[0], 200000);

    expect(city.shoppingCentres[0].budget).toBe(400000);
})
test("budget should be changed for GREEN", () => {
    addMoneyToBudget(city.shoppingCentres[1], -200000);

    expect(city.shoppingCentres[1].budget).toBe(300000);
})
test("Houses should be destroyed", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})
test("staff should be increased", () => {
    toCenterGippoStaff(city.shoppingCentres[0],50);
    expect(city.shoppingCentres[0].staffCount).toBe(150)
})
test("house should be repaired", () => {
    toCenterGreenStaff(city.shoppingCentres[1],50);
    expect(city.shoppingCentres[1].staffCount).toBe(1050)
})
test("Greeting message should be correct for city", () => {
    expect(createMessage(city)).toBe("Hello Minsk")
})