import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    // const onClickCollapsedHandler = () => setCollapsed(!collapsed)

    return (
        <div className={"app-title"}>
            <AccordionTitle title={props.title} callBack={()=>{dispatch({type:TOGGLE_COLLAPSED})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 className={"accordion-title"} onClick={props.callBack}>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}