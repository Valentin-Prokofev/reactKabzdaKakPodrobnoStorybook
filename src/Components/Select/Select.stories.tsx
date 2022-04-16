import React, {useState} from 'react';
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "../Accordion/Accodrion";

export default {
    title: 'Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>


export const ExampleChangeValue1: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState("2")
    return <Select {...args} value={value} onChange={setValue}/>
}
ExampleChangeValue1.args = {
    onChange:action("value changed"),
    value: "1",
    items:[{value:"1", title:"Dmitry"},
        {value:"2", title:"Valentin"},
        {value:"3", title:"Roma"}]
}



export const ExampleNoChangeValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null)
    return <Select {...args} value={value} onChange={setValue}/>
}
ExampleNoChangeValue.args = {
    onChange:action("value changed"),
    items:[{value:"1", title:"Dmitry"},
        {value:"2", title:"Valentin"},
        {value:"3", title:"Roma"}]
}



