import React, {useEffect, useState} from "react";

export default {
    title: 'UseState'
}
export const useEffectWithSideEffect = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    // console.log('useEffectWithSideEffect')

    //1. Срабатывает при каждом render
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    }, )

    //2. Срабатывает только при вмонтировании (при первом render)
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    //3. Срабатывает при изменении counter
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        {counter} {fake}
    </>
}

export const setTimeoutExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('setTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        {counter} {fake}
    </>
}

//timer
export const setIntervalExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('setIntervalExample')

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval')
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        counter: {counter}
    </>
}

//часы

