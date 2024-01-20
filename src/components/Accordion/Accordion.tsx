import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

    return (<div>

            <AccordionTitle title={props.titleValue}
           onChange={props.onChange} />
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

function AccordionTitle(props: any) {
    return <h2 onClick={props.onChange}>{props.title}</h2>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}

export default Accordion;