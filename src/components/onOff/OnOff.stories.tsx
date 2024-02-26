import type {Meta, StoryObj} from '@storybook/react';

import {OnOff} from './OnOff'
import React, {useState} from "react";

export default {
    title: "OnOff",
    component: OnOff
}

export const OnOffDisabled = () => <OnOff onOff={false} onClick={()=>{}}/>
export const OnOffEnabled = () => <OnOff onOff={true} onClick={()=>{}}/>

export const ChangeOnOff = () => {
    let [onOff, setOnOff] = useState(false)
    return <OnOff onOff={onOff} onClick={setOnOff}/>
}