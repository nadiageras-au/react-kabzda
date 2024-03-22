import React, {useReducer} from "react";
import {reducer} from "./reducer";



type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    //const collapsed = true
    //const [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (<div>
            <AccordionTitle title={props.titleValue}
                            onClickTitle={()=> {
                                dispatch({type: 'TOGGLE-MENU'})
                            }}
            />
            { !state.collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onClickTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={()=> props.onClickTitle()}>{props.title}</h2>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}
