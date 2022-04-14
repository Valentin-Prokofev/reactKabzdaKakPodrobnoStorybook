import React from "react";

export type AccordionPropsType = {
    title: string
    /**
     * Elements collapsed "Menu"
     */
    collapsed: boolean
    callBack: () => void
    /**
     * optional Color of header text
     */
    color?: string
    onclick?: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div className={"app-title"}>
            <AccordionTitle title={props.title} callBack={props.callBack} color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
    color?:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 style={{color:props.color?props.color:"red"}} className={"accordion-title"} onClick={(e) => props.callBack()}>{props.title}</h3>
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