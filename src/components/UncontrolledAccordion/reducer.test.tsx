import {useReducer} from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
test ('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})

test ('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})

test ('collapsed should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    //если ошибка то проходит
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})