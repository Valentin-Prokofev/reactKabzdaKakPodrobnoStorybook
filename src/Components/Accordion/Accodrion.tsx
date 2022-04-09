import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    callBack: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div className={"app-title"}>
            <AccordionTitle title={props.title} callBack={props.callBack}/>
            {!props.collapsed && <AccordionBody/>}
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