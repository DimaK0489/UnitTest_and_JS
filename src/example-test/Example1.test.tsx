import {Multiply, splitIntoWords, Sum} from "./Example1";

//date
// const a = 1;
// const b = 2;
// const c = 3;

let a: number
let b: number
let c: number
beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result1 = Sum(a,b)
    const result2 = Sum(b,c)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test("multiply should be correct", () => {

    const result1 = Multiply(a,c);
    const result2 = Multiply(b,c);

    expect(result1).toBe(4)
    expect(result2).toBe(5)
})
test("splitIntoWords should be correct", () => {
    const sent1 = "Hello my friends!"

    const result1 = splitIntoWords(sent1);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

})