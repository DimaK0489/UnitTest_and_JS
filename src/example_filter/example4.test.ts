import React from "react";
import {predicate} from "./example4";

test("should take old men older then 90", () => {
    const ages = [10,45,1,32,3,100];
    const oldAges1 = ages.filter(predicate);
    const oldAges = ages.filter(a => a > 90);
    expect(oldAges[0]).toBe(100)
    expect(oldAges1[0]).toBe(100)
})
test("should take courses chipped 160", () => {
    const courses = [
        {title: "React", price: 100},
        {title: "JS", price: 200},
        {title: "HTML", price: 50},
    ]

    const chipCourse = courses.filter(c => c.price < 160)

    expect(chipCourse.length).toBe(2);
    expect(chipCourse[0].title).toBe("React")
    expect(chipCourse[1].title).toBe("HTML")
})
test("get only completed task", () => {
    const task = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Juice", isDone: false},
        {id: 3, title: "Milk", isDone: true},
        {id: 4, title: "Paper", isDone: true},
        {id: 5, title: "Tea", isDone: false}
    ]

    const completedTasks = task.filter(t => t.isDone === true)
    const unCmpletedTasks = task.filter(t => !t.isDone )

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(3)
    expect(completedTasks[1].id).toBe(4)

    expect(unCmpletedTasks.length).toBe(3)
    expect(unCmpletedTasks[0].id).toBe(1)
    expect(unCmpletedTasks[1].id).toBe(2)
})