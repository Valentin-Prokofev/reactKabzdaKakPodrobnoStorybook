import React from 'react';
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>
export const ExampleChangeValue1 = Template.bind({})
ExampleChangeValue1.args = {
    onChange:action("value changed"),
    value: "1",
    items:[{value:"1", title:"Dmitry"},
        {value:"2", title:"Valentin"},
        {value:"3", title:"Roma"}]
}

export const ExampleNoChangeValue = Template.bind({})
ExampleNoChangeValue.args = {
    onChange:action("value changed"),
    items:[{value:"1", title:"Dmitry"},
        {value:"2", title:"Valentin"},
        {value:"3", title:"Roma"}]
}



