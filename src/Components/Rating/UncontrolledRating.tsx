import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue] = useState(0)

    const changeRatingValue = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} callBack={() => changeRatingValue(1)}/>
            <Star selected={value > 1} callBack={() => changeRatingValue(2)}/>
            <Star selected={value > 2} callBack={() => changeRatingValue(3)}/>
            <Star selected={value > 3} callBack={() => changeRatingValue(4)}/>
            <Star selected={value > 4} callBack={() => changeRatingValue(5)}/>
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