import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
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
        let intervalId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

        return
        clearInterval(intervalId)

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
        const intervalId = setInterval(() => {
            console.log('setInterval')
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        counter: {counter}
    </>
}

//счетчик h-m-s

export const setTimes = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)


    useEffect(() => {

        setInterval(() => {
            setSeconds((state) => state + 1)
        }, 1000)

    },[])

    useEffect(() => {
        setInterval(() => {
            setMinutes((state) => state + 1)
        }, 60000)

    },[])

    useEffect(() => {

        setInterval(() => {
            let time = new Date()
            var dateHours = time.getHours()

            setHours((state) => state + 1)
        }, 3600000)

    },[])

    return (
        <div>
            hours: {hours} minutes: {minutes} seconds: {seconds}
        </div>
    )
}

export const setActualTimes = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    let time = new Date()
    let dateHours = time.getHours()
    let dateMinutes = time.getMinutes()
    let dateSeconds = time.getSeconds()



    useEffect(() => {
        setInterval(() => {
            setSeconds((state) => dateSeconds)
        }, 1000)

    },)

    useEffect(() => {
        setInterval(() => {
            setMinutes((state) => dateMinutes)
        }, 1000)

    },)

    useEffect(() => {
        setInterval(() => {
            setHours((state) => dateHours)
        }, 1000)

    },)

    return (
        <div>
            <div>Actual times</div>
            hours: {hours} minutes: {minutes} seconds: {seconds}
        </div>
    )
}

//example useEffect return reset
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered ' + counter)

    useEffect( () => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    return <>
        <button onClick={() => {
        setCounter(counter + 1)}
        }>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered ' + text)

    useEffect( () => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}