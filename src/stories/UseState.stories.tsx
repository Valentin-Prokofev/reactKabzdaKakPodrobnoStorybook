import React, {useState} from "react";

export default {
    title: "Use state demo"
}

function generateData() {
    console.log("generate data")
    return 1
}

export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}

