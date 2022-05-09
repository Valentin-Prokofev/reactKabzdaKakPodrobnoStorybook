import React, {useEffect, useState} from "react";

export default {
    title: "Use Effect demo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("simple example")

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
        //api.getUsers().then("")
        //setInterval
        //indexedBD
        //document.getElementId
        //document.title = "User"
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("setTimeout example")

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    })



    return <>
        Hello, {counter}
        Hello, {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}

