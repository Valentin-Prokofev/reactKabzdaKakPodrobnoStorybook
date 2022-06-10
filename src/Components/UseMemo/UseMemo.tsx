import React, {useMemo, useState} from 'react';

export const UseMemo = () => {
    let [a, setA] = useState<number>(5)
    let [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        a<input type="text" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        b<input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>result for a: {resultA}</div>
        <div>result for b: {resultB}</div>
    </>
};
