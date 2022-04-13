import React, {useState} from "react";
import {RatingValueType} from "./Rating";

export type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}


export function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    const changeRatingValue = (value: RatingValueType) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} callBack={() => {
                changeRatingValue(1);
                props.onChange(1)
            }}/>
            <Star selected={value > 1} callBack={() => {
                changeRatingValue(2);
                props.onChange(2)
            }}/>
            <Star selected={value > 2} callBack={() => {
                changeRatingValue(3);
                props.onChange(3)
            }}/>
            <Star selected={value > 3} callBack={() => {
                changeRatingValue(4);
                props.onChange(4)
            }}/>
            <Star selected={value > 4} callBack={() => {
                changeRatingValue(5);
                props.onChange(5)
            }}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {

    return <span className={"star"} onClick={props.callBack}>
        {props.selected ? <b>star</b> : "star"}
    </span>

}