import React, {useState} from 'react';

export const ReactMemo = () => {
    console.log("REACT.MEMO")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])
    
    const addUser = () => {
        const newUsers = [...users, "Sveta"+new Date().getTime()]
        setUsers(newUsers)
    }
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    );
};

const NewMessagesCounter = (props: { count: number }) => {
  return (
      <div>{props.count}</div>
  )
}

const UsersSecret = (props: {users: string[]}) => {
    console.log("Users")
    const usersList = props.users.map((u, i)=> {
        return <div key={i}>{u}</div>
    })
    return (
        <div>{usersList}</div>
    )
}
const Users = React.memo(UsersSecret)
