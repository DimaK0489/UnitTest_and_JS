import {CityType} from "../example_Obj/Example2";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCount} from "./example4.4";

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
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city,"Sharongovicha");

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(1)
})
test("building with correct staff count", () => {
    let buildings = getBuildingsWithStaffCount(city.shoppingCentres, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("GREEN")
})
