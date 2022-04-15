import React, {ChangeEvent, useState} from 'react';
import {Input, InputPropsType} from "./Input";
import {Story} from "@storybook/react";
import {Accordion, AccordionPropsType} from "../Accordion/Accodrion";

export default {
    title: "Input",
    component: Input
};

const Template: Story<InputPropsType> = (args) => <Input {...args}/>
export const UncontrolledInput = Template.bind({})
UncontrolledInput.args = {
    title: "Sex"
}

export const ControlledInputWithFixedValue = Template.bind({})
ControlledInputWithFixedValue.args = {
    title: "Drugs",
    comingValue: "drugs"
}

export const TrackValueOfUnControlledInput: Story<InputPropsType> = (args) => {

    return <Input title={"Rock and Roll"} test={true}/>
}

export const GetValueOfUncontrolledInputByButtonPress: Story<InputPropsType> = (args) => {

    return <><Input title={"Button"} test={false}/>
    </>
}

export const ControlledInput: Story<InputPropsType> = (args) => {
    return (
        <>
            <Input/>
        </>
    )
}



