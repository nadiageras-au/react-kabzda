import React, {memo, useMemo, useState} from "react";
import {ItemType, Select} from "../components/Select/Select";


export default {
    title: "MemoHelpsSelect",
    component: Select
}

type SelectItemType = {
    country: string
    title: string
    value: any
}
//
// type SelectProps = {
//     value?: any
//     onChange: (value: any) => void
//     items: SelectItemType[]
// }


export const MemoHelpsSelect = () => {
    console.log('MemoHelpsSelect')
    const [counter, setCounter] = useState(0)

    const [value, setValue] = useState('2')
    const [value2, setValue2] = useState('1')

    const [cities, setCities] = useState<ItemType[]>([
        {country: 'Russia', title: 'Moscow', value: "1"},
        {country: 'Russia', title: 'Vladivostok', value: "2"},
        {country: 'Russia', title: 'Omsk', value: "3"},
        {country: 'Ukraine', title: 'Kiev', value: "4"},
        {country: 'Ukraine', title: 'Harkov', value: "5"},
        {country: 'Ukraine', title: 'Odessa', value: "6"},
        {country: 'Belorus', title: 'Minsk', value: "7"},
        {country: 'Belorus', title: 'Gomel', value: "8"},
        {country: 'Australia', title: 'Sydney', value: "9"},
        {country: 'Australia', title: 'Brisbane', value: "10"},
        {country: 'Australia', title: 'Perth', value: "11"},
    ])

    const ausCities = useMemo(() => {
        console.log('ausCities')
        return cities.filter(c => c.country === 'Australia')
    }, [cities])


    const citiesWithN = useMemo(() => {
        console.log('aus')
        return cities.filter(c => c.title.toLowerCase().indexOf("n") > -1)
    }, [cities])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <div style={{display: "flex", gap: "50px"}}>
            <Select id="1"
                    value={value}
                    items={ausCities}
                    onChange={setValue}
            />

            <Select id="2"
                    value={value2}
                    items={citiesWithN}
                    onChange={setValue2}
            />
        </div>


    </>

}


