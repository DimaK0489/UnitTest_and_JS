import React from "react";
import {createGreetingMessage, ManType} from "./example5";

let people: Array<ManType> = []
beforeEach( () => {
    people = [
        { name: "Oleg Petrov", age: 20},
        { name: "Dmitry Kaleinik", age: 32},
        { name: "Denis Sidorov", age: 30}
    ]
})
test("should get array of greeting messages", () => {
    //const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Oleg. Welcom to IT-Incubator");
    expect(messages[1]).toBe("Hello Dmitry. Welcom to IT-Incubator");
    expect(messages[2]).toBe("Hello Denis. Welcom to IT-Incubator");
})