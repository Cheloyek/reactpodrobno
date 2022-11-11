import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


// export const Example1 = () => {
//
//
//     const [a, setA] = useState<number>(5)
//     const [b, setB] = useState<number>(5)
//
//     let resultA = 1
//     let resultB = 1
//
//     for(let i = 1; i <= a; i++) {
//         resultA = resultA * i
//     }
//     for(let i = 1; i <= b; i++) {
//             resultB = resultB * i
//         }
//
//     return <>
//         <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//         <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
//         <hr/>
//         <div>
//             Result for a: {resultA}
//         </div>
//         <div>
//             Result for b: {resultB}
//         </div>
//     </>
// }

export const DifficultCountingExample = () => {


    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret) // react memo отрисовывает только изменения

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Name1', 'Name2', 'Name3'])


    //useMemo (() => {}, [что перерисовывает]
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Name']
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'TS', 'HTML'])

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newBooks = [...books, 'Angular']
    //         setBooks(newBooks)
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular']
            setBooks(newBooks)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBooks={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBooks: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('Users')
    return <div>
        <button onClick={() => props.addBooks()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)
