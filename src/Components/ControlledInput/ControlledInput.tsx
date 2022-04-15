import React from 'react';


export type ControlledInputPropsType = {
    title?:string
    value?:string
    onChange?:()=>void
}

export const ControlledInput = (props:ControlledInputPropsType) => {
    return (
        <div>
            <input value={props.title}/>
        </div>
    );
};


