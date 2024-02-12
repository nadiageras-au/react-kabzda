import React, {ChangeEvent, useRef, useState} from 'react';
//import { action } from "@storybook/addon-essentials"
import { action } from "@storybook/addon-actions"
import type {Meta, StoryObj} from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export default {
    title: 'input',
    //component: input
}
export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState("")
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
        return <> <input onChange={onChangeHandler}/> - {value}</>

}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.value)}

        return <input value={parentValue} onChange={onChangeHandler} />

}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.checked)}

    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler} />

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('2')
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=> {setParentValue(e.currentTarget.value)}

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Brisbane</option>
        <option value={'2'}>Sydney</option>
        <option value={'3'}>Melbourne</option>
        <option value={'4'}>Moscow</option>
    </select>

}

export const ControlledTextarea = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {setParentValue(e.currentTarget.value)}

    return <textarea value={parentValue} onChange={onChangeHandler} />

}



export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=> {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
    }
    return <> <input ref={inputRef} /> <button onClick={ save }>save</button> - actual value: {value}</>

}
export const ControlledInputWithFixedValue = () => <input value={"tut moe message"}/>


