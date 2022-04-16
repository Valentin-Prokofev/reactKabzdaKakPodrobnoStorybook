import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accodrion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledOnOff} from "./Components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccodrion";
import {UncontrolledRating} from "./Components/Rating/UncontrolledRating";
import {OnOff} from "./Components/OnOff/OnOff";
import {Input} from "./Components/Input/Input";
import {ControlledInput} from "./Components/ControlledInput/ControlledInput";


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
            <Accordion onClick={()=>{}}
                title={"Accordion1"}
                collapsed={collapsed}
                callBack={changeCollapsedValue}
            />
            <UncontrolledAccordion title={"UncontrolledAccordion1"}/>

            <Rating value={ratingValue} callBack={changeRatingValue}/>
            <UncontrolledRating onChange={a => a}/>

            <OnOff press={press} callBack={(press) => changePressValue(press)}/>
            {/*<UncontrolledOnOff onChange={setPress}/> {press.toString()}*/}
            <Input title={"Suck"}/>
            <ControlledInput/>
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
