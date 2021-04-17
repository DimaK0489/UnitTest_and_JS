import React from "react";
import {HousesType, ShoppingCentresType} from "../example_Obj/Example2";

export const getStreetsTitle = (centres: Array<ShoppingCentresType>) => {
    return centres.map(c => c.address.street.title)
}
export const getStreetsTitleOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}
export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}