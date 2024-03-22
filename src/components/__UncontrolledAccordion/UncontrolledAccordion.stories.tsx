import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {UncontrolledAccordion} from './UncontrolledAccordion'

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clecked")

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"}/>
// export const UsersUnollapsedMode = () => <Accordion
//     titleValue={"Users"}
//     collapsed={false}
//     items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}]}
//     onChange={callback}
//     onClick={onClickCallback}/>
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <Accordion
//         titleValue={"Users"}
//         collapsed={value}
//         onChange={() => setValue(!value)}
//         items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}]}
//         onClick={onClickCallback}/>
// }