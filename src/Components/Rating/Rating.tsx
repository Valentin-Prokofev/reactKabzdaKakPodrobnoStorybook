import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    callBack:(value:RatingValueType)=>void
}


export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} callBack={()=>props.callBack(1)}/>
            <Star selected={props.value > 1} callBack={()=>props.callBack(2)}/>
            <Star selected={props.value > 2} callBack={()=>props.callBack(3)}/>
            <Star selected={props.value > 3} callBack={()=>props.callBack(4)}/>
            <Star selected={props.value > 4} callBack={()=>props.callBack(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    callBack:()=>void
}

function Star(props: StarPropsType) {
    return <span className={"star"}
                 onClick={props.callBack}
    >{props.selected?<b>star</b>:"star"}</span>
}