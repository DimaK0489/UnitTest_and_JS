import {addSkill, liveStudent, makeStudentActive, StudentType} from "./Example3";

let student: StudentType;
beforeEach( () => {
    student = {
        id: 1,
        name: "Dima",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Goretskogo 1",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        tehnologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "JS"},
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.tehnologies.length).toBe(3);

    addSkill(student,"React")

    expect(student.tehnologies.length).toBe(4);
    expect(student.tehnologies[3].title).toBe("React");
    expect(student.tehnologies[3].id).toBeDefined()
})
test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})
test("does student live in city", () => {

    let resut1 = liveStudent(student, "Minsk");
    let resut2 = liveStudent(student, "Moskow");

    expect(resut1).toBe(true);
    expect(resut2).toBe(false)
})