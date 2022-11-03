import React, {useReducer, useState} from "react";

export type AccordionPropsType = {
    titleValue: string,
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

//через useReducer в reducer передается action - dispatch(type: string), если type совпадает то return !state (!true или !false) - свернет меню
const reducer = (state: boolean, action: ActionType) => {
    // debugger
    // console.log('REDUCER START:')
    // console.log(state)
    // console.log(action)
    // console.log('REDUCER END')

    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Bad action type')
    }
    return state
}

//     if (action.type === TOGGLE_CONSTANT) {
//         return !state
//     }
//     return state
// }


//снаружи не передается то, что контролирует его состояние
//collapsed - если true не покажет AccordionBody {props.collapsed === false && <AccordionBody/>}
function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
        //неконтролируемый, значение передается через useState, при нажатии развернет/свернет меню
        //в AccordionTitle передали onClick который вызывает функцию () => {setCollapsed(!collapsed)}
        //AccordionTitle через props.onClick при нажатии вызывает функцию () => {setCollapsed(!collapsed)}
    // let [collapsed, setCollapsed] = useState(true)
        // [имя, dispatch] = useReducer(функция в которую нужно передать, стартовое значение - если false меню не будет развернуто до нажатия, если true то будет развернуто до нажатия)
    let [collapsed, dispatch] = useReducer(reducer, false)
        return <div>
            {/*<AccordionTitle titleValue={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/> /!*передает полученный из app через props в AccordionTitle*!/*/}
            <AccordionTitle titleValue={props.titleValue} onClick={ () => {
                // debugger
                dispatch({type: TOGGLE_CONSTANT})}}/> {/*передает полученный из app через props в AccordionTitle*/}
            {!collapsed && <AccordionBody/>}
            </div>
        }

        //контролируемый, значение collapsed передается в компоненту из app
        // return <div>
        //     <AccordionTitle titleValue={props.titleValue}/> {/*передает полученный из app через props в AccordionTitle*/}
        //     {props.collapsed === false && <AccordionBody/>}
        //     </div>
        //     }

type AccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

//получает title из Accordion через props
function AccordionTitle(props: AccordionTitlePropsType) {
    return <div onClick={() => { props.onClick()}}>{props.titleValue}</div>
}

function AccordionBody() {
    return (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        )
}

export default UncontrolledAccordion;