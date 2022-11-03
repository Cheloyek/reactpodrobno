type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

//через useReducer в reducer передается action - dispatch(type: string), если type совпадает то return !state (!true или !false) - свернет меню
export const reducer = (state: StateType, action: ActionType): StateType => {
    // debugger
    // console.log('REDUCER START:')
    // console.log(state)
    // console.log(action)
    // console.log('REDUCER END')

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const stateCopy = {...state}
            // stateCopy.collapsed = !state.collapsed
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            //
            console.log(stateCopy)
            return stateCopy
        default:
            throw new Error('Bad action type')
    }
    return state
}