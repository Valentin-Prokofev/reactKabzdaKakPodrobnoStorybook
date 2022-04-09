import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accodrion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccodrion";
import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";
import {OnOff} from "./Components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [press, setPress] = useState<boolean>(false)

    const changeRatingValue = (value: RatingValueType) => {
        setRatingValue(value)
    }
    const changeCollapsedValue = () => {
        setCollapsed(!collapsed)
    }
    const changePressValue = (press: boolean) => {
        setPress(press)
    }

    return (
        <div className={"app"}>
            <PageTitle title={"Component"} class={"red"}/>
            <PageTitle title={"Компонент"} class={"blue"}/>
            <Accordion
                title={"Accordion1"}
                collapsed={collapsed}
                callBack={changeCollapsedValue}
            />
            <UncontrolledAccordion title={"UncontrolledAccordion1"}/>

            <Rating value={ratingValue} callBack={changeRatingValue}/>
            <UncontrolledRating/>

            <OnOff press={press} callBack={(press) => changePressValue(press)}/>
            <UncontrolledOnOff onChange={setPress}/> {press.toString()}
        </div>
    );
}


type PageTitlePropsType = {
    title: string
    class: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div className={"app-title"}>
            <h1 className={props.class}>{props.title}</h1>
        </div>
    )
}

export default App;
