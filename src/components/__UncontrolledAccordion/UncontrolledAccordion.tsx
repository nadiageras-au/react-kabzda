import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    //const collapsed = true

    const [collapsed, setCollapsed] = useState(true)

    return (<div>
            <AccordionTitle title={props.titleValue}
                            onClickTitle={()=>setCollapsed(!collapsed)}
            />
            { !collapsed && <AccordionBody/>}
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
