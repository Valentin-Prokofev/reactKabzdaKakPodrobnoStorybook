import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accodrion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
    argsTypes: {
        color: {
            control: "color",
            table: {
                category: "Colors"
            }
        },
        callBack:{
            table: {
                category: "Events"
            }
        },
        onclick:{
            table: {
                category: "Events"
            }
        }
    }
};

const callback = action("accordion mode changed event fired  ")
const onClickCallback = action("some item was clicked  ")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksPropsType = {
    callBack: callback,
    onclick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksPropsType,
    title: 'Menu',
    collapsed: true,
    items:[]
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksPropsType,
    title: 'Users',
    collapsed: false,
    items:[{title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Sasha", value: 3},
        {title: "Vasya", value: 4}]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        {...args}
        collapsed={value}
        callBack={() => setValue(!value)}
        />
}
ModeChanging.args = {
    title: "Users",
    items:[{title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Sasha", value: 3},
        {title: "Vasya", value: 4}]
}

