import React, {ChangeEvent, useRef, useState} from 'react';

export type InputPropsType = {
    title: string
    comingValue?: string
    test?: boolean
}

export const Input = (props: InputPropsType) => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    
    const saveButton = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return props.test
        ? <><h3>{props.title}</h3>
            <input value={props.comingValue ? props.comingValue : value} onChange={onChangeHandler}/></>
        : <><h3>{props.title}</h3><input ref={inputRef}/>
            <button onClick={saveButton}>+
            </button>
            actual value:{value}</>


    {/*<h3>{props.title}</h3>*/
    }
    {/*<input value={props.comingValue?props.comingValue:value}  onChange={onChangeHandler}/>*/
    }
    {/*<button onClick={()=>{setValue("yo")}}>+</button> actual value:{value}*/
    }


};
