export type ToggleAccordionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ToggleAccordionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-MENU':
        return {
            ...state,
            collapsed: !state.collapsed
        }
        default:
            throw new Error('Bad action type')
    }
    return state
}