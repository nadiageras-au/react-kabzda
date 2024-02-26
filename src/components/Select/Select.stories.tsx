import type {Meta, StoryObj} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: "Select",
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <Select value={value}
                   items={[
                       {title: 'Moscow', value: "1"},
                       {title: 'Kiev', value: "2"},
                       {title: 'Minsk', value: "3"},
                       {title: 'Sydney', value: "4"}
                   ]}
                   onChange={setValue}
    />
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            items={[
                {title: 'Moscow', value: "1"},
                {title: 'Kiev', value: "2"},
                {title: 'Minsk', value: "3"},
                {title: 'Sydney', value: "4"}
            ]}
            onChange={setValue}
        />

    </>
}
