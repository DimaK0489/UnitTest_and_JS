import React, {useState} from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<LessonType>,
    address: {
        street: {
            title: string
        }
    }
}
type LessonType = {
    title: string
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useNewState(message: string) {
    return [ message, function () {}]
}
export const manComponent: React.FC<PropsType> = ({title,man, ...props}) => {
    //const {title, man} = props;

    //const [message, setMessage] = useNewState("hello");
    const [message, setMessage] = useState("hello");

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
    </div>
}