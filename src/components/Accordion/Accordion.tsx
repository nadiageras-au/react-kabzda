import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props:AccordionPropsType) {

    return (<div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>

    )
}

function AccordionTitle(props:any) {
    return <h2>{props.title}</h2>
}

function AccordionBody() {
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>;
}

export default Accordion;