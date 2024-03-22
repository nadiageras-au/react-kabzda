import {reducer, StateType} from "./reducer";

test('collapsed should be true', ()=> {
    //date
    const state: StateType = {
        collapsed: false
    }


    //action
const newState = reducer(state, {type: 'TOGGLE-MENU'})
    //expectation
    expect(newState.collapsed).toBe(true);
})

test('not existing action should throw error', ()=> {
    //date
    const state: StateType = {
        collapsed: true
    }

    expect( ()=> {
        reducer(state, {type: 'TOGGLE-MENU'})
    }).toThrowError();


})