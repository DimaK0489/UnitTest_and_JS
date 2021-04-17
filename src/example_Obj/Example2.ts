
export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    shoppingCentres: Array<ShoppingCentresType>
    citizensNumber: number
}
export type ShoppingCentresType = {
    type: "GIPPO" | "GREEN"
    budget: number
    staffCount: number
    address: AddressType
}


