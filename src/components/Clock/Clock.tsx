import React, {useEffect, useState} from "react";
import internal from "stream";

type PropsType = {

}

const get2digitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const internalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(internalID) // stop tick when you go to another stories
        }

    },[])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>

}