import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callbackOn = action("on or off clicked")


export const OnMode = () => <UncontrolledOnOff  defaultOn={true} onChange={callbackOn}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false}  onChange={callbackOn}/>


