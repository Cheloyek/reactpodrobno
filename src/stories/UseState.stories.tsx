import React, {useEffect, useState} from "react";

export default {
    title: 'UseState'
}

function generateData() {
    console.log('generateData')
    return 7777777777
}

export const Example1 = () => {
    console.log('example')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}