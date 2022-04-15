import React, {ChangeEvent, useState} from 'react';
import {Story} from "@storybook/react";
import {ControlledInput, ControlledInputPropsType} from "./ControlledInput";

export default {
    title: "ControlledInput",
    component: ControlledInput
};

const Template: Story<ControlledInputPropsType> = (args) => <ControlledInput {...args}/>
export const ControlledInputStories = Template.bind({})
ControlledInputStories.args = {
    title: "Sex"
}

export const ControlledInputStoriesVisual: Story<ControlledInputPropsType> = (args) => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox: Story<ControlledInputPropsType> = (args) => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue}  onChange={onChange}/>
}

export const ControlledSelected: Story<ControlledInputPropsType> = (args) => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>New York</option>
        <option value={"3"}>Chicago</option>
    </select>
}    