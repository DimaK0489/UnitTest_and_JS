import {CityType} from "./Example2";

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
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2015);
    expect(city.houses[0].repaired).toBe(true);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("Goretskogo")

    expect(city.houses[1].buildedAt).toBe(2010);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(25);
    expect(city.houses[1].address.street.title).toBe("Sharongovicha");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(true);
    expect(city.houses[2].address.number).toBe(200);
    expect(city.houses[2].address.street.title).toBe("Semenako");
})

test("There should be two shopping centres in the city", () => {
    expect(city.shoppingCentres.length).toBe(2);

    expect(city.shoppingCentres[0].type).toBe("GIPPO");
    expect(city.shoppingCentres[0].budget).toBe(200000);
    expect(city.shoppingCentres[0].staffCount).toBe(200);
    expect(city.shoppingCentres[0].address.street.title).toBe("Malinovka");

    expect(city.shoppingCentres[1].type).toBe("GREEN");
    expect(city.shoppingCentres[1].budget).toBe(500000);
    expect(city.shoppingCentres[1].staffCount).toBe(1000);
    expect(city.shoppingCentres[1].address.street.title).toBe("Pritizkogo");
})
