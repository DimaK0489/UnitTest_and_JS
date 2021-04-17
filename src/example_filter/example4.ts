import React from "react";
const ages = [10,45,1,32,3,100];
export const predicate = (age: number) => {
    return age > 90;
}

export type CourseType = {
    title: string
    price: number
}
export const courses = [
    {title: "React", price: 100},
    {title: "JS", price: 200},
    {title: "HTML", price: 50},
]
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}
