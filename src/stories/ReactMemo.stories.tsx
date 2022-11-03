import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret) // react memo отрисовывает только изменения

export const Example1 = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Name1', 'Name2', 'Name3'])

    const addUser = () => {
        const newUsers = [...users, 'Name']
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}