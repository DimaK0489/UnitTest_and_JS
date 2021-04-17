import React from "react";
import {CityType, ShoppingCentresType} from "../example_Obj/Example2";
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}
export const getBuildingsWithStaffCount = (buildings: Array<ShoppingCentresType>, staffCount: number) => {
    return buildings.filter(b => b.staffCount > staffCount)
}
