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
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("setTimeout example")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    })

    return <>
        Hello, counter: {counter}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("reset effect: " + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello,counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState("")
    console.log("Component rendered:" + text)

    useEffect(() => {
        console.log("WWWWWWWWW")
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState("")
    console.log("Component rendered:" + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText("3 second passed")
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}


