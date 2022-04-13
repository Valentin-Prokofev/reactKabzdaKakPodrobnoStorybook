import React, {useState} from 'react';

import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => <OnOff press={true} callBack={callback}/>
export const OffMode = () => <OnOff press={false} callBack={callback}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
    return <OnOff press={value} callBack={setValue}/>
}

