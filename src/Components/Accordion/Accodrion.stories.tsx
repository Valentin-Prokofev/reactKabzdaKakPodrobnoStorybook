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
const onClickCallback = action("accordion mode changed event fired  ")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksPropsType = {
    callBack: callback,
    onclick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksPropsType,
    title: 'Menu',
    collapsed: true
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksPropsType,
    title: 'Users',
    collapsed: false
}

// export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} callBack={callback}   Выпилили это в функцию выше
//                                                   onclick={onClickCallback}/>
// export const UsersUnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} callBack={callback}  Выпилили это в функцию выше
//                                                      onclick={onClickCallback}/>

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} callBack={() => setValue(!value)}/>
}

ModeChanging.args = {               //это типа из нового сторибука
    title: "Users"
}

