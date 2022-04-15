import React from "react";

type ItemType = {
    title: string
    value: any
}

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
    items?: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div className={"app-title"}>
            <AccordionTitle title={props.title} callBack={props.callBack} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 style={{color: props.color ? props.color : "red"}} className={"accordion-title"}
                onClick={(e) => props.callBack()}>{props.title}</h3>
        </>
    )
}

export type AccordionBodyPropsType = {
    items?: ItemType[]
    onClick: (value: any) => void | undefined
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <>
            <ul>
                {props.items?.map((i, index) => <li onClick={() => {
                    props.onClick(i.value)
                }} key={index}>{i.title}</li>)}
            </ul>
        </>
    )
}