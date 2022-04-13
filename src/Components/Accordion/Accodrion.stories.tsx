import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accodrion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode changed event fired  ")

export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} callBack={callback}/>
export const UsersUnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} callBack={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Users"} collapsed={value} callBack={()=>setValue(!value)}/>
}

